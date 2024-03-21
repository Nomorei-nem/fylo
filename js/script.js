'use strict';

const darkModeBtn = document.querySelector('.dark-mode-btn');

darkModeBtn.addEventListener('click', () => {
	document.querySelector('html').classList.toggle('dark');
});
