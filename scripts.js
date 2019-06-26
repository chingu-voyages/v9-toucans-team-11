const bodyTag = document.querySelector('body');
const header = document.querySelector('header');
const logoLetters = document.querySelectorAll('.letter');
const navElems = document.querySelector('nav');
const navElemsLinks = document.querySelectorAll('.nav-main-menu-link');
const signIn = document.querySelector('.sign-in');
const subNavMenus = document.querySelectorAll('.nav-sub-menu');
const testimonials = document.querySelector('.testimonials')
let testimonialDatas = [
	{
		"text" : "Donut is critical part of our culture-first onboarding program at Culture Amp",
		"imgSrc" : '<img src="https://www.donut.com/wp-content/uploads/2017/09/stacey-nordwall.jpg" alt="Stacey Nordwall">',
		"name" : "Stacey Nordwall",
		"company" : "Culture Amp",
		"title" : "People Program Lead"

	},
	{
		"text" : "Donut helps us strengthen personal connections and InVision's company culture",
		"imgSrc" : '<img src="https://www.donut.com/wp-content/uploads/2017/08/clark-valberg.png" alt="Clark Valberg">',		
		"name" : "Clark Valberg",
		"company" : "InVision",
		"title" : "CEO and CO-Founder"

	},
	{
		"text" : "Embark improves every stage of the employee experience with Donut.",
		"imgSrc" : '<img src="https://www.donut.com/wp-content/uploads/2019/06/sarah-rentfro-embark.jpeg" alt="Sarah Rentfro">',
		"name" : "Sarah Rentfro",
		"company" : "Embark",
		"title" : "EVP of People Development"

	}
];


let scrolled = () => {
	let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
	return Math.floor(dec * 100);
}

addEventListener('scroll', () => {
	header.style.setProperty('background', scrolled() > 5 ? "rgba(255, 255, 255, 1)" : "#380089");
	header.style.setProperty('height', scrolled() > 5 ? "80px" : "140px");
	header.style.boxShadow = scrolled() > 5 ? "0 0 5px rgba(0, 0, 0, 0.5)" : "none";
	navElems.style.setProperty('color', scrolled() > 5 ? "#380089" : "#fff");
	signIn.style.setProperty('background', scrolled() > 5 ? "rgba(225, 217, 237, 1)" : "rgba(225, 217, 237, 0.2)");
	for (i = 0; i < logoLetters.length; i ++) {
		logoLetters[i].style.setProperty('fill', scrolled() > 5 ? "#380089" : "#fff");
	};
	for (i = 0; i < navElemsLinks.length; i ++) {
		navElemsLinks[i].style.setProperty('color', scrolled() > 5 ? "#380089" : "#fff");
	};
	for (i = 0; i < subNavMenus.length; i ++) {
		subNavMenus[i].style.boxShadow = scrolled() > 5 ? "0 0 5px rgba(0, 0, 0, 0.5)" : "none";
	};
});

testimonialDatas.forEach((testimonial) => {
	testimonials.innerHTML += `
			<div class="testimonial-card">
				<div class="testimonial-text">
					<p>"${testimonial.text}"</p>
				</div>
				<div class="testimonial-person">
					<div class="testimonial-person-picture">
						${testimonial.imgSrc}
					</div>
					<div class="testimonial-person-info">
						<span>${testimonial.name}</span><br><span><b>${testimonial.company}</b></span><span>, ${testimonial.title}</span>
					</div>
				</div>
			</div>

	`
})
