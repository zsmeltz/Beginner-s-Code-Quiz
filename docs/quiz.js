var startButton = document.querySelector('#start-btn');
var nextButton = document.querySelector('#next-btn');
var questionBoxElement = document.querySelector('#questionsBox');
var questionEl = document.querySelector('#question');
var buttonOne = document.querySelector('#buttonOne');
var buttonTwo = document.querySelector('#buttonTwo');
var buttonThree = document.querySelector('#buttonThree');
var buttonFour = document.querySelector('#buttonFour');
var subBtn = document.querySelector('#submitBtn');
var index = 0;
var pTimer = document.getElementById("countdown");
var score = 0;
var countDown = 300;
var yourScore = document.getElementById('your-score');
var highscoreForm = document.getElementById('highscore-form');
var name = document.getElementById('initials');
var initials = highscoreForm.elements['initials']
var Highsc

nextButton.addEventListener("click", function(e){
   e.preventDefault();
   doNext(e)
});

highscoreForm.addEventListener("submit", function(e){

   console.log('initials are ', initials.value);
   
   localStorage.setItem(initials.value, score);
  
});

var questAns = [{
   question: "Which answer has three correct names of pop-ups in Javascript?",
   choice1: "prompt, hail, tell",
   choice2: "confirm, prompt, alert",
   choice3: "let, confirm, alert",
   answer: "confirm, prompt, alert"     
    }, {
       question: "Which 'brackets' do we use to identify an array?",
       choice1: "()",
       choice2: "{}", 
       choice3: "< >", 
       choice4: "[]",
       answer: "[]"  
       }, {
           question: "What are variables in Javascript?",
              choice1: "strings",  
              choice2: "arrays", 
              choice3: "prompts", 
              choice4: "all of the above",
              answer: "all of the above"    
           }, {
               question: "Which syntax is used to decrement an index via loop?",
                  choice1: "i--",  
                  choice2: "i++", 
                  choice3: "i!!", 
                  answer: "i--"     
               }, {
                   question: "Of the following methods, which is used to select a specific character's index from a string?",
                      choice1: ".class()",  
                      choice2: ".getElementById()", 
                      choice3: ".charAt()", 
                      choice4: ".indexOf()",
                      answer: ".charAt()"      
                   }, {
                       question: "You should _ a funciton to use it.",
                          choice1: "summon",  
                          choice2: "declare", 
                          choice3: "direct",
                          answer:  "declare"      
                       }, {
                           question: "In an object, the layout contains keys and values.",
                              choice1: "True",  
                              choice2: "False", 
                              answer: "True"     
                           }, {
                               question: "What does DOM stand for?",
                                  choice1: "Domesticated Obtuse Cats",  
                                  choice2: "Drink Orange Marmalade", 
                                  choice3: "Document Object Model", 
                                  answer: "Document Object Model"     
                               }, {
                                   question: "document.getElementById() should:",
                                      choice1: "pick out an Id from CSS or HTML",  
                                      choice2: "select all tags from html", 
                                      choice3: "create a loop", 
                                      answer: "pick out an Id from CSS or HTML"
                                   }, {
                                       question: "Which elements can .querySelector() select?",
                                          choice1: "<tags>",  
                                          choice2: "#s", 
                                          choice3: "'.'s", 
                                          choice4: "all of the above",
                                          answer: "all of the above"       
                                       }];

startButton.addEventListener("click", function(e){
   e.preventDefault();
   buttonOne.style.visibility = 'visible';
   buttonTwo.style.visibility = 'visible';
   buttonThree.style.visibility = 'visible';
   buttonFour.style.visibility = 'visible';
   nextButton.style.visibility = 'visible';
   startButton.style.display = 'none';
   decTime();
   gotoNextQ(0);
   
});

