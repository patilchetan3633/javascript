
const questions = [
    {
        question : "Which HTML tag is used to create a hyperlink ?",
        answers: [
            {text:"img", correct: false},
            {text:"p", correct: false},
            {text:"a", correct: true},
            {text:"div", correct: false},
        ]
    },
    {
        question : "What is the purpose of CSS in web development ?",
        answers: [
            {text:"To define the structure of a web page", correct: false},
            {text:"To add interactivity to a web page", correct: false},
            {text:"To style the appearance of a web page", correct: true},
            {text:"To control the behavior of a web page", correct: false},
        ]
    },
    {
        question : "Which javascrit keyword i used to declare a variable ?",
        answers: [
            {text:"var", correct: false},
            {text:"let", correct: false},
            {text:"const", correct: false},
            {text:"All of these", correct: true},
        ]
    },
    {
        question : "Which HTML tag is used to create a paragraph?",
        answers: [
            {text:"p", correct: true},
            {text:"b", correct: false},
            {text:"em", correct: false},
            {text:"a", correct: false},
        ]
    },
    {
        question : "What does CSS stand for?",
        answers: [
            {text:"Compute Style Sheet", correct: false},
            {text:"Cascading Style Sheet", correct: true},
            {text:"Client Style Script", correct: false},
            {text:" Custom Style Script", correct: false},
        ]
    },
    {
        question : " Which of the following is not javascript data types?",
        answers: [
            {text:"Null type", correct: false},
            {text:"Undefined type", correct: false},
            {text:"Number type", correct: false},
            {text:"All of the mentioned", correct: true},
        ]
    },
    {
        question : " Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        answers: [
            {text:"Position", correct: false},
            {text:"Window", correct: true},
            {text:"Standard", correct: false},
            {text:"Location", correct: false},
        ]
    },
    {
        question : " Which of the following can be used to call a JavaScript Code Snippet?",
        answers: [
            {text:"Function/Method", correct: true},
            {text:"Preprocessor", correct: false},
            {text:"Triggering Event", correct: false},
            {text:"RMI", correct: false},
        ]
    },
    {
        question : "Which of the following scoping type does JavaScript use?",
        answers: [
            {text:"Sequential", correct: false},
            {text:"Segmental", correct: false},
            {text:"Lexical", correct: true},
            {text:"Literal", correct: false},
        ]
    },
    {
        question : "Which of the following is not an error in JavaScript?",
        answers: [
            {text:"Missing of Bracket", correct: false},
            {text:"Division by zero", correct: true},
            {text:"Syntax error", correct: false},
            {text:"Missing of semicolons", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answers = document.getElementById("answers");
const next = document.getElementById("next");

let curentindex = 0;
let score = 0;

function startsQuiz()
{
    curentindex = 0;
    score = 0;
    next.innerHTML = "Next Question";
    showQuestion();
}

function showQuestion()
{
    resetState();

    let currentQuestion = questions[curentindex];
    let questionNo = curentindex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => { 
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answers.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}

function resetState()
{
    next.style.display = "none";
    while(answers.firstChild){
        answers.removeChild(answers.firstChild)
    }
}

function selectAnswer(e)
{
    const seletedBtn = e.target;
    const isCorrect = seletedBtn.dataset.correct === "true";
    if(isCorrect)
    {
        seletedBtn.classList.add("correct");
        score++;
    }
    else
    {
        seletedBtn.classList.add("incorrect");
    }
    Array.from(answers.children).forEach(button => {
        if(button.dataset.correct === "true")
        {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    next.style.display = "block";
}

function showScore()
{
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    next.innerHTML = "Play Again";
    next.style.display = "block";
}

function handlenext()
{
    curentindex++;
    if(curentindex < questions.length)
    {
        showQuestion();
    }
    else
    {
        showScore();
    }
}

next.addEventListener("click", () => {
    if(curentindex < questions.length)
    {
        handlenext();
    }
    else
    {
        startsQuiz();
    }
});


startsQuiz();
