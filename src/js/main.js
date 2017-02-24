$(document).ready(function(){

 	// Prevent # errors
	$('[href="#"]').click(function (e) {
		e.preventDefault();
	});

	// smoth scroll
	$('a[href^="#section"]').click(function(){
        var el = $(this).attr('href');
        $('body, html').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false;
	});

  // owl
  var owlTestimonials = $('#owlTestimonials');
  owlTestimonials.owlCarousel({
    loop: true,
    nav: false,
    margin: 0,
    responsive: {
      0:{
        items: 1,
      },
      768:{
        items: 2,
      }
    }
  });

  $('#owlTestimonialsPrev').click(function() {
    owlTestimonials.trigger('prev.owl.carousel');
  })
  $('#owlTestimonialsNext').click(function() {
    owlTestimonials.trigger('next.owl.carousel');
  })


});
