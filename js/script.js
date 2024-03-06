// Burger
const burger = document?.querySelector("[data-burger]");
const nav = document?.querySelector("[data-nav]");
const navItems = nav?.querySelectorAll("a");
const body = document.body;
burger?.addEventListener("click", () => {
  body.classList.toggle("stop-scroll");
  burger?.classList.toggle("burger--active");
  nav.classList.toggle("nav--visible");
});
navItems.forEach((el) => {
  el.addEventListener("click", () => {
    body.classList.remove("stop-scroll");
    burger?.classList.remove("burger--active");
    nav.classList.remove("nav--visible");
  });
});

const ofs = 100;
const scrollUp = document.querySelector('.scroll-up');
const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = 'stroke-dashOffset 20ms';

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

// function #1: updateDashoffset
const updateDashoffset = () => {
	const height = document.documentElement.scrollHeight - window.innerHeight;
	const dashoffset = pathLength - (getTop() * pathLength / height);

	scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

// function #2: onScroll
window.addEventListener('scroll', () => {
	updateDashoffset();

	if (getTop() > ofs) {
		scrollUp.classList.add('scroll-up--active');
	} else {
		scrollUp.classList.remove('scroll-up--active');
	};
});

// function #3: click
scrollUp.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});

// let articlesMore = document.querySelector('.btn-more');
// let articles = document.querySelectorAll('.team__block');


// articlesMore.addEventListener('click', function(){

//     articles.forEach(function(el){

//     el.classList.add('team__block--visible')

//   });

//   articlesMore.closest('.btn-center').classList.add('team--center--hidden');
// })

document.querySelector('.header-arrow').addEventListener('click', function(e) {
  e.preventDefault();
  const targetElement = document.getElementById('partners');
  targetElement.scrollIntoView({ behavior: 'smooth' });
});

const swiper = new Swiper('.new__slider', {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  autoplay: {
    delay: 3000, // Задержка между сменой слайдов в миллисекундах
    disableOnInteraction: false, // Оставить автопрокрутку после взаимодействия пользователя
  },
  effect: 'slide', // Добавляем эффект плавного перехода между слайдами
  speed: 1000, // Устанавливаем скорость анимации перехода между слайдами
});

var swipers = new Swiper ('.swiper-container', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween:0,
  mousewheel:true,
    pagination:{
      el: '.swiper-pagination',
      type: 'progressbar',
  }
})
