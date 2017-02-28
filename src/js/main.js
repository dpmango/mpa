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
    responsiveRefreshRate: 10,
    responsive: {
      0:{
        items: 1,
      },
      1024:{
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

  function initialize(){
    owlTestimonials.trigger('destroy.owl.carousel');
    owlTestimonials.owlCarousel({
      loop: true,
      nav: false,
      margin: 0,
      responsiveRefreshRate: 10,
      responsive: {
        0:{
          items: 1,
        },
        1024:{
          items: 2,
        }
      }
    });
  }

  var id;
  $(window).resize( function() {
    clearTimeout(id);
    id = setTimeout(initialize, 100);
  });
  initialize();

  // Mobile hamburger
  $('#openHamburger').on('click', function(){
    $(this).addClass('is-active');
    $('.mobile-navi').addClass('is-active');
    $('body').addClass('locked');
    $('#closeHamburger').addClass('is-active');
  });

  $('#closeHamburger').on('click', function(){
    $(this).removeClass('is-active');
    $('.mobile-navi').removeClass('is-active');
    $('body').removeClass('locked');
    $('#openHamburger').removeClass('is-active');
  });


	$(document).mouseup(function (e) {
    var container = new Array();
    container.push($('.mobile-navi'));

    $.each(container, function(key, value) {
        if (!$(value).is(e.target) && $(value).has(e.target).length === 0) {
            $(value).removeClass('is-active');
            $('.hamburger').removeClass('is-active');
            $('body').removeClass('locked');
        }
    });
  });



});
