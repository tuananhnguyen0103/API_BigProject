
// Start -- script ở trang sản phẩm của admin
$.ajax({
    method : 'get',
    url: 'https://localhost:44352/api/Bill/get-item',
    success: function(results){
        console.log(results)
        var  htmlTag = "";
        var number = 0;
        var t = $('#example').DataTable();
        for (let index = 0; index < results.length; index++) {
            console.log(index);
            console.log(results[index]);
            var a = 1;
            t.row.add( [
                parseInt(index +a),
                results[index].customerName,
                results[index].billDateBuy,
                results[index].customerAddress,
                results[index].billTotal,
                results[index].billState,
                '<div style = "display:flex;">\
                <a class="dropdown-item fs-16" href="#"><i class="mdi mdi-delete"></i></a>\
                <a class="dropdown-item fs-16" href="http://desktop-lgb0cv5:5500/Admin/html/main/bill-details.html?id='+results[index].id+'"><i class="mdi mdi-settings"></i></a></div>'
            ] ).draw( false );
        }

        results.forEach(element => {
            // console.log(element)
        //     htmlTag+=
        // '<tr>\
        //     <td>'+number++;'</td>\
        //     <td>'+element.CustomerName+'</td>\
        //     <td>'+element.BillDateBuy+'</td>\
        //     <td>'+element.CustomerAddress+'</td>\
        //     <td>'+element.BillTotal+'</td>\
        //     <td>'+element.BillState+'</td>\
        // </tr>'
        //     // console.log($('#have-all-bill').html);
        //     // $('#have-all-bill').html(htmlTag);
        //     var table = $('#example').DataTable();
 
        //     table.row.add( {
        //             "STT":       "Tiger Nixon",
        //             "Tên":   "System Architect",
        //             "Ngày Mua":     "$3,120",
        //             "Địa chỉ": "2011/04/25",
        //             "Tổng tiền":     "Edinburgh",
        //             "Trạng thái":       "5421"
        //         } ).draw(false);
        });
        
    },
    error: function(results){
        console.log(results)
    }
})

// End -- script ở trang sản phẩm của admin
