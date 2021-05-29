// Start -- script ở trang sản phẩm của admin
$.ajax({
    method : 'get',
    url: 'https://localhost:44352/api/product/get-item',
    success: function(results){
        console.log(results)
        var  htmlTag = "";
        results.forEach(element => {
            htmlTag+='<div class="col-12 col-lg-6 col-xl-4">\
				  <div class="box">\
					<div class="fx-card-item">\
						<div class="fx-card-avatar fx-overlay-1"> <img src="'+element.image+'" alt="user" class="bbsr-0 bber-0">\
							<div class="fx-overlay scrl-up">\
								<ul class="fx-info">\
									<li><a class="btn btn-outline image-popup-vertical-fit" href="../images/product/product-1.png"><i class="mdi mdi-magnify"></i></a></li>\
									<li><a class="btn btn-outline" href="javascript:void(0);"><i class="mdi mdi-delete"></i></a></li>\
									<li><a class="btn btn-outline" href="/main/ecommerce_products_edit.html?id='+element.id+'"><i class="mdi mdi-settings"></i></a></li>\
								</ul>\
							</div>\
						</div>\
						<div class="fx-card-content text-start">\
							<div class="product-text">\
								<h2 class="pro-price text-blue">'+element.price+'</h2>\
								<h4 class="box-title mb-0">'+element.name+'</h4>\
								<small class="text-muted db">'+element.nameCategories+'</small>\
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

// End -- script ở trang sản phẩm của admin
