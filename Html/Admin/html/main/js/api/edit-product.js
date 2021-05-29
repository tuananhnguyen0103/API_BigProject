// Start --  script ở trang sửa sản phẩm của admin
var id = location.search.slice(1).split("&")[0].split("=")[1]
console.log(id);

$.ajax({
    method : 'get',
    url: 'https://localhost:44352/api/categories/get-item',
    success: function(results){
        console.log(results)
        var htmlTag = "";
        results.forEach(element => {
            htmlTag+='<option value="'+element.id+'">'+element.name+'</option>'
            $('#get-list-categories').html(htmlTag);
        });
    },
    error:function(results){
        console.log(results)
    }
})


$.ajax({
    method : 'get',
    url: 'https://localhost:44352/api/product/get-item/'+id,
    success: function(results){
        console.log(results)
        $('#product_name').val(results.name);

        $('#product_price').val(results.price);
        $('#product_description').val(results.description);
        $('#product_image').attr("src",results.image);
        var a = (results.price)
        // $('#product_price').inputNumberFormat({ 'decimal': 0 });
    },
    error:function(results){
        console.log(results)
    }
    
})

 
var loadFile = function(event) {
    var output = document.getElementById('product_image');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }


   
};

// Add ảnh
var inputfile = document.getElementById('inputGroupFile01');
console.log(inputfile.files[0]);

const formdata = new FormData()

// formdata.append("image",inputfile.files[0])
// fetch("https://api.imgur.com/3/image/", {
//     method: "post",
//     headers: {
//         Authorization: "Client-ID 5c31a53dda3c8e0"
//     },
//         body: formdata
// }).then(data => data.json()).then(data => {
//     console.log(data)
//     var _data={
//         "Product_Name":$("#name").val(),
//        "Price": $("#price").val(),
//         "image": data.data.link,
//         "Category_ID":$( "#type" ).val()
//     }
// })

// End --  script ở trang sửa sản phẩm của admin