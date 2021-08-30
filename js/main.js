$(document).ready(function(){
	$('.menu__burger').click(function(event){
		$('.menu__burger,.menu__mobile').toggleClass('active');
		$('body').toggleClass('lock');
	});
	});

  $('.press__slider').slick({

    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
		speed: 1000,
    responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]  
});

