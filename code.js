document.addEventListener("DOMContentLoaded", () => {
  const apiKey='c3bee3db166e4b62bed70937252302';
  
const searchText = document.getElementById ('searchText');
  const buttonSearch = document.getElementById ('buttonSearch');
  const tableData = document.getElementById ('tableData');
  
  const fetchData = async (cityName)=> {
    try {
const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no&lang=ru`);
    const responseJSON = await response.json();
    return responseJSON;
    } catch (error) {}
    console.log ('error', error);
  }
}
  buttonSearch.addEventListener ('click', async () => {
  const name = searchText.value;
  if (!name) {
    alert('Введите название города');
  } else {
    const data = await fetchData(name);
    console.log(data);
  }
  })
});
