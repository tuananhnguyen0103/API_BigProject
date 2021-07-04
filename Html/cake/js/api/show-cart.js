// Biến lưu các id định xóa
var list_item_delete = [] ;
// arrayCur là mảng các sản phẩm còn lại trong giỏ hàng
var list_item_update = [] ;
$(document).ready(function() {
    var cartInLocal = JSON.parse(localStorage.getItem('cart'));
    if(cartInLocal==null){
        $('#show-cart-in-local').html('<h4 style="left:50rem">Giỏ hàng trống!</h4> ');
    }
    else{
        var  htmlTag = "";
        var totalCart = 0;
        cartInLocal.forEach(element => {
                htmlTag+='<tr class="cart-item">\
                <td class="product-thumbnail" id="'+element.id+'"><a href="shop-single.html"><img src="'+element.image+'" alt=""></a></td>\
                <td class="product-name"><a href="shop-single.html">'+element.name+'</a></td>\
                <td class="product-price">'+element.price+'</td> \
                <td class="product-quantity"><div class="quantity"><label>Quantity</label><input onchange="updateQuantity('+element.id+',this)" type="number" class="qty quantity-item" min="0" name="qty" value="'+element.quantity+'"/> </div></td>\
                <td class="product-subtotal"><span class="amount">'+element.price*element.quantity+'</span></td>\
                <td class="product-remove"> <a  onclick="deleteProductInCart('+element.id+',this)" class="remove"><span class="fa fa-times"></span></a></td>\
            </tr>'
            totalCart +=element.price*element.quantity;
        });
        list_item_update = cartInLocal;
        $('#show-cart-in-local').html(htmlTag);
        $('#total-in-cart').html(totalCart+' VNĐ');
    }
});
$('#update-in-cart').click(function() {
    // JSON.parse(localStorage.setItem('cart'));
    localStorage.setItem('cart', JSON.stringify(list_item_update));
    toastr.success("Cập nhật giỏ hàng thành công");
});
function deleteProductInCart(id,element){
    // Xóa đi row chứa phần tử này
    $(element).parents().eq(1).remove();
    toastr.success("Xóa thành công vui lòng cập nhật lại giỏ hàng");
    //console.log( $(element).parents().eq(2).find('.update-quantity').val())
    // Lấy giá trị của phần tử xóa bao gồm id của phần tử và số lượng của phần tử
    // var elementCart = [id,$(element).parents().eq(2).find('.update-quantity').val()]
    // idElement = $(element).parent().parent().parent().find('.product-thumbnail').attr('id');
    console.log(id);
    // Thêm các phần tử xóa vào trong giỏ hàng.
    list_item_delete.push(id);
    for (let index = 0; index < list_item_update.length; index++) {
        if(list_item_update[index].id==id){
            list_item_update.splice(index,1);
            break;
        }
    }
    console.log(list_item_update);
}

function updateQuantity(id,val){
    // alert(val.value);
    // idElement = $(val).parent().parent().parent().find('.product-thumbnail').attr('id');
    console.log(val.value);
    for (let index = 0; index < list_item_update.length; index++) {
        if(list_item_update[index].id ==id){
            list_item_update[index].quantity = parseInt(val.value);
            break;
        }
        
    }
}
function order()
{
  event.preventDefault();
  var address=$("#CustomerAddress").val();
  var phone=$("#CustomerPhone").val();
  var name=$("#CustomerName").val();
  var email = $("#CustomerEmail").val();
  if(address.trim()==""||phone.trim()==""||name.trim()==""||email.trim()=="")
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
          var billTotal = 0;
        list_item_update.forEach(element => {
            billTotal+=element.quantity*element.price;
        });
        var dataBill = {
          "BillTotal":billTotal
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
                  list_item_update.forEach(element => {
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
                      localStorage.clear()
                        window.location.href="http://desktop-lgb0cv5:5500/cake/index-7.html";
                    },
                    error : function (e){      
                        console.log(e)
                        if(e.status == 200){
                          localStorage.clear()
                          window.location.href="http://desktop-lgb0cv5:5500/cake/index-7.html";
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