buttonOne.addEventListener("click", function(e){
   e.preventDefault();
   if( questAns[parseInt(index)].choice1 === questAns[parseInt(index)].answer) {
      buttonOne.style = "background-color: olivedrab", "color: slategrey", "text-shadow: 0px 0px 5px black";
      buttonOne.textContent = "CORRECT";
      storeCorrectAnswers();
   }else{
      buttonOne.style = "background-color: darkred", "color: salmon", "text-shadow: 10px black";
      buttonOne.textContent = "INCORRECT";
      countDown = countDown - 10;
      index++
      gotoNextQ(index);
   }
});

buttonTwo.addEventListener("click", function(e){
   e.preventDefault();
   if(questAns[parseInt(index)].choice2 === questAns[parseInt(index)].answer) {
      buttonTwo.style = "background-color: olivedrab", "color: slategrey", "text-shadow: 0px 0px 5px black";
      buttonTwo.textContent = "CORRECT";
      storeCorrectAnswers();
   }else{
      buttonTwo.style = "background-color: darkred", "color: salmon", "text-shadow: 10px black";
      buttonTwo.textContent = "INCORRECT";
      countDown = countDown - 10;
      index++
      gotoNextQ(index);
   }
});

buttonThree.addEventListener("click", function(e){
   e.preventDefault();
   if(questAns[parseInt(index)].choice3 === questAns[parseInt(index)].answer) {
      buttonThree.style = "background-color: olivedrab", "color: slategrey", "text-shadow: 0px 0px 5px black";
      buttonThree.textContent = "CORRECT";
      storeCorrectAnswers();
   }else{
      buttonThree.style = "background-color: darkred", "color: salmon", "text-shadow: 10px black";
      buttonThree.textContent = "INCORRECT";
      countDown = countDown - 10;
      index++
      gotoNextQ(index);
   }
});

buttonFour.addEventListener("click", function(e){
   e.preventDefault();
   if(questAns[parseInt(index)].choice4 === questAns[parseInt(index)].answer) {
      buttonFour.style = "background-color: olivedrab", "color: slategrey", "text-shadow: 0px 0px 5px black";
      buttonFour.textContent = "CORRECT";
      storeCorrectAnswers();
   }else{
      buttonFour.style = "background-color: darkred", "color: salmon", "text-shadow: 10px black";
      buttonFour.textContent = "INCORRECT";
      countDown = countDown - 10;
      index++
      gotoNextQ(index);
   }
});



function gotoNextQ(idx){
   if(idx >= 0 && idx <= 9) {
   buttonOne.style = "none";
   buttonTwo.style = 'none';
   buttonThree.style = 'none';
   buttonFour.style = 'none';
   questionEl.innerHTML = questAns[parseInt(idx)].question;
   buttonOne.innerHTML = questAns[parseInt(idx)].choice1;
   buttonTwo.innerHTML = questAns[parseInt(idx)].choice2;
   buttonThree.innerHTML = questAns[parseInt(idx)].choice3;
   buttonFour.innerHTML = questAns[parseInt(idx)].choice4; 
   }
}

function doNext(e) {

   e.preventDefault();
   index++;
   if(index > 9){
     endQuiz();
   }
   gotoNextQ(index);
}

function endQuiz(){
  
   pTimer.innerHTML = "Done"
   questionEl.textContent = "And that's a wrap";
   buttonOne.style =  'display:none';
   buttonTwo.style =  'display:none';
   buttonThree.style =  'display:none';
   buttonFour.style =  'display:none';
   nextButton.style =  'display:none';
   startButton.style.visibility = 'visable';
   highscoreForm.style.visibility = 'visible';
   yourScore.style.visibility = 'visible';
   yourScore.textContent = "Your score: " + score;
   countDown = stop;
}

function decTime(){
   pTimer.innerHTML = countDown;
   
   setInterval(checkTime, 1000);

}

function checkTime() {
   --countDown;
   pTimer.innerHTML = countDown;
   if(countDown === 0 ) {
      endQuiz();
   }
}

function storeScore(e){
   e.preventDefault();
   alert("stored");
   var scored = JSON.stringify(score);
   localStorage.setItem("initials", score);
}

function storeCorrectAnswers(){
   score++;
   console.log(score);
}
      

// localStorage.getItem(name, JSON.stringify(score));