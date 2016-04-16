//Scrolling with anchors

$(document).ready(function(){
  $('.navbtn').on('click', function(event) {
	  event.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
  });
});


