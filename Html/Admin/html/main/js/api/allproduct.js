// Start -- script ở trang sản phẩm của admin
list_product = []
$.ajax({
    method : 'get',
    url: 'https://localhost:44352/api/product/get-item',
    success: function(results){
        console.log(results)
        var  htmlTag = "";
        results.forEach(element => {
			list_product.push(element);
            htmlTag+='<div class="col-12 col-lg-6 col-xl-4">\
				  <div class="box">\
					<div class="fx-card-item">\
						<div class="fx-card-avatar fx-overlay-1" style ="width: 24rem;height: 26rem;"> <img style = "height: 19rem;max-width: 80%; margin: 2rem;" src="'+element.image+'" alt="user" class="bbsr-0 bber-0">\
							<div class="fx-overlay scrl-up">\
								<ul class="fx-info">\
									<li><a class="btn btn-outline image-popup-vertical-fit" href="../images/product/product-1.png"><i class="mdi mdi-magnify"></i></a></li>\
									<li><a class="btn btn-outline" href="javascript:void(0);"><i class="mdi mdi-delete"></i></a></li>\
									<li><a class="btn btn-outline" href="http://desktop-lgb0cv5:5500/Admin/html/main/ecommerce_products_edit.html?id='+element.id+'"><i class="mdi mdi-settings"></i></a></li>\
								</ul>\
							</div>\
						</div>\
						<div class="fx-card-content text-start">\
							<div class="product-text">\
								<div style = "width: 60%">\
								<h4 class="box-title mb-0">'+element.name+'</h4>\
								<small class="text-muted db">'+element.nameCategories+'</small>\
								</div>\
								<div  style = "width: 40%">\
									<h2 class="pro-price text-blue">'+element.price+'</h2>\
								</div>\
							</div>\
						</div>\
					</div>\
				  </div>\
			  </div>'
            $('#div-have-product').html(htmlTag);
            
        
		});
    },
    error: function(results){
        console.log(results)
    }
})
$('#search_product').click(function(){
	var  htmlTag = "";
	var text_search = $('#search_product_input').val().toLowerCase();
	
	list_product.forEach(element => {
		if(element.name.toLowerCase().search(text_search)!=-1){
			htmlTag+='<div class="col-12 col-lg-6 col-xl-4">\
				  <div class="box">\
					<div class="fx-card-item">\
						<div class="fx-card-avatar fx-overlay-1" style ="width: 24rem;height: 26rem;"> <img style = "height: 19rem;max-width: 80%; margin: 2rem;" src="'+element.image+'" alt="user" class="bbsr-0 bber-0">\
							<div class="fx-overlay scrl-up">\
								<ul class="fx-info">\
									<li><a class="btn btn-outline image-popup-vertical-fit" href="../images/product/product-1.png"><i class="mdi mdi-magnify"></i></a></li>\
									<li><a class="btn btn-outline" href="javascript:void(0);"><i class="mdi mdi-delete"></i></a></li>\
									<li><a class="btn btn-outline" href="http://desktop-lgb0cv5:5500/Admin/html/main/ecommerce_products_edit.html?id='+element.id+'"><i class="mdi mdi-settings"></i></a></li>\
								</ul>\
							</div>\
						</div>\
						<div class="fx-card-content text-start">\
							<div class="product-text">\
								<div style = "width: 60%">\
								<h4 class="box-title mb-0">'+element.name+'</h4>\
								<small class="text-muted db">'+element.nameCategories+'</small>\
								</div>\
								<div  style = "width: 40%">\
									<h2 class="pro-price text-blue">'+element.price+'</h2>\
								</div>\
							</div>\
						</div>\
					</div>\
				  </div>\
			  </div>'
            $('#div-have-product').html(htmlTag);
		}
	});
	// alert(text_search.search("hay"));
})
// End -- script ở trang sản phẩm của admin