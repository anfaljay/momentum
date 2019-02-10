/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
axios({
  method: 'get',
  url: 'http://api.openweathermap.org/data/2.5/weather?q=riyadh&units=metric&lang=ar&appid=7a155a7e057a633114ff3ea31e8b3920',
})
  .then((response) => {
    const temp = response.data.main.temp;
    $('body').append(`<h2>${temp}</h2>`);
  })
  .catch((error) => {
    console.log(error);
  });
