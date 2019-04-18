
$.get('https://raos130.github.io/api.json', function(data) {
  console.log(data);
 // var adjective1= data.adjective1;

  $('.word-adjective1').html(data.adjective1);
  $('.word-adjective2').html(data.adjective2);
  $('.word-pluralNoun3').html(data.pluralNoun3);
  $('.word-websiteName').html(data.websiteName);
  $('.word-pluralNoun1').html(data.pluralNoun1);
  $('.word-noun2').html(data.noun2);
  $('.word-noun1').html(data.noun1);
  $('.word-verbEndingInIng').html(data.verbEndingInIng);
  $('.word-artSupply').html(data.artSupply);
  $('.word-numbers').html(data.numbers);
  $('.word-celebrityName').html(data.celebrityName);
  $('.word-artistName').html(data.artistName);
  $('.word-pluralNoun2').html(data.pluralNoun2);
  $('.word-bodyPart').html(data.bodyPart);
  $('.word-computerSoftware').html(data.computerSoftware);
  $('.word-foods').html(data.foods.join(', '));
    $('.word-pluralNoun3').html(data.pluralNoun3);
    $('.word-placeInNewYork').html(data.placeInNewYork);


}).fail(function() {
  console.log('Error in GET request. Handle the error gracefully.');
});
