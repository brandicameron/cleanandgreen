// FADE IN BACK TO TOP BUTTON WHEN USER SCROLLS DOWN
window.onscroll = function () {
	let backToTop = document.getElementById("backTop");
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		backToTop.style.visibility = 'visible';
	} else {
		backToTop.style.visibility = 'hidden';
	}
};



// ANIMATE WHEN ELEMENTS SCROLL INTO VIEW

// Based on this tutorial: https://cssanimation.rocks/scroll-animations/
let scroll = window.requestAnimationFrame ||
	function (callback) {
		window.setTimeout(callback, 1000 / 60)
	};

let animationTarget = document.querySelectorAll('.animate');

function loop() {
	animationTarget.forEach(function (element) {
		if (isElementInViewport(element)) {
			element.classList.add('animation');
		} else {
			element.classList.remove('animation');
		}
	});
	scroll(loop);
}
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
	var rect = el.getBoundingClientRect();
	return (
		(rect.top <= 0 &&
			rect.bottom >= 0) ||
		(rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
		(rect.top >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
	);
}



// UPDATES THE COPYRIGHT YEAR
const currentYear = new Date().getFullYear();
document.getElementById("copyYear").textContent = `© ${currentYear} Clean & Green, LLC \u00A0 |\u00A0 \u00A0 All Rights Reserved`;