const questions=[
    {
        question: "Which is largest animal in the world?",
        answers:[
            {text: "Shark", correct:false},
            {text:"Blue Whale", correct:true},
            {text:"Elephant", correct:false},
            {text:"Giraffe", correct:false}

        ]
    },
    {
        question: "Which is largest coutry in the world?",
        answers:[
            {text: "China", correct:false},
            {text:"India", correct:false},
            {text:"USA",correct:false},
            {text:"Russia", correct:true}

        ]
    }, 
    {
        question: "Which is smallest continent in the world?",
        answers:[
            {text: "Asia", correct:false},
            {text:"Arctic", correct:false},
            {text:"EAfica", correct:false},
            {text:"Australia", correct:true}

        ]
    },
    {
        question: "Which coutry has highest population in th world?",
        answers:[
            {text: "China", correct:false},
            {text:"India", correct:true},
            {text:"USA",correct:false},
            {text:"Russia", correct:false}

        ]
    }
];
const questionElement= document.getElementById("question");
const answerButton= document.getElementById("answerButtons");
const nextButton= document.getElementById("nextBtn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex + 1;
    questionElement.innerHTML= questionNo+". " +currentQuestion.question;
    currentQuestion.answers.forEach(answer =>{
        const button= document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct= answer.correct;
        }
        button.addEventListener("click", selectAnswer)

    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedbtn= e.target;
    const iscorrect= selectedbtn.dataset.correct==="true";
    if(iscorrect){
        selectedbtn.classList.add("correct");
        score++;
    }else{
        selectedbtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
    }
    button.disabled=true;
})
    nextButton.style.display="block"
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML= "Play again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }

}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();    }
})

startQuiz();

