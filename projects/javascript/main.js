var myName= 'Simran';
console.log('My name is', myName);

var number=8;
console.log('My favourite number is', number);

var myName= '8';
console.log('My favourite number as a string is', myName);

var hello=true;

var myArray = ['S','I','M','R','A','N'];
console.log('The letters in my first name are',myArray);

var array=[8,'hello', true];
console.log(array);

varName='Simran ';
varLast='Rao';
console.log('My full name is', varName + varLast)

varNumber= 10;
varTen= 10;
console.log(10*10);

var firstItem = myArray[0];
lastItem = myArray[myArray.length - 1];
console.log('These are the first and last letters of my name', firstItem,lastItem );

var word='supercalifragilisticexpialidocious'
console.log(word.length);

var students=15;
if ( students == 16 ) {
  console.log('All the students are in the class');
}
else {
  console.log('Some students are absent from class');
}

for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

var date = new Date;
var hour = date.getHours();
if (hour>7 && hour<9.66){
  console.log("It's not time")
}
else{
  console.log("It is between 7 and 9:40pm")
}

var day = date.getDay();

if(day == 1){
  console.log("It's Monday!")
}

else if(day==2){
  console.log("It's Tuesday!")
}

else if(day==3){
  console.log("Today is Wednesday!")
}

else if(day==4){
  console.log("Thurday!")
}

else if (day==5){
  console.log("It's Friday!!")
}

else if (day==6){
  console.log("It's the weekendd")
}

else if (day==0){
  console.log("Tomorrow is Monday")
}



var food= ['pizza',' pasta',' dosa'];
var animals=['dogs',' cats',' goats'];
var places=['mumbai',' moscow',' scotland'];
var pokemon=['pikachu',' charmander',' weedle'];

var allitems = [food, animals, places, pokemon];

for(var i=0; i < allitems.length; i++){
  console.log(allitems[i] + ' are a few of my favourite things');
}



for(var i=0; i< food.length;  i++){
console.log(food[i]);
}

for(var i=0; i< animals.length;  i++){
console.log(animals[i]);
}

for(var i=0; i< places.length;  i++){
console.log(places[i]);
}

for(var i=0; i< pokemon.length;  i++){
console.log(pokemon[i]);
}
