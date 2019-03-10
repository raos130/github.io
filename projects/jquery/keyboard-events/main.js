$(function() {
  $(document).on('keypress', function(e) {
    var key = e.key;
    var img;
    var text;

    console.log('keypress:', key);

 if ( key == 'h' ) {
   img="file:///Users/simranrao/raos130.github.io/projects/jquery/keyboard-events/wave.gif";
 } else if ( key == 'e' ) {
   img="file:///Users/simranrao/raos130.github.io/projects/jquery/keyboard-events/hi.gif";
 } else if ( key == 'l' ) {
   img="file:///Users/simranrao/raos130.github.io/projects/jquery/keyboard-events/hey.gif";
 } else if ( key == 'o' ) {
   img="file:///Users/simranrao/raos130.github.io/projects/jquery/keyboard-events/dog.gif";
 }

 if ( img ) {
   $('body').append('<img src="' + img + '" style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); max-width: 600px;">');
 } else {
   $('body').append('<h2 style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); font-size: ' + Math.random() * 200 + 'px;">' + key + '</h2>');
 }
});
});
