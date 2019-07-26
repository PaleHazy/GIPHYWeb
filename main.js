$('.search').on('click', function() {
  var inputText = $('.textInput');
  if (buttonsArray.length === 0) {
    $('.buttonList').empty();
  }
  var buttonList = $('.buttonList');
  var newBtn = $('<button>');

  newBtn.text(inputText.val());
  buttonsArray.push(inputText.val());
  newBtn.addClass(inputText.val());
  newBtn.addClass('searchButtons');
  newBtn.attr('data-button', inputText.val());
  buttonList.append(newBtn);
});
// $('.grid').masonry({
//   // options
//   itemSelector: '.grid-item',
//   columnWidth: 200
// });

var buttonsArray = [];
$('.buttonList').on('click', '.searchButtons', function() {
  console.log('this = ' + this);
  var buttonName = $(this).attr('data-button');
  var api =
    'https://api.giphy.com/v1/gifs/search?q=' +
    buttonName +
    '&api_key=w0BA8haakEO76VQdPreZ1EvuBQ189XE9&limit=10';
  $.ajax({
    url: api,
    method: 'GET'
  }).then(function(response) {
    var results = response.data;
    for (var i = 0; i < results.length; i++) {
      var gifDiv = $('<div>');
      var title = results[i].title;
      var p = $('<p>').text(title);
      var personImage = $('<img>');
      personImage.attr('src', results[i].images.fixed_height.url);
      gifDiv.prepend(p);
      gifDiv.prepend(personImage);
      $('.picturesAppend').prepend(gifDiv);
    }
  });
});

function getAjax() {}
