const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Madrid", "Berlin", "Rome"],
      answer: "Paris"
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Shakespeare", "Tolstoy", "Hemingway", "Dante"],
      answer: "Shakespeare"
    },
    {
      question: "What is the boiling point of water?",
      options: ["100°C", "90°C", "80°C", "70°C"],
      answer: "100°C"
    },
    {
      question: "What is the largest planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Jupiter"
    },
    {
      question: "Which continent is Egypt in?",
      options: ["Africa", "Asia", "Europe", "Australia"],
      answer: "Africa"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Da Vinci", "Picasso", "Van Gogh", "Michelangelo"],
      answer: "Da Vinci"
    },
    {
      question: "What is H2O?",
      options: ["Water", "Hydrogen", "Oxygen", "Salt"],
      answer: "Water"
    },
    {
      question: "How many continents are there?",
      options: ["5", "6", "7", "8"],
      answer: "7"
    },
    {
      question: "Which organ pumps blood?",
      options: ["Liver", "Heart", "Lungs", "Kidney"],
      answer: "Heart"
    },
    {
      question: "Which animal is known as the king of the jungle?",
      options: ["Lion", "Tiger", "Elephant", "Bear"],
      answer: "Lion"
    }
  ];

  let shuffledQuestions = [];
  let currentQuestion = 0;
  let score = 0;
  let timeLeft = 60;
  let timer;

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function loadQuestion() {
    clearInterval(timer);
    if (currentQuestion >= shuffledQuestions.length) {
      document.getElementById("quizContainer").style.display = "none";
      document.getElementById("result").textContent = `Your score: ${score}/${shuffledQuestions.length}`;
      document.getElementById("restartBtn").style.display = "inline-block";
      document.getElementById("timer").style.display = "none";
      return;
    }

    const current = shuffledQuestions[currentQuestion];
    document.getElementById("question").textContent = current.question;
    const optionsHtml = current.options.map(opt => `
      <label>
        <input type="radio" name="option" value="${opt}"> ${opt}
      </label>
    `).join('');
    document.getElementById("options").innerHTML = optionsHtml;

    timeLeft = 60;
    document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;
    timer = setInterval(() => {
      timeLeft--;
      document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;
      if (timeLeft === 0) {
        submitAnswer(); // Auto-submit on timeout
      }
    }, 1000);
  }

  function submitAnswer() {
    clearInterval(timer);
    const selected = document.querySelector('input[name="option"]:checked');
    if (selected && selected.value === shuffledQuestions[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    loadQuestion();
  }

  function restartQuiz() {
    shuffledQuestions = shuffle([...quizData]); // new random order
    currentQuestion = 0;
    score = 0;
    document.getElementById("result").textContent = '';
    document.getElementById("restartBtn").style.display = "none";
    document.getElementById("quizContainer").style.display = "block";
    document.getElementById("timer").style.display = "block";
    loadQuestion();
  }

  // Start quiz on load
  window.onload = () => {
    restartQuiz();
  };