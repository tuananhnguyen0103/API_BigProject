/**
 * Author -> ThemeTidy
 * Email -> support@themetidy.com
 * Version -> 1.0
 */

!function(e,a,t){"use strict";e(function(){i.initDomReady()}),e(a).load(function(){i.initWindowReady()});var i={initDomReady:function(){this.initMenu(),this.initPairaAnimation(),this.initDomLoadClass(),this.initDialogBox()},initWindowReady:function(){this.initToolTip(),this.initIE10ViewPortHack(),this.initWindowLoadClass(),this.initOwlCarousel(),this.initGoogleMap(),this.initBxCarousel()},pairaAnimation:function(a,t){a.each(function(){var a=e(this),i=a.attr("data-paira-animation"),o=a.attr("data-paira-animation-delay");a.css({"-webkit-animation-delay":o,"-moz-animation-delay":o,"animation-delay":o}),(t||a).waypoint(function(){a.addClass("animated").addClass(i)},{triggerOnce:!0,offset:"90%"})})},initPairaAnimation:function(){i.pairaAnimation(e(".paira-animation"))},initToolTip:function(){var a=e('[data-toggle="tooltip"]');a.length>0&&a.tooltip()},initMenu:function(){a.prettyPrint&&prettyPrint(),e(t).on("click",".paira-mega-menu .paira-dropdown-menu",function(e){e.stopPropagation()}),e(".paira-mega-menu ul .paira-dropdown-menu").parent().hover(function(){var t=e(this).find("ul");if(e(t).offset().left+t.width()>e(a).width()){var i=-e(t).width();t.css({left:i})}}),e(t).on("click",".paira-mega-menu .paira-angle-down",function(a){a.preventDefault(),e(this).parents(".paira-dropdown").find(".paira-dropdown-menu").toggleClass("active")}),e(t).on("click",".paira-dropdown-menu .dropdown-submenu .fa-angle-right",function(a){a.preventDefault(),e(this).parents("a").next().toggleClass("active-on")})},initDialogBox:function(){e(t).on("click",".paira-quick-view",function(a){a.stopPropagation(),e("#paira-quick-view").modal("show");var t=e(".paira-quick-product-image-list");t.length>0&&t.bxSlider({auto:!0,mode:"vertical",slideWidth:147,minSlides:3,pager:!1,responsive:!0,slideMargin:20})}),e(t).on("click",".search-popup",function(a){a.stopPropagation(),e("#paira-search").modal("show")}),e(t).on("click",".login-popup",function(a){a.stopPropagation(),e("#paira-login").modal("show")}),e(t).on("click",".cart-menu-body",function(a){a.stopPropagation(),e("#paira-ajax-cart").modal("show")}),e(t).on("click",".product-cart-con",function(a){a.stopPropagation(),e("#paira-ajax-success-message").modal("show")}),e("#paira-welcome-newsletter").modal("show")},initGoogleMap:function(){if(e("#googleMap").length>0){var a,i,o=[["Head Office",23.544997,89.172591,1],["Head Of Developer Office",23.544798,89.17048,2],["Production House",23.537337,89.174856,3],["Head Of Designer Office",23.531917,89.172887,4],["Selling House",23.545307,89.165835,5],["Packaging House",23.542749,89.167293,6],["Play Ground",23.544863,89.177532,7]],n=new google.maps.Map(t.getElementById("googleMap"),{zoom:14,center:new google.maps.LatLng(23.544997,89.172591),styles:[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}]}),l=new google.maps.InfoWindow;for(i=0;i<o.length;i++)a=new google.maps.Marker({position:new google.maps.LatLng(o[i][1],o[i][2]),map:n}),google.maps.event.addListener(a,"click",function(e,a){return function(){l.setContent(o[a][0]),l.open(n,e)}}(a,i))}},initBxCarousel:function(){var a=e(".single-product-image-list"),t=e(".bxslider");a.length>0&&a.bxSlider({auto:!0,mode:"vertical",slideWidth:147,minSlides:3,pager:!1,responsive:!0,slideMargin:20}),t.length>0&&t.bxSlider({mode:"horizontal",useCSS:!1,infiniteLoop:!1,hideControlOnEnd:!0,easing:!1,speed:0})},initOwlCarousel:function(){var a=e(".paira-brand");if(a.length>0){var t=a.owlCarousel({itemsCustom:[[1199,4],[992,4],[768,3],[480,2],[300,1],[200,1]],autoPlay:!1,slidespeed:500,autoHeight:!0,transitionStyle:"backSlide"});e(".paira-brand-left").on("click",function(){t.trigger("owl.prev")}),e(".paira-brand-right").on("click",function(){t.trigger("owl.next")})}},initIE10ViewPortHack:function(){if(navigator.userAgent.match(/IEMobile\/10\.0/)){var e=t.createElement("style");e.appendChild(t.createTextNode("@-ms-viewport{width:auto!important}")),t.querySelector("head").appendChild(e)}},initDomLoadClass:function(){var a=e(".toggle-button .fa"),i=e(".product-dtl");e(".paira-dom-ready").show(),e(t).on("click",".fa-angle-right",function(e){e.preventDefault(),a.removeClass("fa-angle-right").addClass("fa-angle-left"),i.toggleClass("single-product-tab")}),e(t).on("click",".fa-angle-left",function(e){e.preventDefault(),a.addClass("fa-angle-right").removeClass("fa-angle-left"),i.toggleClass("single-product-tab")})},ajaxGetData:function(a,t){var o=void 0!==t?t:"html";return e.ajax({url:a,type:"get",dataType:o,beforeSend:function(){i.showLoading()},error:function(){i.hideLoading();i.showCommonMessage('<i class="fa fa-info-circle font-size-16"></i> Something wrong! Try to reload your page OR contact customer support.')}})},showLoading:function(){e(".paira-loading").show()},hideLoading:function(){e(".paira-loading").hide()},showCommonMessage:function(a){var t=e("#paira-common-message");t.find(".paira-common-message-details").html(a),t.modal("show")},initWindowLoadClass:function(){var a=e(".parallax");a.length>0&&a.parallax("50%",.3),e(".paira-win-ready").show(),e(t).on("click","#paira-single-product-gallery a",function(a){a.preventDefault();var t=e(this).attr("data-image");i.ajaxGetData(t).done(function(){i.hideLoading(),e(".paira-single-product-image img").attr("src",t)})}),e(t).on("click",".paira-quick-product-image-list a",function(a){a.preventDefault();var t=e(this).attr("data-image");i.ajaxGetData(t).done(function(){i.hideLoading(),e(".paira-quick-single-product-image img").attr("src",t)})})}}}(window.jQuery,window,document);