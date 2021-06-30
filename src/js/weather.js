import axios from 'axios';

const getResult = async (query) => {
  const key = 'd1b4490baf954b9a45f0e011f71bb87b';
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
