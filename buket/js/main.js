$(document).ready(function() {

	var header_h = 118;
	var menu = $('header');
	menu.css({'position' : 'fixed', 'width' : '100%', 'margin' : '0 auto', 'z-index' : '10' , 'top' : header_h + 'px'});
	
	function renderHead() {
		var top = $(window).scrollTop();
		if(top < header_h){
			menu.css({'top': header_h - top +'px'});
		} else {
			menu.css({'top': '0'});
		}
	}

		renderHead();

		$(window).scroll(function(){
			renderHead();
	});
	
});

$(document).on("scroll",function(){
	if($(document).scrollTop()>118){ 
		$(".logo__header").removeClass("large").addClass("small");
	}
	else{
		$(".logo__header").removeClass("small").addClass("large");
		}
	});

	$(document).on('click', ".carousel__controls-right",function(){ 
		var carusel = $(this).parents('.fbucet__carousel');
		right_carusel(carusel);
		return false;
	});
//Обработка клика на стрелку влево
	$(document).on('click',".carousel__controls-left",function(){ 
		var carusel = $(this).parents('.fbucet__carousel');
		left_carusel(carusel);
		return false;
	});
	function left_carusel(carusel){
	   var block_width = $(carusel).find('.product').outerWidth();
	   $(carusel).find(".buket__catalog .product").eq(-1).clone().prependTo($(carusel).find(".buket__catalog")); 
	   $(carusel).find(".buket__catalog").css({"left":"-"+block_width+"px"});
	   $(carusel).find(".buket__catalog .product").eq(-1).remove();    
	   $(carusel).find(".buket__catalog").animate({left: "0px"}, 200); 
	   
	}
	function right_carusel(carusel){
	   var block_width = $(carusel).find('.product').outerWidth();
	   $(carusel).find(".buket__catalog").animate({left: "-"+ block_width +"px"}, 200, function(){
		  $(carusel).find(".buket__catalog .product").eq(0).clone().appendTo($(carusel).find(".buket__catalog")); 
	      $(carusel).find(".buket__catalog .product").eq(0).remove(); 
	      $(carusel).find(".buket__catalog").css({"left":"0px"}); 
	   }); 
	}