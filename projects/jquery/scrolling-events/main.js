var tStart = 100
  , tEnd = 1900
  , cStart = [40, 188, 155]
  , cEnd = [239, 0, 165]
  , cDiff = [cEnd[0] - cStart[0], cEnd[1] - cStart[1], cEnd[1] - cStart[0]];


$(document).ready(function(){
    $(document).scroll(function() {
        var p = ($(this).scrollTop() - tStart) / (tEnd - tStart); // % of transition
        p = Math.min(1, Math.max(0, p)); // Clamp to [0, 1]
        var cBg = [Math.round(cStart[0] + cDiff[0] * p), Math.round(cStart[1] + cDiff[1] * p), Math.round(cStart[2] + cDiff[2] * p)];
        $("body").css('background-color', 'rgb(' + cBg.join(',') +')');

        $(function() {
          $(window).scroll(function() {

        var mass = Math.max(90, 300-0.1*$(this).scrollTop()) + 'px';

        $('#scroll').css({'font-size': mass, 'line-height': mass});
        });
          });

});
    });
