document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  const apiKey='c3bee3db166e4b62bed70937252302';

  const fetchData = (cityName)=> {
try {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no&lang=ru`);
                               console.log(response);
} catch (error) {
  console.log(error)
}
}
  fetchData('Moscow');
  fetchData('Sochi');
  fetchData('Yaroslavl');
});
