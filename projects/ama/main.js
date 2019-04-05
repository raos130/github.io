
      var image = new Array ();
      image[0] = "images/one.png";
      image[1] = "images/two.png";
      image[2] = "images/three.png";
      image[3] = "images/four.png";
      image[4] = "images/five.png";
      image[5] = "images/six.png";
      image[6] = "images/seven.png";
      image[7] = "images/eight.png";
      image[8] = "images/nine.png";
      image[9] = "images/ten.png";
      image[10] = "images/eleven.png";
      image[11] = "images/twelve.png";
      image[12] = "images/thirteen.png";
      image[13] = "images/fourteen.png";
      image[14] = "images/fifteen.png";
      image[15] = "images/sixteen.png";
      image[16] = "images/seventeen.png";


      var size = image.length;
      var x = Math.floor(size*Math.random());
      document.getElementById('pics').src=image[x];

  var peoples = [
   "Semine",
   "Aditya",
   "Karan",
   "Kyra",
   "Meera",
   "Ranthi",
   "Shreya",
   "Rhea",
   "Suditi",
   "Suditi",
   "Sanjana",
   "Ani",
   "Quincy",
   "Ginny",
   "Yogita",
   "Nishit",
   "Deveena",
   "Mina",
   "Regine",
   "Scarlett",
   "Trudy",
   "Jehan",
   "Aditi",
   "Viji",
   "Nalin",
   'Nandi',
   "Mal",
   "Sonia",
   "Sara",
   "Ved",
   "Kavi",
   "Carl",
   "Alekha",
   "Alea",
   "Saniya",
   "Anika",
   "Mila",
   "Amaya",
   "Sierra",
   "Julia",
   "Amal",
   "Shieba",
   "Nirali",
   "Mary",
   "Pheobe",
   "Claire",
   "Isadora",

];

var index = Math.floor(Math.random(48)* Math.floor(peoples.length))
console.log(index)



var people = peoples[index]
$('#people').val(people)

$( "#target1" ).submit(function( event ) {
city = $("#people").val()
getData(people)
$( "#target1" ).val("In" + people)
event.preventDefault();

});
//



  var cities =[
  "Inthenow330",
  "Fuckthis12345",
  "Dopemoneyswag101",
  "Barbiesrock123",
  "279164",
  "744633",
  "RumfistTrumpf",
  "WhosYourDaddy?",
  "9829093381",
  "shumS87",
  "ddwrt5",
  "pumpkin16",
  "mangix271996",
  "3333",
  "77Begumpet",
  "Alekha2209",
  "Maroon51998",
  "Glxy98",
  "misterdoctorprofessorQ",
  "girlyboy9",
  "36cooper",
  "Tom391bit2674ella",
  "KAPPAGAMMA",
  "MEERA5737",
  "17b89",
  "bot4603pen4843bitebasketball28",
  "nastyboy1",
  "Mirchidog44794",
  "Biryani28",
  "49999",
  "{emoji99#}",
  "Musicrocks1999",
  "SupermanisC00l",
  "Water",
  "1234512345k",
  "s1eepy1emur@124",
  "3a2wqqajcrj",
  "sach@@1934",
  "nothing1234",
  "parrot2000",
  "purple2909$",
  "Tea1234!",
  "2BorNOT2B",
  "Yellowbananas108",
  "Mockingbird",
  "Starlight",
  "sparkles98",
  "fruitbask3t",
  "anikariya302",
  "SIMPIE330",
  ];

             var index = Math.floor(Math.random(50)* Math.floor(cities.length))
             console.log(index)



             var city = cities[index]
           $('#city').val(city)

           $( "#target" ).submit(function( event ) {
           city = $("#city").val()
           getData(city)
           $( "#target" ).val("In" + city)
           event.preventDefault();

           });


$(document).ready(function(){
     $("button").click(function(){
         location.reload(true);
     });
 });
