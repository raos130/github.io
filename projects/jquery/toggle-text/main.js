$(function() {

  $( "#target" ).click(function() {
    console.log("i clicked it");

      $(".text").toggleClass('active');

    // if ($(".text").is(":visible") ) {
    //   $(".text").hide()
    // }else{
    //   $(".text").show();
    // }

  });
});
