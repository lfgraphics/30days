let questions = [
    {
        question: "Which country is the largest producer of coffee in the world?",
        answers: [
            { text: 'Brazil', correct: true },
            { text: 'Colombia', correct: false },
            { text: 'Ethiopia', correct: false },
            { text: 'Vietnam', correct: false },
        ]
    },
    {
        question: "Which scientist proposed the theory of general relativity?",
        answers: [
            { text: 'Albert Einstein', correct: true },
            { text: 'Isaac Newton', correct: false },
            { text: 'Galileo Galilei', correct: false },
            { text: 'Nikola Tesla', correct: false },
        ]
    },
    {
        question: "What is the capital city of Australia?",
        answers: [
            { text: 'Canberra', correct: true },
            { text: 'Sydney', correct: false },
            { text: 'Melbourne', correct: false },
            { text: 'Brisbane', correct: false },
        ]
    },
    {
        question: 'Which famous artist painted the "Mona Lisa"?',
        answers: [
            { text: 'Leonardo da Vinci', correct: true },
            { text: 'Vincent van Gogh', correct: false },
            { text: 'Pablo Picasso', correct: false },
            { text: 'Michelangelo', correct: false },
        ]
    },
    {
        question: 'Which planet is known as the "Red Planet"?',
        answers: [
            { text: 'Mars', correct: true },
            { text: 'Venus', correct: false },
            { text: 'Pluto', correct: false },
            { text: 'Earth', correct: false },
        ]
    },
    {
        question: 'Which country is famous for the landmark "Eiffel Tower"?',
        answers: [
            { text: 'France', correct: true },
            { text: 'Italy', correct: false },
            { text: 'Jermany', correct: false },
            { text: 'Spain', correct: false },
        ]
    },
    {
        question: 'Who is the author of the Harry Potter book series?',
        answers: [
            { text: 'J.K. Rowling', correct: true },
            { text: 'J.R.R. Tolkien', correct: false },
            { text: 'Stephen King', correct: false },
            { text: 'Dan Brown', correct: false },
        ]
    },
    {
        question: 'Which ocean is the largest in the world?',
        answers: [
            { text: 'Pacific Ocean', correct: true },
            { text: 'Atlantic Ocean', correct: false },
            { text: 'Indian Ocean', correct: false },
            { text: 'Arctic Ocean', correct: false },
        ]
    },
    {
        question: 'Which is the largest organ in the human body?',
        answers: [
            { text: 'Skin', correct: true },
            { text: 'Liver', correct: false },
            { text: 'Brain', correct: false },
            { text: 'Heart', correct: false },
        ]
    },
    {
        question: 'Which is the tallest mountain in the world?',
        answers: [
            { text: 'Mount Everest', correct: true },
            { text: 'Mount Kilimanjaro', correct: false },
            { text: 'Mount McKinley (Denali)', correct: false },
            { text: 'Mount Fuji', correct: false },
        ]
    },
];

questions = questions.map(question => ({ ...question, answers: question.answers.sort(() => Math.random() - 0.5) })).sort(() => Math.random() - 0.5);

const questionElement = document.getElementById('question');
const ansBtns = document.getElementById('ans-btn');
const nextBtn = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0
    nextBtn.innerText = 'Next';
    showQuestion();
}

function showQuestion() {
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerText = questionNo + '. ' + currentQuestion.question;
    let Qn = document.createElement('span')
    Qn.innerHTML = ` ${currentQuestionIndex + 1}/${questions.length}`
    questionElement.appendChild(Qn)

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        ansBtns.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAns)
    });
}

function resetState() {
    nextBtn.style.display = 'none';
    while (ansBtns.firstChild) {
        ansBtns.removeChild(ansBtns.firstChild)
    }
}

function selectAns(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++
    } else {
        selectedBtn.classList.add('incorrect');
    }
    Array.from(ansBtns.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextBtn.style.display = 'block';
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You Scored ${score * (10)} out of ${questions.length * (10)}!`;
    nextBtn.innerHTML = 'Play again'
    nextBtn.style.display = 'block'
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz()


const logoutButton = document.getElementById('out');
logoutButton.addEventListener('click', () => {
    fetch('/logout', {
        method: 'GET',
    })
        .then(response => {
            if (response.ok) {
                // Logout successful
                // Perform any additional actions or UI updates if needed
                alert('Logged out successfully');
            } else {
                // Logout failed
                alert('Logout failed');
            }
        })
        .catch(error => {
            // Handle any error that occurred during the logout process
            console.error('Error occurred during logout', error);
        });
});


console.log('Added shuffeling questions and answers both method at line 94 and more things 😁')