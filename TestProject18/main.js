//common settings
ScrollReveal({ 
	reset: true, //reloads animation on scroll
	distance: '80px',
	duration: 1000,
	delay: 400
});

//target elements settings
ScrollReveal().reveal('.main-title, .section-title', { delay: 500, origin: 'top' });
ScrollReveal().reveal('.sec-01 .image, .info', { delay: 1000, origin: 'left' });
ScrollReveal().reveal('.text-box', { delay: 1500, origin: 'right' });
ScrollReveal().reveal('.media-icons i', { delay: 2000, origin: 'bottom', interval: 500});
ScrollReveal().reveal('.info', { delay: 1500, origin: 'right' });
ScrollReveal().reveal('.sec-02 .image', { delay: 1000, origin: 'top' });
ScrollReveal().reveal('.sec-03 .image', { delay: 3500, origin: 'left' });
ScrollReveal().reveal('.media-info li', { delay: 1000, origin: 'left', interval: 500});

