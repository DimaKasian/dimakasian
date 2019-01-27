
window.onscroll = () => {
	let scrolled = window.pageYOffset || document.documentElement.scrollTop;
	const header = document.getElementById('header');
	if(scrolled < 50) {
		header.classList.remove('scroll');
	} else {
		header.classList.add('scroll');
	}
}



var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 49.062785, lng: 33.4156805},
		zoom: 12,
		disableDefaultUI: true,
	});

}



$(document).ready(function(){
	$('.slider').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}

		]
	});
});
