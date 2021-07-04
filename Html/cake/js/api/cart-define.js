var cartInLocal = JSON.parse(localStorage.getItem('cart'));
$(document).on('click', '.add-cart', function(e) {
    var itemInCart = {}
    var id = location.search.slice(1).split("&")[0].split("=")[1];
    console.log(id);
    if(id == undefined)
    {
        e.preventDefault();
        var button = $(this);
        var item = {
          id: button.data('id'),
          price: button.data('price'),
          quantity: 1,
          name: button.data('name'),
          image: button.data('image'),
          show: 1,  
        }
        // Cart.addItem(item);
        console.log(item);
        itemInCart = item;
    } else{
        item= {
            id: parseInt(id),
            price:parseInt($('#product_price').html()),
            quantity:parseInt($('#product_quantity').val()),
            name:$('#product_name').html(),
            image:$('#product_image').attr("src"),
            show: 1, 
        }
        console.log(item);
        itemInCart = item;
    }
    // try {
    //     var button = $(this);
    //     if(id == undefined)
    //  {
    //     e.preventDefault();
        
    //     var item = {
    //       id: button.data('id'),
    //       price: button.data('price'),
    //       quantity: 1,
    //       name: button.data('name'),
    //       image: button.data('image'),
    //       show: 1,  
    //     }
    //     // Cart.addItem(item);
    //     console.log(item);
    //     itemInCart = item;
    // } 
    // } catch (error) {
        
    //     item= {
    //         id: parseInt(id),
    //         price:parseInt($('#product_price').html()),
    //         quantity:parseInt($('#product_quantity').val()),
    //         name:$('#product_name').html(),
    //         image:$('#product_image').attr("src"),
    //         show: 1, 
    //     }
    //     console.log(item);
    //     itemInCart = item;
    // }
    console.log(cartInLocal);
    if(cartInLocal==null){
        cartInLocal = [];
        cartInLocal.push(itemInCart);
        localStorage.setItem('cart', JSON.stringify(cartInLocal));
    }
    else{
        var check = 0;
        
        for (let index = 0; index < cartInLocal.length; index++) {
            if(cartInLocal[index].id == itemInCart.id){
                cartInLocal[index].quantity+=itemInCart.quantity;
                localStorage.setItem('cart', JSON.stringify(cartInLocal));
                check = 1;
                break;
            }
        }
        if(check == 0){
            cartInLocal.push(itemInCart);
            localStorage.setItem('cart', JSON.stringify(cartInLocal));
        }
    }
    toastr.success('Thêm thành công');
});


