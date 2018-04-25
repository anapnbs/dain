/* Wow Animated Effect */
new WOW().init();

/* Flex Panel Gallery */
const panels = document.querySelectorAll('.panel');

function panelOpen() {
  this.classList.add('open');
  setTimeout( () => this.classList.add('open-active'), 500 );
}

function panelClose() {
  this.classList.remove('open');
  this.classList.remove('open-active');
}

// function toggleActive(e) {
//   console.log(e.propertyName);
//   if (e.propertyName.includes('flex')) {
//     this.classList.toggle('open-active');
//   }
// }

panels.forEach(panel => panel.addEventListener('mouseenter', panelOpen));
panels.forEach(panel => panel.addEventListener('mouseleave', panelClose));
// panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

/* Click and Drag Slider */
const slider = document.querySelector('.clinic-items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
	isDown = true;
	slider.classList.add('active');
	startX = e.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
	isDown = false;
	slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
	isDown = false;
	slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
	if (!isDown) return;  // stop the fn from running
	e.preventDefault();
	const x = e.pageX - slider.offsetLeft;
	const walk = (x - startX) * 3;
	slider.scrollLeft = scrollLeft - walk;
});

