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
  question: "How old am I?\n",
  answer: "19",
}, {
  question: "Where was i born?\n",
  answer: "america",
}, {
  question: "Whats my fav color?\n",
  answer: "blue",
}
]

for(var i=0;i<questions.length;i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}


console.log("Congratulations! You scored " + score )
