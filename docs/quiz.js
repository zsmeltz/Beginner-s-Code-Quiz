var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var questionBoxElement = document.getElementById('questionsBox');
var questionEl = document.getElementById('question');
var answerButtonsEl = document.getElementById('btn-answer');

let currentQIndex;


function beginQuiz(){
    
}

function gotoNextQ(){
    
}

function showCurrentQuestion() {
    
}



function answerSelector(){
    
}


function storeCorrectAnswers(){

}



var qnAs = [{
    question: "Which answer has three correct names of pop-ups in Javascript?",
    answers: [
        {text: "A.) prompt, hail, tell", correct: false},
        {text: "B.) confirm, prompt, alert", correct: true},
        {text: "C.) let, confirm, alert", correct: false}        
     ]
    }, {
        question: "Which 'brackets' do we use to identify an array?",
        answers: [
            {text: "A.) ()", correct: false},
            {text: "B.) {}", correct: false},
            {text: "C.) < >", correct: false},
            {text: "D.) []", correct: true}        
         ]
        }, {
            question: "What are variables in Javascript?",
            answers: [
                {text: "A.) strings", correct: false},
                {text: "B.) arrays", correct: false},
                {text: "C.) prompts", correct: false},
                {text: "D.) all of the above", correct: true}        
             ]
            }, {
                question: "Which syntax is used to decrement an index via loop?",
                answers: [
                    {text: "A.) i--", correct: true},
                    {text: "B.) i++", correct: false},
                    {text: "C.) i!!", correct: false}        
                 ]
                }, {
                    question: "What method is used to select a certain character index from a string?",
                    answers: [
                        {text: "A.) '.class()", correct: false},
                        {text: "B.) '.getElementById()' ", correct: false},
                        {text: "C.) .charAt()", correct: true},
                        {text: "D.) indexOf()", correct: false}        
                     ]
                    }, {
                        question: "You should '_' to get a function to work in Javascipt: ",
                        answers: [
                            {text: "A.) summon", correct: false},
                            {text: "B.) declare", correct: true},
                            {text: "C.) direct", correct: false}        
                         ]
                        }, {
                            question: "In an object, the layout contains keys and values.",
                            answers: [
                                {text: "A.) true", correct: true},
                                {text: "B.) false", correct: false}
                                       
                             ]
                            }, {
                                question: "What does DOM stand for?",
                                answers: [
                                    {text: "A.) Documented Online Manufacture", correct: false},
                                    {text: "B.) Drink Orange Marmalade", correct: false},
                                    {text: "C.) Document Object Model", correct: true}        
                                 ]
                                }, {
                                    question: "'document.getElementById()' should:",
                                    answers: [
                                        {text: "A.) Pick out and Id from HTML", correct: true},
                                        {text: "B.) select all tags from HTML", correct: false},
                                        {text: "C.) create a loop", correct: false}        
                                     ]
                                    }, {
                                        question: "Which elements can .querySelector() select?",
                                        answers: [
                                            {text: "A.) <tags>", correct: false},
                                            {text: "B.) '#'s", correct: false},
                                            {text: "C.) '.'s", correct: false},
                                            {text: "D.) all of the above", correct: true}        
                                         ]
                                        }, 
]
    
      