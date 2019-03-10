var images= ["trip.gif"]

$(function() {
  $('.change').click(function(e) {
 var image = images[Math.floor(Math.random()*images.length)];
     $('#trip').parent().fadeOut(200, function() {
         $('#trip').attr('src', ''+image);
           $(this).fadeIn(200);

           $('.change').on('click', function(event) {
             event.preventDefault();

             var $clickTarget = $(event.target);

             $clickTarget.css({ transform: 'scale(' + randomNumber(0.5, 1.5) + ')' });

             function randomNumber(min, max) {
               return Math.random() * (max - min) + min;
             }
        });
    });
 });
});
