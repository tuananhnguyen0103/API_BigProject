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
        $('#product_quantity').val(results.quantity);
        var a = (results.price)
        // $('#product_price').inputNumberFormat({ 'decimal': 0 });
    },
    error:function(results){
        console.log(results)
    }
    
})

 
var loadFile = function(event) {
    var inputfile = document.getElementById('inputFile01');
    var output = document.getElementById('product_image')
    console.log(inputfile);   
    console.log(inputfile.files[0]);   
    
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }  
    // var inputfile = document.getElementById('inputGroupFile01');
    // console.log(inputfile.inputGroupFile01);
    // var img = document.getElementById('product_image').src;
    // console.log(output);
};
function myFunction() {
    setTimeout(function(){ window.location.reload(); }, 3000);
  }
$('#update-product').submit(function (e){
    e.preventDefault();
    $('#btn-submit').html('<button type="submit" class="btn btn-primary" id="btn-submit"> <i class="fa fa-check"></i>'+'Đang thêm'+'</button>')
    var inputfile = document.getElementById('inputFile01');
    console.log(inputfile);    
    console.log(inputfile.files);   
    console.log(inputfile.files[0]);   
    const formdata = new FormData()
    formdata.append("image",inputfile.files[0])
    fetch("https://api.imgur.com/3/image/", {
        method: "post",
        headers: {
            Authorization: "Client-ID 5c31a53dda3c8e0"
        },
        body: formdata
    }).then(data => data.json()).then(data => {
       console.log(data)
       var _data={
            "name": $('#product_name').val(),
            "description":$('#product_description').val(),
            "image": data.data.link,
            "price":$('#product_price').val(),
            "quantity":$('#product_quantity').val(),
            "idCategories":$('#get-list-categories').val()
        }
        console.log(_data)
        $.ajax({
            type: "POST",
            url: "https://localhost:44352/api/product/update-item/"+id,
            data: _data,
            dataType: "json",
            success: function(data)
            { 
                toastr.success("Sửa Thành Công")
                $('#btn-submit').html('<button type="submit" class="btn btn-primary" id="btn-submit"> <i class="fa fa-check"></i> Save</button>');
               // window.location.reload();
               myFunction();
            //    document.getElementById("update-product").reset();
            //    setTimeout(document.getElementById("update-product").reset(), 3000)
               
            },
            error : function (e){      
                console.log(e)
                
            }
        })
    })
})
// Add ảnh


// End --  script ở trang sửa sản phẩm của admin