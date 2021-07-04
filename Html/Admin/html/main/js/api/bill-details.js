var id = location.search.slice(1).split("&")[0].split("=")[1]
var list_product = []
var list_bill_details = []
var list_bill_details_update = []
var table = $('#example').DataTable();
var index = 0 
console.log(id);
// Start Get info of bill details
$.ajax({
    method : 'get',
    url: 'https://localhost:44352/api/BillDetails/get-item/'+id,
    success: function(results){
        console.log(results)
        list_bill_details = results;
        var  htmlTag = "";
        var number = 0;
        var t = $('#example').DataTable();
        for (let index = 0; index < results.length; index++) {
            console.log(index);
            console.log(results[index]);
            var a = 1;
            table.row.add( [
                parseInt(index +a),
                results[index].name,
                results[index].price,
                '<input class="quantity-bill-details form-control" type="text" onchange="myFunction(this.value,'+results[index].idProduct+')"  value='+results[index].quantity+'>',
                results[index].total,
                '<div style = "display:flex;">\
                <a class="dropdown-item fs-16" onclick="deleteItem('+results[index].idProduct+')" href="#"><i class="mdi mdi-delete"></i></a>\
                <a class="dropdown-item fs-16" href="http://desktop-lgb0cv5:5500/Admin/html/main/bill-details.html?id='+results[index].id+'"><i class="mdi mdi-settings"></i></a></div>'
            ] ).draw( false );
        }

        results.forEach(element => {
        
        });
        
    },
    error: function(results){
        console.log(results)
    }
})
// End Get info of bill details
// Start Get info of bill
$.ajax({
    method : 'get',
    url: 'https://localhost:44352/api/bill/get-item/'+id,
    success: function(results){
        console.log(results)
        // console.log(results.billDateBuy.substring(0,results.billDateBuy.indexOf(" ")));
        $('#bill_state').val(results.billState);
        if(results.billDescription==null){
            $('#bill_des').val("Không có gì")
        }
        else{
            $('#bill_des').val(results.billDescription);
        }
        $('#bill_date').val(results.billDateBuy.substring(0,results.billDateBuy.indexOf(" ")));
        $('#bill_totals').html("Tổng tiền "+results.billTotal.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}));

        
        
    },
    error: function(results){
        console.log(results)
    }
})
// End get info of bill
// Start Get info of product
$.ajax({
    method : 'get',
    url: 'https://localhost:44352/api/product/get-item',
    success: function(results){
        console.log(results)
        var  htmlTag = "";
        // $('#cars').html(htmlTag);
        results.forEach(element => {
            htmlTag+='<option value="'+element.id+'">'+element.name+'</option>'
            $('#cars').html(htmlTag);
            list_product.push(element);
            
        });
    },
    error: function(results){
        console.log(results)
    }
})
// End Get info of product
// Start Get info of customer
$.ajax({
    method : 'get',
    url: 'https://localhost:44352/api/customer/get-item/'+id,
    success: function(results){
        console.log(results)
        $('#customer_name').val(results.customerName);
        $('#customer_email').val(results.customerEmail);
        $('#customer_phone').val(results.customerPhone);
        $('#customer_address').val(results.customerAddress);
    },
    error: function(results){
        console.log(results)
    }
})
// End Get info of customer

