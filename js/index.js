$(document).ready(function(){

	var controller;

	controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook:'onLeave'
		}
	});


	var slides = document.querySelectorAll('section');
	console.log(slides);
	for(var i = 0; i<slides.length; i++){
		new ScrollMagic.Scene({
			triggerElement: slides[i]
		})
		.setPin(slides[i])
		.addTo(controller);
	};

	$('a').click(function(){
		$('a').each(function(){
			$(this).removeClass("current");
		});
		$(this).addClass("current");
	})

	$(window).scroll(function(){
		$('video').each(function(){
		    if ($(this).is(":in-viewport")) {
		        $(this)[0].play();
		        $(this)[0].loop = true;
		        console.log($(this));
		    } else {
		        $(this)[0].pause();
		        $(this)[0].loop = false;
		    }
		});
	});
	
	$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
	    var id = $(this).attr('href');

	    // target element
	    var $id = $(id);
	    if ($id.length === 0) {
	        return;
	    }

	    // prevent standard hash navigation (avoid blinking in IE)
	    e.preventDefault();

	    // top position relative to the document
	    var pos = $id.offset().top;

	    // animated top scrolling
	    $('body, html').animate({scrollTop: pos});
	});


	if($(window).width() <= 650){
		if(controller){
			controller = controller.destroy(true);
		}
		$('.aside').each(function(){
			$(this).css("height","auto");
			$(this).css("margin-top", "-100%");
		});
		$('header').css("height","auto");
		$('img').css("height","auto");
	}


	// $(window).resize(function(){
	// 	if($(window).width() <= 650){
	// 		if(controller){
	// 			controller.destroy(true);
	// 		}
	// 		$('.aside').each(function(){
	// 			$(this).css("height","auto");
	// 			$(this).css("margin-top", "-100%");
	// 		});
	// 				$('header').css("height","auto");
	// 	$('img').css("height","auto");
	// 	}
	// 	else{
	// 		controller = new ScrollMagic.Controller({
	// 			globalSceneOptions: {
	// 				triggerHook:'onLeave'
	// 			}
	// 		});

	// 		var slides = document.querySelectorAll('section');
	// 		console.log(slides);
	// 		for(var i = 0; i<slides.length; i++){
	// 			new ScrollMagic.Scene({
	// 				triggerElement: slides[i]
	// 			})
	// 			.setPin(slides[i])
	// 			.addTo(controller);
	// 		};
	// 		$('.aside').each(function(){
	// 			$(this).css("height","100vh");
	// 			$(this).css("margin-top", "0");
	// 		});
	// 		$('header').css("height","100vh");
	// 		$('img').css("height","100vh");
	// 	}
	// });

});