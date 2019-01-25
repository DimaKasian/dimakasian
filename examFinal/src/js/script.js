
window.onscroll = () => {
	let scrolled = window.pageYOffset || document.documentElement.scrollTop;
	const header = document.getElementById('header');
	if(scrolled < 50) {
		header.classList.remove('scroll');
	} else {
		header.classList.add('scroll');
	}
}



// function initMap() {
// // Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
// var centerLatLng = new google.maps.LatLng(49.065672, 33.414046);
// // Обязательные опции с которыми будет проинициализированна карта
// var mapOptions = {
// center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
// zoom: 8               // Зум по умолчанию. Возможные значения от 0 до 21
// };
// // Создаем карту внутри элемента #map
// var map = new google.maps.Map(document.getElementById("map"), mapOptions);
// }
// // Ждем полной загрузки страницы, после этого запускаем initMap()
// google.maps.event.addDomListener(window, "load", initMap);

// function initMap() {
// 	directionsService = new google.maps.DirectionsService();
// 	directionsDisplay = new google.maps.DirectionsRenderer();
// 	const krem = {lat: 49.062785, lng: 33.4156805};
// 	map = new google.maps.Map(document.getElementById('map'), {zoom: 7, center: krem});
// 	directionsDisplay.setMap(map);
// }