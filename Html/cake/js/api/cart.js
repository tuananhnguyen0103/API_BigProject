var Cart = {};

Cart.on = function(eventName, callback) {
  if (!Cart.callbacks[eventName]) Cart.callbacks[eventName] = [];
  Cart.callbacks[eventName].push(callback);
  return Cart;
};

Cart.trigger = function(eventName, args) {
  if (Cart.callbacks[eventName]) {
    for (var i = 0; i<Cart.callbacks[eventName].length; i++) {
      Cart.callbacks[eventName][i](args||{});
    }
  }
  return Cart;
};

Cart.save = function() {
  localStorage.setItem('cart_items', JSON.stringify(Cart.items));
  Cart.trigger('saved');

  return Cart;
};

Cart.empty =  function() {
  Cart.items = [];
  Cart.trigger('emptied');
  Cart.save();
  

  return Cart;
};

Cart.indexOfItem = function(id) {
  for (var i = 0; i<Cart.items.length; i++) {
    if (Cart.items[i].id===id) return i;
  }
  return null;
};

Cart.removeEmptyLines = function() {
  newItems = [];
  for (var i = 0; i<Cart.items.length; i++) {
    if (Cart.items[i].quantity>0) newItems.push(Cart.items[i]);
  }
  Cart.items = newItems;
  return Cart;
};

Cart.addItem = function(item) {
  if (!item.quantity) item.quantity = 1;
  var index = Cart.indexOfItem(item.id);
  if (index===null) {
    Cart.items.push(item);
  } else {
    Cart.items[index]. quantity += item.quantity;
  }
  Cart.removeEmptyLines();
  if (item.quantity > 0) {
    Cart.trigger('added', {item: item});
  } else {
    Cart.trigger('removed', {item: item});
  }

  Cart.save();


  return Cart;
};

Cart.itemsCount = function() {
  var accumulator = 0;
  for (var i = 0; i<Cart.items.length; i++) {
    accumulator += Cart.items[i].quantity;
  }
  return accumulator;
};

Cart.currency = 'VND';



Cart.linePrice = function(index) {
  return Cart.items[index].price * Cart.items[index].quantity;
};

Cart.subTotal = function() {
  var accumulator = 0;
  for (var i = 0; i<Cart.items.length; i++) {
    accumulator += Cart.linePrice(i);
  }
  return accumulator;
};

Cart.init = function() {
  var items = localStorage.getItem('cart_items');
  if (items) {
    Cart.items = JSON.parse(items);
  } else {
    Cart.items = [];
  }
  Cart.callbacks = {};
  return Cart;
}

