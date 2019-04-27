
$(document).scroll(function() {

  var y = $(this).scrollTop();
  if (y > 650) {
    $('.info_box').fadeIn(600);
  } else if (y <= 650){
  	$('.info_box').fadeOut(1000);
  }
});

