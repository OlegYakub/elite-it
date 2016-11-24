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