Cart.initJQuery = function() {

  Cart.init();

  Cart.templateCompiler = function(a,b){return function(c,d){return a.replace(/#{([^}]*)}/g,function(a,e){return Function("x","with(x)return "+e).call(c,d||b||{})})}};

  console.log(this)


    var cartItem = '<tr class="cart-item">\
    <td class="product-thumbnail"><a href="shop-single.html"><img src="#{this.image}" alt=""></a></td>\
    <td class="product-name"><a href="shop-single.html">#{this.name}</a></td>\
    <td class="product-price">#{this.price}</td> \
    <td class="product-quantity"><div class="quantity"><label>Quantity</label><input type="number" class="qty" name="qty" value="#{this.quantity}"> </div></td>\
    <td class="product-subtotal"><span class="amount">#{Cart.linePrice(Cart.indexOfItem(this.id))}</span></td>\
    <td class="product-remove"> <a href="#" class="remove"><span class="fa fa-times"></span></a></td>\
</tr>'
      Cart.lineItemTemplate = cartItem;

  
  $(document).on('click', '.add-cart', function(e) {
    e.preventDefault();
    var button = $(this);
    var item = {
      id: button.data('id'),
      price: button.data('price'),
      quantity: button.data('quantity'),
      name: button.data('name'),
      image: button.data('image')
    }
    Cart.addItem(item);
  });

  var updateReport = function() {
    var count = Cart.itemsCount();
    $('.cart-items-count').text(count);
    $('.cart-subtotal_l').html(Cart.displayPrice(Cart.subTotal()));
    if (count===1) {
      $('.cart-items-count-singular').show();
      $('.cart-items-count-plural').hide();
    } else {
      $('.cart-items-count-singular').hide();
      $('.cart-items-count-plural').show();
    }
  };


  var updateCartinPageCart = function(){
    for (var index =0 ; index < localStorage.length ; index++) {
        
      
    }
  }
  var updateCart = function() {
    if (Cart.items.length>0) {
      var template = Cart.templateCompiler(Cart.lineItemTemplate);
      var lineItems = "";
      for (var i = 0; i<Cart.items.length; i++) {
        lineItems += template(Cart.items[i]);
      }
      $('.cart-line-items').html($('.cart-line-items').html()+lineItems);
      $('.cart-table').show();
      $('.cart-is-empty').hide();
    } else {
      $('.cart-table').hide();
      $('.cart-is-empty').show();
    }
  };

  var update = function() {
    updateReport();
    updateCart();
  };
  update();

  Cart.on('saved', update);

  return Cart;
};

Cart.displayPrice = function(price) {
    if (price===0) return 'Free';
    // var floatPrice = price/100;
    // var decimals = floatPrice==parseInt(floatPrice, 10) ? 0 : 2;
   
    return   price +" "+Cart.currency;
  };

Cart.checkout =function()
{
  event.preventDefault();
  var address=$("#CustomerAddress").val();
  var phone=$("#CustomerPhone").val();
  var name=$("#CustomerName").val();
  var email = $("#CustomerEmail").val();
  if(address.trim()==""||phone.trim()==""||name.trim()==""||email.trim()==""||Cart.itemsCount()==0)
  {
    toastr.error("vui lòng nhập đầy đủ thông tin")
  }
  else{
    var dataCus={
    "CustomerAddress":address,
    "CustomerPhone":phone,
    "CustomerName":name,
    "CustomerEmail":email,
    }
    console.log(dataCus);
    $.ajax({
      
      type: "POST",
      url: "https://localhost:44352/api/Customer/create-item",
      data: dataCus,
      dataType: "json",
      success: function(dataCus)
      { 
        // var model=[];
        // Cart.items.forEach(element => {
        //    model.push(element)
        // });
        // console.log(JSON.stringify(model))
        var dataBill = {
          "BillTotal":Cart.subTotal()
        }
        console.log(dataBill);
        $.ajax({
                type: "POST",
                url: "https://localhost:44352/api/bill/create-item",
                data: dataBill,
                dataType: "json",
                success: function(data)
                { 
                  var model=[];
                  Cart.items.forEach(element => {
                    var m ={
                      idProduct:element.id,
                      quantity:element.quantity,
                      total:element.quantity*element.price
                    }
                    model.push(m)
                  });
                  console.log(model)
                  console.log(JSON.stringify(model))
                  $.ajax({
                    type: "POST",
                    url: "https://localhost:44352/api/BillDetails/create-item",
                    data: JSON.stringify(model),
                    dataType: "json",
                    contentType: 'application/json; charset=utf-8',
                    success: function(e)
                    { 
                      console.log(e)
                      // var model=[];
                      // Cart.items.forEach(element => {
                      //   model.push(element)
                      // });
                      // console.log(JSON.stringify(model))  
                        Cart.empty();
                        window.location.href="/index.html";
                    },
                    error : function (e){      
                        console.log(e)
                        if(e.status == 200){
                          Cart.empty();
                          window.location.href="/Html/cake/index-7.html";
                        }
                        else{

                        }
                    }
                })
                },
                error : function (e){      
                    console.log(e)
                
                }
          })

          // Cart.empty();
          // window.location.href="/index.html";
      },
      error : function (e){      
          console.log(e)
      
      }
  })

  }
  
}
