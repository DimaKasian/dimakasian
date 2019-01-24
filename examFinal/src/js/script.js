
window.onscroll = () => {
	let scrolled = window.pageYOffset || document.documentElement.scrollTop;
	const header = document.getElementById('header');
	if(scrolled < 50) {
		header.classList.remove('scroll');
	} else {
		header.classList.add('scroll');
	}
}

