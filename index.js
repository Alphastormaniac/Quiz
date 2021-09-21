var readlineSync = require("readline-sync");

var userName = readlineSync.question("What is your name?\n");

console.log("Welcome " + userName + " to DO YOU KNOW Pavan?");

var score = 0;

function play(question,answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("you are right!");
    score += 1;
  } else {
    console.log("you are wrong!");    
  }
   console.log("Your current score is " + score)
  console.log("*****************")
}

var questions = [{
  question : "1) How old am i?\n",
  answer : "19",
},{
  question : "2) Where was i born?\n",
  answer : "usa",
},{
  question : "3) What's my fav color?\n",
  answer : "blue",
},{
  question : "4) What do i enjoy doing the most?\n",
  answer : "sleeping",
},{
  question : "5) What laptop do i use?\n",
  answer : "omen",
},{
  question : "6) Which vehicle do i own?\n",
  answer : "bmw",
}]

for(var i=0;i<questions.length;i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}


console.log("Congratulations! You scored " + score )
