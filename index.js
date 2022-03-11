import i18Obj from './translate.js';
console.log("[x]Смена изображений в секции portfolio +25\n[x]Перевод страницы на два языка +20\n[x]Переключение светлой и тёмной темы +25\n[x]Дополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +5\n[x]Дополнительный функционал: выбранный пользователем язык сохраняется при перезагрузке страницы +2.5\n\nИтого: 85 - 2.5 = 82.5");


/* Смена темы переменные с данными */
const sun = document.querySelector('.theme')
const moon = document.querySelector('.white')
const whiteBg1440 = 'url(./assets/img/white_bg1440.jpg)'
const whiteBg768 = 'url(./assets/img/hero_white768.jpg)'
const whiteContact1440 = 'url(./assets/img/contacts_white1440.jpg)'
const whiteContact768 = 'url(./assets/img/contacts_white768.jpg)'
const wrapperLenear = 'linear-gradient(to top, #fff 39px, #000 39px, #000 41px, #fff 41px)'
const logoType = 'url(./assets/svg/logo_dark.svg)';
const svgFilterWhite = 'brightness(0) invert(1)';
const moonTheme ='url(./assets/svg/luna.svg)';
const instaBlack = 'url(./assets/svg/inst_dark.svg)'
const fbBlack = 'url(./assets/svg/fb_dark.svg)'
const twitterBlack = 'url(./assets/svg/tw_dark.svg)'
const piterestBlack = 'url(./assets/svg/pinterest_dark.svg)'

/* Функция переключения темы */

function themeToggle() {
  if(sun.classList.contains('white')) {
    sun.classList.remove('white');
    document.documentElement.style.setProperty('--costil', '');
    document.documentElement.style.setProperty('--secondCostil', '');
    document.documentElement.style.setProperty('--body-color', '');
    document.documentElement.style.setProperty('--text-color', '');
    document.documentElement.style.setProperty('--backImage', '');
    document.documentElement.style.setProperty('--linear', '');
    document.documentElement.style.setProperty('--sectionColor', '');
    document.documentElement.style.setProperty('--backImage768', '')
    document.documentElement.style.setProperty('--contactImage', '')
    document.documentElement.style.setProperty('--contactImage768', '')
    document.documentElement.style.setProperty('--logo', '');
    document.documentElement.style.setProperty('--checkedCol', '');
    document.documentElement.style.setProperty('--hoverCol', '');
    document.documentElement.style.setProperty('--svgFilter', '');
    document.documentElement.style.setProperty('--themeLogo', '');
    document.documentElement.style.setProperty('--heroButton', '');
    document.documentElement.style.setProperty('--portfolioBtnBg', '');
    document.documentElement.style.setProperty('--portfolioBtnTxt', '');
    document.documentElement.style.setProperty('--btnBefore', '');
    document.documentElement.style.setProperty('--portfolioBtnHover', '');
    document.documentElement.style.setProperty('--payTxt', '');
    document.documentElement.style.setProperty('--inTxt', '');
    document.documentElement.style.setProperty('--inBg', '');
    document.documentElement.style.setProperty('--insta', '');
    document.documentElement.style.setProperty('--fb', '');
    document.documentElement.style.setProperty('--tw', '');
    document.documentElement.style.setProperty('--pin', '');
  } else {
    sun.classList.add('white');
    document.documentElement.style.setProperty('--body-color', '#fff');
    document.documentElement.style.setProperty('--text-color', '#000');
    document.documentElement.style.setProperty('--backImage', whiteBg1440);
    document.documentElement.style.setProperty('--payButtonBack', '#000');
    document.documentElement.style.setProperty('--linear', wrapperLenear);
    document.documentElement.style.setProperty('--sectionColor', '#000');
    document.documentElement.style.setProperty('--backImage768', whiteBg768)
    document.documentElement.style.setProperty('--contactImage', whiteContact1440)
    document.documentElement.style.setProperty('--costil', '#000');
    document.documentElement.style.setProperty('--secondCostil', '#bdae82');
    document.documentElement.style.setProperty('--contactImage768', whiteContact768)
    document.documentElement.style.setProperty('--logo', logoType);
    document.documentElement.style.setProperty('--checkedCol', '#fff');
    document.documentElement.style.setProperty('--hoverCol', '#fff');
    document.documentElement.style.setProperty('--svgFilter', svgFilterWhite);
    document.documentElement.style.setProperty('--themeLogo', moonTheme);
    document.documentElement.style.setProperty('--heroButton', '#fff');
    document.documentElement.style.setProperty('--portfolioBtnBg', '#bdae82');
    document.documentElement.style.setProperty('--portfolioBtnTxt', '#000');
    document.documentElement.style.setProperty('--btnBefore', '#000');
    document.documentElement.style.setProperty('--portfolioBtnHover', '#bdae82');
    document.documentElement.style.setProperty('--payTxt', '#bdae82');
    document.documentElement.style.setProperty('--inTxt', '#000');
    document.documentElement.style.setProperty('--inBg', '#fff6');
    document.documentElement.style.setProperty('--insta', instaBlack);
    document.documentElement.style.setProperty('--fb', fbBlack);
    document.documentElement.style.setProperty('--tw', twitterBlack);
    document.documentElement.style.setProperty('--pin', piterestBlack);
  }
}
sun.addEventListener('click', themeToggle);


