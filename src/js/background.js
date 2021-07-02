import clearSky from '../images/clear.jpeg';
import cloud from '../images/cloud.jpg';
import rain from '../images/rain.jpg';
import thunder from '../images/thunder.jpg';
import snow from '../images/snow.jpg';

const displayWeather = (data) => {
  switch (data.weather[0].main) {
    case 'Clear':
      document.body.style.backgroundImage = `url(${clearSky})`;
      break;
    case 'Clouds':
      document.body.style.backgroundImage = `url(${cloud})`;
      break;
    case 'Rain':
    case 'Drizzle':
    case 'Mist':
      document.body.style.backgroundImage = `url(${rain})`;
      break;
    case 'Thunderstorm':
      document.body.style.backgroundImage = `url(${thunder})`;
      break;
    case 'Snow':
      document.body.style.backgroundImage = `url(${snow})`;
      break;
    default:
      break;
  }
};

export default displayWeather;
