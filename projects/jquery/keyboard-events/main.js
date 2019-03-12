$(function() {
  $(document).on('keypress', function(e) {
    var key = e.key;
    var img;
    var text;

    console.log('keypress:', key);

 if ( key == 'h' ) {
   img="http://www.reactiongifs.com/wp-content/uploads/2013/07/ralph-wave.gif";
 } else if ( key == 'e' ) {
   img="https://media.giphy.com/media/aCpvwi2tuFQUE/giphy.gif";
 } else if ( key == 'l' ) {
   img="https://media.giphy.com/media/3o7budMRwZvNGJ3pyE/giphy.gif";
 } else if ( key == 'o' ) {
   img="https://media.giphy.com/media/3oKIPsx2VAYAgEHC12/giphy.gif";
 }

 if ( img ) {
   $('body').append('<img src="' + img + '" style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); max-width: 600px;">');
 } else {
   $('body').append('<h2 style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); font-size: ' + Math.random() * 200 + 'px;">' + key + '</h2>');
 }
});
});
