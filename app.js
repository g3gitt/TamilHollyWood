const names = [
    'kaththi',
    'kaithi',
    'paiya',
    'anbe sivam',
    'maan karathe',
    'gajini',
    'chandramukhi',
    'aranmanai',
    'kanchana',
    'yaaradi nee mohini',//10
    'remo',
    'velayilla pattadhari',
    'meesaya murukku',
    'mankatha',
    'gilli',
    'soorarai potru',
    'oru kal oru kannadi',
    'sachin',
    'Raja Rani'


    
];

const hint2=[
    'Vijay kannula map',
    'bucket biriyani',
    'adada mazha',
    'Kamal-Maddy',
    '10 kural',
    'motta memory',
    'maapu vechutanda aapu',
    'sundar c and andrea',
    'therinjiruchaaa?ellarukum therinjiruchaa?',
    'red saree',
    'regina motwani',
    'engineer life',
    'EEE student m1 m2 m3 m4 DSP',
    'naa,Thaaravi SI Ganesh,DJ bar owner magath...',
    'True luv da Chellam',
    '5 ruba Aeroplane',
    'ada theanada',
    'unga smile cute uh iruku',
    'unaku edhachu thenmozhi kanimozhi nu vaaivarapula irupa, avala thedi thedi luv pannu'
      
]

const hint1=[
    'Idli',
    'one night',
    'monoact Tamannah',
    'Underrated Sundar C',
    'Boxing Peter',
    'number tattoo',
    'torchlight jyothika',
    'kushboo deiva paadal',
    'Sarath Kumar padam',
    'yaa yaa',
    'Avvai Shanmughi',
    'en vandi santhukulla pogum, un vandi poguma?',
    'karisal kaadu',
    'Strictly no rules',
    'kaara pori',
    'vaanam enna unga appan veetu soththaaaa?',
    'Adhu enna vaartha? kaaval thurai ungal nanban...deiii',
    'vaseegara',
    'nee oru saidst'

]





let g=Math.floor(Math.random() * names.length);
let target = names[g];
let hintt=hint1[g];
let hinttt=hint2[g];

let guessName = target.replace(/[a-z]/g, '_');
let attempts = 5;
let guessedLetters = new Set();

const board = document.getElementById('board');
const userLetter = document.getElementById('userLetter');
const submitLetterButton = document.getElementById('submitLetter');
const feedback = document.getElementById('feedback');
const attemptsLeftElem = document.getElementById('attemptsLeft');

feedback.textContent = `Hint : "${hinttt}".`;


function updateGameBoard() {
   
    board.textContent = guessName.split('').join(' ');
}

function handleGuess() {
    
    
    const input = userLetter.value.toLowerCase().trim();

    if (input.length !== 1 || !/^[a-z]$/.test(input)) {
        feedback.textContent = 'Please enter a vaild letter, only single letter allowed.';
        return;
    }

    if (guessedLetters.has(input)) {
        feedback.textContent = `You already guessed "${input}".`;
        return;
    }

  
    guessedLetters.add(input);

    if (target.includes(input)) {
        let newDisplay = '';
        for (let i = 0; i < target.length; i++) {
            newDisplay += target[i] === input ? input : guessName[i];
        }
        guessName = newDisplay;
    } else {
        attempts--;
    }

    
    if (guessName === target) {
        feedback.textContent = 'Congratulations! You guessed the name!';
        submitLetterButton.disabled = true;
    } else if (attempts === 0) {
        feedback.textContent = `Game Over! The name was "${target}".`;
        submitLetterButton.disabled = true;
    }else if (attempts === 3) {
        feedback.textContent = `Hint : "${hintt}".`;
    }
     else {
        feedback.textContent = '';
    }

    attemptsLeftElem.textContent = `Attempts Left: ${attempts}`;
    updateGameBoard();
    userLetter.value = '';
}

submitLetterButton.addEventListener('click', handleGuess);
userLetter.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleGuess();
    }
});


updateGameBoard();