import './styles.css';
import itemsTemplate from './templates/templates.hbs';
import menu from './menu.json';



const ulRef = document.querySelector('.js-menu');
const bodyRef = document.querySelector('body');
const inputChange = document.querySelector('.theme-switch__toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const markup = itemsTemplate(menu);
ulRef.insertAdjacentHTML('beforeend', markup);

const delClassElem = () => {
  bodyRef.classList.remove(Theme.LIGHT, Theme.DARK);
}
inputChange.addEventListener('change', () => {
  delClassElem();
  if (inputChange.checked) {
    localStorage.setItem('Theme','darkTheme');
    bodyRef.classList.add(Theme.DARK);
  } else {
    localStorage.setItem('Theme','lightTheme');
    bodyRef.classList.add(Theme.LIGHT);
  }
});
if(localStorage.getItem('theme') === 'darkTheme'){
  inputChange.setAttribute('checked', true);
  bodyRef.classList.add(Theme.DARK);
}

