/* eslint-disable no-unused-vars */
function imageSuccess(response) {
  // eslint-disable-next-line no-console
//   console.log(response.data.urls.regular);
  const imageUrl = response.data.urls.regular;
  const body = document.getElementsByTagName('body')[0];
  body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1547577670-8c3463a36d62?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU1NTEzfQ)';
}
function imageFail(error) {
  console.log(error);
}
// eslint-disable-next-line no-undef
axios({
  method: 'get',
  url: 'https://api.unsplash.com/photos/random?client_id=5f58fbcb5651922048dcc197a387899e6e88b0fdcf5b1c887137db86bb69f14a',
}).then(imageSuccess)
  .catch(imageFail);
