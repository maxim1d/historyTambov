// fixed header

var scrollTopMax = 0;
var scrollTopMin = 0;


window.addEventListener('scroll', function() {

	var header  = document.querySelector('.header');
	var firstBlock = document.querySelector('.section--welcome');
	const firstBlockHeight = firstBlock.clientHeight;
	let headerHeight = header.clientHeight;

	if (this.scrollY > headerHeight + firstBlockHeight) {
		header.classList.add('header--fixed');
		firstBlock.style.marginTop = headerHeight + 'px';
	} else  if (this.scrollY == 0) { 
		header.classList.remove('header--fixed');
		firstBlock.style.marginTop = '0' + 'px';
	}

	scrollTopMax = this.window.scrollY;

	if (scrollTopMax > scrollTopMin) {
		scrollTopMin = scrollTopMax;
		header.style.top = '-' + headerHeight + 'px';

		

	} else if (scrollTopMax + 300 < scrollTopMin){
		scrollTopMin = scrollTopMax;
		header.style.top = '0px';
	}

	
});






























// header burger

var buttonBurger = document.querySelector('#burger');
var spanBurger = Array.from(buttonBurger.children);
var burgerMenu = document.querySelector('.header__burger__menu');


buttonBurger.onclick = function() {
	spanBurger.forEach( function(spans) {
		if (spans.classList.contains('active__burger')) {
			spans.classList.remove('active__burger');
			burgerMenu.style.display = 'none';

		} else {
			spans.classList.add('active__burger');
			burgerMenu.style.display = 'flex';
		}
	});
}
























// button Top

var btnTop = document.querySelector('.btnTop');

window.addEventListener('scroll', function() {

	if (window.scrollY > 600) {
		btnTop.style.bottom = '10px';
	} else btnTop.style.bottom = '-70px';
});

btnTop.onclick = function () {
	window.scrollTo(scrollY, 0);
};


















// Slider

const btnPrev  = document.querySelector('#btnPrev');
const btnNext  = document.querySelector('#btnNext');
const sliders  = Array.from(document.querySelectorAll('.slider__item'));
let slideIndex = 0;

function sliderList(slide, index) {
	if (index !== slideIndex) {
	slide.classList.add('hidden');
	if (index === slide.lenght) index = 0;
	//if (index === -1) index = slider.lenght;
	} else slide.classList.remove('hidden');
}



sliders.forEach(sliderList);

btnNext.onclick = function() {
	slideIndex = slideIndex + 1;

	if (slideIndex === sliders.length) slideIndex = 0;

	sliders.forEach(sliderList);
};

btnPrev.onclick = function() {
	slideIndex = slideIndex - 1;

	if (slideIndex  === -1) slideIndex = sliders.length - 1;

	sliders.forEach(sliderList);
};


















// Slider Park Pobed

const parkPob__btnPrev  = document.querySelector('#parkPob__btnPrev');
const parkPob__btnNext  = document.querySelector('#parkPob__btnNext');
let offset = 0;  //смещение от левого края
const parkPob__slider = document.querySelector('.parkPob__slider');

parkPob__btnNext.addEventListener('click', function(){
	
	if (window. innerWidth <= 410) {
		offset += 200;

		if (offset > 7*200) {
			offset = 0;
		}
	} else if (window. innerWidth <= 615) {
		offset += 370;

		if (offset > 7*370) {
			offset = 0;
		}
	} else if (window. innerWidth > 615) {
		offset += 500;

		if (offset > 6*500) {
			offset = 0;
		}
	}


	parkPob__slider.style.left = '-' + offset + 'px';
});

parkPob__btnPrev.addEventListener('click', function(){


	if (window. innerWidth <= 410 ) {
		offset -= 200;

		if (offset < 0) {
			offset = 7*200;
		}
	} else if (window. innerWidth <= 615) {
		offset -= 370;

		if (offset < 0) {
			offset = 7*370;
		}
	} else if (window. innerWidth > 615) {
		offset -= 500;

		if (offset < 0) {
			offset = 6*500;
		}
	}

	parkPob__slider.style.left = '-' + offset + 'px';
});



















// slider lichnosti


