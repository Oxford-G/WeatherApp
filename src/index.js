import './css/style.css';
import getResult from './js/weather';
import displayWeather from './js/background';
import changeTemp from './js/temp';

const search = document.querySelector('.search-box');

const setAction = (e) => {
  if (e.keyCode === 13) {
    getResult(search.value)
      .then((data) => displayWeather(data))
      .then(search.value = '');
  }
};
search.addEventListener('keypress', setAction);
changeTemp();
