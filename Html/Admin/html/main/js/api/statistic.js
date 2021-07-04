var date = new Date();
var month_now = date.getMonth()+1;
var year_now = date.getYear();

function getLastDay(year,month){
    return  new Date(year, month +1, 0).getDate();
}
lastday = getLastDay(year_now,month_now-1);
listOfDay = []
listOfTotal = []
for (let index = 1; index <= lastday; index++) {
    listOfDay.push(index);
}

console.log(listOfDay);
$.ajax({
    method : 'get',
    url: 'https://localhost:44352/api/bill/get-item-by-month/'+month_now,
    success: function(results){
        console.log(results)
        $('#month-for-budget').val(month_now);
        listOfDay.forEach(elementDay => {
            var totalInDay = 0;
            results.forEach(elementvalue => {
                var arrayDay = elementvalue.billDateBuy.substring(0,elementvalue.billDateBuy.indexOf(" ")).split("/");
                console.log(arrayDay[1]);
                if(elementDay==arrayDay[1]){
                    totalInDay+=elementvalue.billTotal;
                }
            });
            if(totalInDay==0){
                listOfTotal.push(0)
            }
            else{
                listOfTotal.push(totalInDay);
            }
        });
        
        // var  htmlTag = "";
        // // $('#cars').html(htmlTag);
        var chart =Highcharts.chart('container', {


            chart: {
              type: 'spline'
            },
            title: {
              text: 'Doanh thu của quán'
            },
            subtitle: {
              text: 'Tháng '+month_now
            },
            xAxis: {
                categories:listOfDay,
                title:{
                    text: 'Ngày trong tháng'
                }
                },
            yAxis: {
              title: {
                text: 'Số tiền'
              },
              labels: {
                formatter: function () {
                  return Intl.NumberFormat('en-US').format(this.value) + 'VND';
                }
              }
            },
            tooltip: {
              crosshairs: true,
              shared: true
            },
            plotOptions: {
              spline: {
                marker: {
                  radius: 4,
                  lineColor: '#666666',
                  lineWidth: 1
                }
              }
            },
            series: [{
                color: '#333',
                name: 'Số tiền',
                marker: {
                symbol: 'cricle'
              },
              data:listOfTotal
    
            }]
          });
    },
    error: function(results){
        console.log(results)
    }
})
$('#month-for-budget').change(function(){
    event.preventDefault();
    var jsVariable = '<%= Session[\"staff_name\"]%>';
    console.log(jsVariable);
    // console.log(sessionStorage);
    // var value = $(this).val();
    // sessionStorage.setItem("myVar",value);
    // // conssol(value);
    // console.log(sessionStorage.getItem("myVar"));
    var $data = {'month':$(this).val()}
    var new_month = $(this).val();
    lastday = getLastDay(year_now,new_month-1);
    listOfDay = []
    listOfTotal = []
    for (let index = 1; index <= lastday; index++) {
        listOfDay.push(index);
    }
    $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      });
      $.ajax({
        method : 'get',
        url: 'https://localhost:44352/api/bill/get-item-by-month/'+new_month,
        success: function(results){
            console.log(results)
            listOfDay.forEach(elementDay => {
                var totalInDay = 0;
                results.forEach(elementvalue => {
                    var arrayDay = elementvalue.billDateBuy.substring(0,elementvalue.billDateBuy.indexOf(" ")).split("/");
                    console.log(arrayDay[1]);
                    if(elementDay==arrayDay[1]){
                        totalInDay+=elementvalue.billTotal;
                    }
                });
                if(totalInDay==0){
                    listOfTotal.push(0)
                }
                else{
                    listOfTotal.push(totalInDay);
                }
            });
            
            // var  htmlTag = "";
            // // $('#cars').html(htmlTag);
            var chart =Highcharts.chart('container', {
    
    
                chart: {
                  type: 'spline'
                },
                title: {
                  text: 'Doanh thu của quán'
                },
                subtitle: {
                  text: 'Tháng '+new_month
                },
                xAxis: {
                    categories:listOfDay,
                    title:{
                        text: 'Ngày trong tháng'
                    }
                    },
                yAxis: {
                  title: {
                    text: 'Số tiền'
                  },
                  labels: {
                    formatter: function () {
                      return Intl.NumberFormat('en-US').format(this.value) + 'VND';
                    }
                  }
                },
                tooltip: {
                  crosshairs: true,
                  shared: true
                },
                plotOptions: {
                  spline: {
                    marker: {
                      radius: 4,
                      lineColor: '#666666',
                      lineWidth: 1
                    }
                  }
                },
                series: [{
                    color: '#333',
                    name: 'Số tiền',
                    marker: {
                    symbol: 'cricle'
                  },
                  data:listOfTotal
        
                }]
              });
        },
        error: function(results){
            console.log(results)
        }
    })
    
});

//Start Get amount product , bill and total
var countProduct = 0;
$.ajax({
    method : 'get',
    url: 'https://localhost:44352/api/product/get-item',
    success: function(results){
        console.log(results)
        results.forEach(element => {
			countProduct++;
		});
        $('#amount_product').html(countProduct+ "  Sản phẩm")
    },
    error: function(results){
        console.log(results)
    }
})
var countBill = 0;
$.ajax({
    method : 'get',
    url: 'https://localhost:44352/api/Bill/get-item-done',
    success: function(results){
        console.log(results)
        results.forEach(element => {
			countBill++;
		});
        $('#amount_bill').html(countBill+ "  Đơn hàng")
    },
    error: function(results){
        console.log(results)
    }
})
var totalBill = 0;
$.ajax({
    method : 'get',
    url: 'https://localhost:44352/api/Bill/get-item-done',
    success: function(results){
        console.log(results)
        results.forEach(element => {
			totalBill+=element.billTotal;
		});
        $('#amount_total').html(totalBill.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}))
    },
    error: function(results){
        console.log(results)
    }
})
//End Get amount product , bill and total