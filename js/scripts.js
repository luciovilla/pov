var quotelist = [
  ["People are virtually afraid to say, ‘I want the death penalty.’ Well, I want it.","All life is worth saving.",1],
  ["Positive!","Negative!",0],
  ["People are virtually afraid to say, ‘I want the death penalty.’ Well, I want it.","All life is worth saving.",1],
  ["People are virtually afraid to say, ‘I want the death penalty.’ Well, I want it.","All life is worth saving.",1]
];


var scorepositive;
var scorenegative;

var questionnumber = 0;

displaynewquotes();


function displaynewquotes(){
  $( "#quote0" ).text(quotelist[questionnumber][0]);
  $( "#quote1" ).text(quotelist[questionnumber][1]);
}

$( "#quote0" ).click(function() {
  //add to the correct score based on which kind of quote this is.
  if (quotelist[questionnumber][2] === 0){
    scorepositive++;
  }
  if (quotelist[questionnumber][2] === 1){
    scorenegative++;
  }
  questionnumber++;
  if (questionnumber < quotelist.length){
    displaynewquotes();
  }
  else{
    //display video
  }
});


$( "#quote1" ).click(function() {
  //add to the correct score based on which kind of quote this is.
  if (quotelist[questionnumber][2] === 1){
    scorepositive++;
  }
  if (quotelist[questionnumber][2] === 0){
    scorenegative++;
  }
  questionnumber++;
  if (questionnumber < quotelist.length){
    displaynewquotes();
  }
  else{
    //display video
  }
});


/*
$( "#negative" ).click(function() {
  var htmlString = neg[0];
  $( "#negative" ).text( htmlString );
});

$( "#positive" ).click(function() {
  var htmlString = $( pos ).html();
  $( pos ).text( htmlString );
});
*/
