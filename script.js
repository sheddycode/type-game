

const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "JavaScript is a versatile programming language.",
    "Typing fast is a valuable skill in the digital age.",
    "Learning to code can be fun and challenging.",
    "Practice makes perfect, so keep typing!"
];

let currentSentence = "";
let startTime = 0;
let intervalId;
let isPlaying = false;

// Get DOM elements
const sentenceElement = document.getElementById('sentence');
const inputElement = document.getElementById('input');
const timerElement = document.getElementById('timer');
const resultElement = document.getElementById('result');
const startBtn = document.getElementById('start-btn');

// Start the game when the button is clicked
startBtn.addEventListener('click', startGame);

inputElement.addEventListener('input', checkInput);

function startGame() {
    if (isPlaying) return;
    
    isPlaying = true;
    resetGame();
    
    currentSentence = getRandomSentence();
    sentenceElement.innerText = currentSentence;
    
    inputElement.value = "";
    inputElement.disabled = false;
    inputElement.focus();
    
    startTime = new Date().getTime();
    
    intervalId = setInterval(updateTimer, 1000);
}

function resetGame() {
    clearInterval(intervalId);
    timerElement.innerText = "Time: 0s";
    resultElement.innerText = "";
    inputElement.disabled = true;
}

function getRandomSentence() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
}

function updateTimer() {
    const currentTime = new Date().getTime();
    const timeElapsed = Math.floor((currentTime - startTime) / 1000);
    timerElement.innerText = `Time: ${timeElapsed}s`;
}

function checkInput() {
    const typedText = inputElement.value;
    
    if (typedText === currentSentence) {
        clearInterval(intervalId);
        const endTime = new Date().getTime();
        const timeTaken = Math.floor((endTime - startTime) / 1000);
        resultElement.innerText = `You completed the sentence in ${timeTaken} seconds!`;
        isPlaying = false;
        inputElement.disabled = true;
    }
}

