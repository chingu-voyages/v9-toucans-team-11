
const bodyTag = document.querySelector('body');
const header = document.querySelector('header');
const logoLetters = document.querySelectorAll('.letter');
const navElems = document.querySelector('nav');
const signIn = document.querySelector('.sign-in');


let scrolled = function () {
	let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
	return Math.floor(dec * 100);
}

addEventListener('scroll', () => {
	header.style.setProperty('background', scrolled() > 5 ? "rgba(255, 255, 255, 0.75)" : "#380089");
	header.style.setProperty('height', scrolled() > 5 ? "80px" : "140px");
	navElems.style.setProperty('color', scrolled() > 5 ? "#380089" : "#fff");
	signIn.style.setProperty('color', scrolled() > 5 ? "#380089" : "#fff");
	signIn.style.setProperty('background', scrolled() > 5 ? "rgba(225, 217, 237, 1)" : "rgba(225, 217, 237, 0.2)");
	for (i = 0; i < logoLetters.length; i ++) {
		logoLetters[i].style.setProperty('fill', scrolled() > 5 ? "#380089" : "#fff");
	};
});