const questions=[{
    questions:"Which is the largest animal in the world",
    answers:[
        { text: "shark",correct:"false"},
        {text:"blue whale", correct:"true"},
        {text:"elephant" , correct:"false"},
        {text:"jiraf",correct:"false"}
    ]
},
{
    questions:"Your Mood ?",
    answers:[
        { text: "Good",correct:"false"},
        {text:"Exhausted", correct:"true"},
        {text:"Fine" , correct:"false"},
        {text:"Doesn't Matter",correct:"false"}
    ]
},
{
    questions:"Do you like Engineering",
    answers:[
        { text: "Yes",correct:"false"},
        {text:"No", correct:"true"},
        {text:"Don't Know" , correct:"false"},
        {text:"Leave it",correct:"false"}
    ]
},
{
    questions:"How's the days were going ",
    answers:[
        { text: "Just going",correct:"false"},
        {text:"Fun all the time", correct:"true"},
        {text:"Boring" , correct:"false"},
        {text:"Padhai shadai",correct:"false"}
    ]
},

]
const questionEle=document.querySelector("#question")
const answerButtons=document.getElementById("answer-buttons")
const nextButton=document.getElementById("next-btn")
let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next"
    showQuestions()

}
function showQuestions(){
    resetState()
    let currentQuestion=questions[currentQuestionIndex]
    let questionNumber=currentQuestionIndex+1;
    questionEle.innerHTML=questionNumber+". "+currentQuestion.questions
currentQuestion.answers.forEach( answer =>{
    const button=document.createElement("button");
    button.innerHTML=answer.text
    button.classList.add("btn")
    answerButtons.appendChild(button)
    button.addEventListener("click",selectAnswers);

    if(answer.correct){
        button.dataset.correct=answer.correct
        
    }
    button.addEventListener("click",function(){
        
    })
})
}
function resetState(){
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}
function selectAnswers(e){
// console.log(e);
const selected_btn=e.target
const isCorrect=selected_btn.dataset.correct==="true"
if(isCorrect){
    selected_btn.classList.add("correct");
    score++

}
else {
    selected_btn.classList.add("incorrect")

}
Array.from(answerButtons.children).forEach(button=>{
    if(button.dataset.correct==="true"){
        button.classList.add("correct");

    }
    button.disabled=true
})
    // const 
}

nextButton.addEventListener("click",function(){
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else {
        startQuiz()
    }
})
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestions()
    }
    else {
        showScore()
    }
}
function showScore(){
    resetState()
    questionEle.innerHTML=`You scored ${score} out of ${questions.length}`
    nextButton.innerHTML="Play Again"
}
startQuiz()

