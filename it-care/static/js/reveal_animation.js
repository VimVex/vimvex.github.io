window.addEventListener('scroll', reveal);

function reveal(){
 	var reveals = document.querySelectorAll('.reveal');

 	for(var i = 0; i < reveals.length; i++){

 		var windowheight = window.innerHeight;
 		var revealtop = reveals[i].getBoundingClientRect().top;
 		var revealpoint = 150;

 		if(revealtop < windowheight - revealpoint){
 			reveals[i].classList.add('active');
 		}
 		else{
			reveals[i].classList.remove('active');
 		}
 	}
 }


// const animation_elements = document.querySelectorAll('.reveal');

// const observer = new IntersectionObserver((entries) => {
// 	entries.forEach((entry) => {
// 		if (entry.isIntersecting) {
// 			entry.target.classList.add('.scrollanimate');
// 		} else {
// 			entry.target.classList.remove('.scrollanimate');
// 		}
// 	})
// }, {
// 	threshold: 0.5
// });

// for (let i = 0; i < animation_elements.length; i++) {
// 	const el = animation_elements[i];

// 	observer.observe(el);
// }
