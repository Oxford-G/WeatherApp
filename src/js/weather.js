import axios from 'axios';

const getResult = async (query) => {
  const key = 'b78ffa7f320b87289c86ab51defc89ce';
  const city = document.querySelector('.location .city');
  const temp = document.querySelector('.current .temp');
  const weather = document.querySelector('.current .weather');
  try {
    const res = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${key}&units=metric`);
    const { data } = res;
    city.innerHTML = `${data.name}, ${data.sys.country}`;
    temp.innerHTML = `${Math.round(data.main.temp)}`;
    weather.innerHTML = `${data.weather[0].main}`;
    return data;
  } catch (error) {
    return error;
  }
};

export default getResult;