/* Переменные для сменя языка */
const lengArr = document.querySelectorAll("[data-i18]");
const checkBoxEn = document.getElementById('en')
const checkBoxRu = document.getElementById('ru')

/* Функция смены языка */
function translate(checkedLang) {
  lang = checkedLang;
  lengArr.forEach((e) => {
    e.textContent = i18Obj[checkedLang][e.dataset.i18];
  })
}

/* Проверка радио на checked */
checkBoxEn.addEventListener('change', el => {
  if (el.target.checked) {
    translate('en')
  }
})

/* Проверка радио на checked */
checkBoxRu.addEventListener('change', el => {
  if (el.target.checked) {
    translate('ru')
  }
})

/* LocalStorage */
let lang = 'en';

/* Инициализация хранилища */
function setLocalStorage() {
  localStorage.setItem('lang', lang);
}

/* Слушаем предзагрузку */
window.addEventListener('beforeunload', setLocalStorage);

/* Получаем данные из локального хранилища */

function getLocalStorage() {
  if(localStorage.getItem('lang')) {
    const lang = localStorage.getItem('lang');
    translate(lang);
  }
}
window.addEventListener('load', getLocalStorage);



/* Scroll top  */

/* const scrollToTop = (x, y) => {
 window.scrollTo(x, y);
};
scrollToTop(0, 0); */


/* Переменные для бургера */

const burger = document.querySelector('.hamburger')
const menu = document.querySelector('.nav')
const navList = document.querySelectorAll('.nav-item')

/* Слушаем клик по бургеру */

burger.addEventListener('click', toggleMenu);

/* Развёртывание бургера  */

function toggleMenu() {
  burger.classList.toggle('is-active');
  menu.classList.toggle('active');
}
/* Пробежка по ссылкам в открытом бургере, закрытие по клику */

navList.forEach((el) => el.addEventListener('click', closeMenu));

/* Функция закрытия меню */

function closeMenu(event) {
  if(event.target.classList.contains('nav-link')) {
    burger.classList.remove('is-active');
    menu.classList.remove('active');
  }
}

/* Собираем массив картинок */
const portfolioItems = document.querySelectorAll('.portfolio-item')

/* Собираем массив кнопок */

const buttons = document.querySelectorAll('.portfolio-btn');

/* Функция смены изображений по клику на кнопке */

function changeImage(event) {
  if(event.target.classList.contains('portfolio-btn')) {
    const season = event.target.dataset.season
    portfolioItems.forEach((img, index) => img.src = `./assets/img/${season}/${index + 1}.jpg`);
  }
}

/* Используем функцию смены картинок */
buttons.forEach(button => {
  button.addEventListener('click', changeImage)
});

/* Функция кеширования изображений */
function preloadImages() {
  const seasons = ['winter', 'spring', 'summer', 'autumn']
  for(let s in seasons){
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${seasons[s]}/${i}.jpg`;
    }
  }
}
preloadImages();


/* Мем которого мы достойны */

console.log(`- Мужики не шмаляйте я кабан!
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⣴⣶⣦⣤⣴⣶⣶⣿⣿⣿⣿⣷⣶⣦⣤⣄⣀⡀⠀⠀⠀⣀⡀
    ⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⡋⠀⠀
    ⠀⠀⣠⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀
    ⠙⠟⠛⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀
    ⠀⠀⠀⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⡀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢡⣶⡿⢿⡿⠿⠿⠂⠀⠉⠉⠉⠀⣀⣿⡿⠟⠛⠿⠻⠇
    ⠀⠀⠀⠀⠀⠀⠀⢀⣰⠟⠀⠀⠈⠛⠳⠀⠀⠀⠀⠀⢠⡾⠋`);