// Add bill details in bill
$('#cars').on('change', function() {
    var table12 = $('#example').DataTable();
    var index_details=list_bill_details.length;
    var bill_details_item  = {};
    console.log(this.value)
    var check1 = false;
    var check2 = false;
    for (let index = 0; index < list_product.length; index++) {
        // console.log(list_product[index]);
        if(this.value==list_product[index].id){
            for (let index1 = 0; index1 < list_bill_details.length; index1++) {
                if(this.value==list_bill_details[index1].idProduct){
                    console.log("Đã có trong danh sách");
                    list_bill_details[index1].quantity+=1;
                    table12.clear().draw();
                    for (let i = 0; i < list_bill_details.length; i++) {
                        var num = 0;
                        num = i+1;
                        table12.row.add( [
                        parseInt(num),
                        list_bill_details[i].name,
                        list_bill_details[i].price,
                        '<input class="quantity-bill-details form-control" type="text" onchange="myFunction(this.value,'+list_bill_details[i].idProduct+')"  value='+list_bill_details[i].quantity+'>',
                        list_bill_details[i].price*list_bill_details[i].quantity,
                        '<div style = "display:flex;">\
                        <a class="dropdown-item fs-16" onclick="deleteItem('+list_bill_details[i].idProduct+')" href="#"><i class="mdi mdi-delete"></i></a>\
                        <a class="dropdown-item fs-16" href="http://desktop-lgb0cv5:5500/Admin/html/main/bill-details.html?id='+list_bill_details[i].id+'"><i class="mdi mdi-settings"></i></a></div>'
                    ] ).draw( false );
                        
                    }
                    check1 = true;
                    break;
                }
            }
            if(check1==false){
                console.log(list_product[index]);
                console.log(list_bill_details);
                bill_details_item ={
                    'idProduct':list_product[index].id,
                    'name':list_product[index].name,
                    'price':list_product[index].price,
                    'quantity':1,
                    'total':list_product[index].price,
                }
                console.log(bill_details_item);
                list_bill_details.push(bill_details_item);
                console.log(list_bill_details);
                table12.clear().draw();
                for (let i = 0; i < list_bill_details.length; i++) {
                    var num = 0;
                    num = i+1;
                    table12.row.add( [
                    parseInt(num),
                    list_bill_details[i].name,
                    list_bill_details[i].price,
                    '<input class="quantity-bill-details form-control" type="text" onchange="myFunction(this.value,'+list_bill_details[i].idProduct+')"  value='+list_bill_details[i].quantity+'>',
                    list_bill_details[i].price*list_bill_details[i].quantity,
                    '<div style = "display:flex;">\
                    <a class="dropdown-item fs-16" onclick="deleteItem('+list_bill_details[i].idProduct+')" href="#"><i class="mdi mdi-delete"></i></a>\
                    <a class="dropdown-item fs-16" href="http://desktop-lgb0cv5:5500/Admin/html/main/bill-details.html?id='+list_bill_details[i].id+'"><i class="mdi mdi-settings"></i></a></div>'
                ] ).draw( false );
                    
                }
            }
            break;
            
        }
        
    }
    

    console.log(list_bill_details.length);
});
function deleteItem(val){
    console.log(val)
    for (let index = 0; index < list_bill_details.length; index++) {
       if(list_bill_details[index].idProduct==val){
           list_bill_details.splice(index,1);
           break;
       }
    }
    table.clear().draw();
    for (let i = 0; i < list_bill_details.length; i++) {
        var num = 0;
        num = i+1;
        table.row.add( [
        parseInt(num),
        list_bill_details[i].name,
        list_bill_details[i].price,
        '<input class="quantity-bill-details form-control" type="text" onchange="myFunction(this.value,'+list_bill_details[i].idProduct+')"   value='+list_bill_details[i].quantity+'>',
        list_bill_details[i].price*list_bill_details[i].quantity,
        '<div style = "display:flex;">\
        <a class="dropdown-item fs-16" onclick="deleteItem('+list_bill_details[i].idProduct+')" href="#"><i class="mdi mdi-delete"></i></a>\
        <a class="dropdown-item fs-16" href="http://desktop-lgb0cv5:5500/Admin/html/main/bill-details.html?id='+list_bill_details[i].id+'"><i class="mdi mdi-settings"></i></a></div>'
    ] ).draw( false );
        
    }
    console.log(list_bill_details);
    console.log(JSON.stringify(list_bill_details))
}
$('#update-bill-details').on('click',function(){
    console.log(list_bill_details);
    list_bill_details.forEach(element => {
        var item = {
            idProduct:element.idProduct,
            quantity:element.quantity,
            total:element.quantity*element.price,
            idBill: id,
        };
        list_bill_details_update.push(item);
    });
    // console.log(list_bill_details_update);
    var data ={
        idBill : id,
    }
    var infoCustomer ={
        "CustomerAddress":$('#customer_address').val(),
        "CustomerPhone":$('#customer_phone').val(),
        "CustomerName": $('#customer_name').val(),
        "CustomerEmail":$('#customer_email').val(),
    }
    console.log(infoCustomer);
    // Start Update info customer
    $.ajax({
        type: "POST",
        url: "https://localhost:44352/api/Customer/update-item/"+id,
        data: JSON.stringify(infoCustomer),
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        success: function(e)
        { 
            console.log(e)
            console.log("Thanh công 123214");
            toastr.success("Cập nhật thành công");
        },
        error : function (e){      
            console.log("lỗi 123");
            console.log(e)
            if(e.status == 200){
                    toastr.success("Cập nhật thành công");
            }
            else{
                console.log(e)
            }
        }
    })
    // End update info customer
    var totalBill = 0;
    list_bill_details_update.forEach(element => {
        totalBill+=element.total;
    });
    var dataTotalBill ={
        "BillState":$('#bill_state option:selected').val(),
        "billDateBuy":$('#bill_date').val(),
        "billDescription": $('#bill_des').val(),
        "billTotal":totalBill,
    }
    console.log(dataTotalBill);
    // Start update bill
    $.ajax({
        type: "POST",
        url: "https://localhost:44352/api/Bill/update-item/"+id,
        data: JSON.stringify(dataTotalBill),
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        success: function(e)
        { 
            console.log(e)
            console.log("Thanh công 123214");
            // toastr.success("Cập nhật thành công");
        // window.location.href="http://desktop-lgb0cv5:5500/Admin/html/main/bill.html";
        },
        error : function (e){      
            console.log("lỗi 123");
            console.log(e)
            if(e.status == 200){
                    // toastr.success("Cập nhật thành công");
                    // window.location.href="http://desktop-lgb0cv5:5500/Admin/html/main/bill.html";
            }
            else{
                console.log(e)
            }
        }
    })
    // End update bill
    $.ajax({
        method : 'get',
        url: 'https://localhost:44352/api/BillDetails/delete-bill-details-when-update/'+id,
        success: function(results){
            console.log("Thanh công ");
            $.ajax({
                type: "POST",
                url: "https://localhost:44352/api/BillDetails/create-item-when-update",
                data: JSON.stringify(list_bill_details_update),
                dataType: "json",
                contentType: 'application/json; charset=utf-8',
                success: function(e)
                { 
                    console.log(e)
                    console.log("Thanh công 123214");
                    // toastr.success("Cập nhật thành công");
                    window.location.href="http://desktop-lgb0cv5:5500/Admin/html/main/bill.html";
                    
                },
                error : function (e){      
                    console.log("lỗi 123");
                    console.log(e)
                    // toastr.success("Cập nhật thành công");
                    if(e.status == 200){
                        window.location.href="http://desktop-lgb0cv5:5500/Admin/html/main/bill.html";
                    }
                    else{

                    }
                }
            })
        },
        error: function(results){
            console.log(results)
            console.log("lỗi 123123");
        }
    })
    console.log("Thanh công 123");
});

$('#example tbody').on( 'click', 'tr', function () {
    // alert( 'Row index: '+table.row( this ).index() );
    index = table.row( this ).index();
} );
function myFunction(val,idProduct) {
    console.log(index);
    var data = table.row(index).data();
    console.log(data);
    console.log(data[1]);
    console.log(idProduct);
    for (let index = 0; index < list_bill_details.length; index++) {
        if(list_bill_details[index].idProduct==idProduct){
            list_bill_details[index].quantity = val;
        }
        
    }
    newData = [data[0],data[1],data[2],'<input class="form-control quantity-bill-details" type="text"  onchange="myFunction(this.value,'+idProduct+')" value='+val+'>',data[2]*val,data[5]] //Array, data here must match structure of table data
    console.log(newData);
    table.row(index).data( newData ).draw(false);
}