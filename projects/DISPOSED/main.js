// set up text to print, each item in array is new line
var aText = new Array(
"Biryani28 744633 77Begumpet 1234512345K Tea1234 sach@@1934 Mirchidog44794 Glxy98 Water 17b89 3a2wqqajcrj KAPPAGAMMA pumpkin16 misterdoctorprofessorQ ddwrt5 sparkles98 MEERA5737 SupermanisC00l fruitbask3t Mockingbird Locus82 {emoji99#} 9829093381 bot4603pen4843bitebasketball28 36cooper parrot2000 nastyboy1 anikariya302 pumpkin16 WhosYourDaddy? RumpfistTrumpf purple2909$ Starlight tom3917bit2674ella S1eepy1emur@124 Musicrocks1999 Alekha2909 nothing1234 Alekha2909 Maroon51998 SIMPIE330 14863 Ax11KK22 2BorNOT2B yellowbananas108 ",

);
var iSpeed = 40; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");

 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();