const lichn__btnPrev  = document.querySelector('#lichn__btnPrev');
const lichn__btnNext  = document.querySelector('#lichn__btnNext');
let lichn__offset= 0;  //смещение от левого края
const lichn__slider = document.querySelector('.lichn__slider');

lichn__btnNext.addEventListener('click', function(){
	if (window. innerWidth > 1000) {
		lichn__offset += 1000;
	} else if (window. innerWidth > 260) {
		lichn__offset += 260;
	}
	
	if (window. innerWidth > 1000) {
		if (lichn__offset >= 8*1000) {
			lichn__offset = 0;
		}
	} else if (window. innerWidth > 260) {
		if (lichn__offset >= 8*260) {
			lichn__offset = 0;
		}
	}

	
	lichn__slider.style.left = '-' + lichn__offset + 'px';
});

lichn__btnPrev.addEventListener('click', function(){
	if (window. innerWidth > 1000) {
		lichn__offset -= 1000;
	} else if (window. innerWidth > 260) {
		lichn__offset -= 260;
	}

	if (window. innerWidth > 1000) {
		if (lichn__offset < 0) {
			lichn__offset = 8*1000;
		}
	} else if (window. innerWidth > 260) {
		if (lichn__offset < 0) {
			lichn__offset = 7*260;
		}
	}
	
	lichn__slider.style.left = '-' + lichn__offset + 'px';
});


























// Modal Img

var modal = document.querySelector('#modal');
var modalDiv = document.querySelector('#divModal');

modal.addEventListener('click', function (event) {
	var btnImg = event.target.cloneNode(true);
	if (btnImg.tagName == 'IMG') {
		modalOpen(btnImg)
	} 
});


var modalPark = document.querySelector('#modalPark');

modalPark.addEventListener('click', function (event) {
	var btnImg = event.target.cloneNode(true);
	if (btnImg.tagName == 'IMG') {
		modalOpen(btnImg)
	} 
});


var modalChange = document.querySelector('#modalChange');

modalChange.addEventListener('click', function (event) {
	var btnImg = event.target.cloneNode(true);
	if (btnImg.tagName == 'IMG') {
		modalOpen(btnImg)
	} 
});





function modalOpen(btnImg){
	var span_1 = document.createElement('span');
	var span_2 = document.createElement('span');
	var btnClose = document.createElement('div');

	span_1.classList.add('btn__close-1');
	span_2.classList.add('btn__close-2');
	btnClose.classList.add('btnClose');

	btnClose.appendChild(span_1);
	btnClose.appendChild(span_2);

	modalDiv.appendChild(btnImg);
	modalDiv.appendChild(btnClose);
	

	btnImg.removeAttribute('class');
	btnImg.classList.add('img__modal');

	modalDiv.classList.add('active');
	let imgHeight = btnImg.height;
	if (imgHeight > 700) {
		btnClose.style.top = '-350px';
	} else if (imgHeight <= 700) {
		btnClose.style.top = '-' + imgHeight/2 + 'px';
	}

	modalDiv.onclick = function(event) {
		if (event.target !== btnImg) {
			btnClose.style.top = null;
			modalDiv.removeChild(btnImg);
			modalDiv.removeChild(btnClose);
			modalDiv.classList.remove('active');
		}
	}
};
























// Modal Input

var btnSearch = document.querySelector('#btnSearch');
var btnCloseSearch = document.querySelector('.input__btnClose');

btnSearch.addEventListener('click', function() {
	let searchModal = document.querySelector('.search__modal');

	btnSearch.style.opacity = '0';
	if (window. innerWidth > 1099) {
		searchModal.style.left = '380px';
	} else if (window. innerWidth > 900) {
		searchModal.style.left = '310px';
	} else if (window. innerWidth > 615) {
		searchModal.style.left = '120px';
	} else if (window. innerWidth <= 615) {
		searchModal.style.left = '0px'
		searchModal.style.top = '-15px'
	}
	

	btnCloseSearch.addEventListener('click', function() {
		btnSearch.style.opacity = '1';
		searchModal.style.left = '1000px';
		if (window. innerWidth <= 615) {
			searchModal.style.top = '-45px'
		}
	});
});
