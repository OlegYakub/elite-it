  $('.bxslider').bxSlider({
    pagerCustom: '#bx-pager'
  });


// $(document).ready(function(){
	$('.arrow-our-serv').click(function () {
		$('.our-serv').slideToggle('slow');
	});
	$('.our-serv-close').click(function () {
		$('.our-serv').slideToggle('slow');
	});
	 $(document).mouseup(function (e) {
      var container = $(".our-serv");
      if (container.has(e.target).length === 0){
          container.fadeOut();
      }
    });
// };
/* ===========header============*/ 
  $(window).scroll(function(){
        var bo = $("body").scrollTop();
        if ( bo > 750 ) {$(".burger").css("display", "block"); } 

        else { 
        	$(".burger").css("display", "none"); 
        	$('.burger__item').removeClass('burger__item--active');
        	$(".mob-nav").slideUp(700);
      	};
  });

/* ===========burger============*/ 
  $('.burger__item').click(function(){
  	$('.burger__item').toggleClass('burger__item--active');
		$(".mob-nav").slideToggle(700);			
	});
	$('main').click(function(){
		  $('.burger__item').removeClass('burger__item--active');
			$(".mob-nav").slideUp(300);	
		});

	$('.mob-nav__link--first').click(function(){
			$('.mob-nav__body').hide();
			$(".serv-menu").show();			
	});

	$('.serv-menu__title a').click(function(){
			$(".serv-menu").hide();			
			$('.mob-nav__body').show();

	});

