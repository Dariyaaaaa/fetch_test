document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  const apiKey='c3bee3db166e4b62bed70937252302';

  const fetchData = async (cityName)=> {
const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no&lang=ru`);
    const responseJSON = await response.json();
    return responseJSON;
  }
.catch(error => {
  console.log('error', error);
})
}
  fetchData('Moscow');
  fetchData('Sochi');
  fetchData('Yaroslavl');
});
