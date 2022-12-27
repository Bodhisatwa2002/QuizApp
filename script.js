const quizData = [
  {
    question: "What is the highest number of runs scored in an over",
    a: "43",
    b: "57",
    c: "63",
    d: "77",
    correct: "d",
  },
  {
    question: "When was the Cricket World Cup founded?",
    a: "1965",
    b: "1975",
    c: "1985",
    d: "1995",
    correct: "b",
  },
  {
    question: "What is the highest ever Test batting average?",
    a: "83.94",
    b: "89.23",
    c: "95.62",
    d: "99.94",
    correct: "d",
  },
  {
    question: "Which one of these players was not a wicket-keeper-batter?",
    a: "Andy Flower",
    b: "Brendon McCullum",
    c: "Alex Stewart",
    d: "Alastair Cook",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
