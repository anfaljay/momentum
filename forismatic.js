/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */
axios({
  method: 'get',
  url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en',
})
  .then((response) => {
    // console.log(response.data.quoteText.quoteAuthor);
    const quoteT = response.data.quoteText;
    const quoteA = response.data.quoteAuthor;
    $('body').append(`<h2>${quoteT}</h2>`);
    $('body').append(`<h2>${"-"+quoteA}</h2>`);
  })
  .catch((error) => {
    console.log(error);
  });
