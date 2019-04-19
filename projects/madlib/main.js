
$(function() {


      $(document).ready(function(){

          $('.word-adjective1').html('______');
          $('.word-adjective2').html('______');
          $('.word-pluralNoun3').html('______');
          $('.word-websiteName').html('______');
          $('.word-pluralNoun1').html('______');
          $('.word-noun2').html('______');
          $('.word-noun1').html('______');
          $('.word-verbEndingInIng').html('______');
          $('.word-artSupply').html('______');
          $('.word-numbers').html('______');
          $('.word-celebrityName').html('______');
          $('.word-artistName').html('______');
          $('.word-pluralNoun2').html('______');
          $('.word-bodyPart').html('______');
          $('.word-computerSoftware').html('______');
          $('.word-foods').html('______');
          $('.word-pluralNoun3').html('______');
          $('.word-placeInNewYork').html('______');





    $('.button').click(function(){
          var url = $(this).data('url');
          console.log(url)
          $(this).addClass('active');

      $.get(url, function(data) {
      console.log(data);

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



// $.get('https://raos130.github.io/api.json', function(data) {
//   console.log(data);


}).fail(function() {
  console.log('Error in GET request. Handle the error gracefully.');

            $('.word-adjective1').html('______');
            $('.word-adjective2').html('______');
            $('.word-pluralNoun3').html('______');
            $('.word-websiteName').html('______');
            $('.word-pluralNoun1').html('______');
            $('.word-noun2').html('______');
            $('.word-noun1').html('______');
            $('.word-verbEndingInIng').html('______');
            $('.word-artSupply').html('______');
            $('.word-numbers').html('______');
            $('.word-celebrityName').html('______');
            $('.word-artistName').html('______');
            $('.word-pluralNoun2').html('______');
            $('.word-bodyPart').html('______');
            $('.word-computerSoftware').html('______');
            $('.word-foods').html('______');
            $('.word-pluralNoun3').html('______');
            $('.word-placeInNewYork').html('______');
});
   });
//
// $('.randomizer').click(function(){
//   var randomEndpoint = endpoints [Math.floor(Math.random()
//     console.log(randomEndpoint);

   });
});
