const fruits = ['😴😄😃⛔🎠🚓🚇'];

let timerTag = document.querySelector('.timer')
let score = document.querySelector('.score')
let game = document.querySelector('.game-board')
let image = document.getElementsByTagName('img')
let container = document.querySelector('.container')

const images = ()=>[
    {imageSrc:'./images/1.svg', name:'lemon'},
    {imageSrc:'./images/2.svg', name:'banana'},
    {imageSrc:'./images/3.svg', name:'kiwi'},
    {imageSrc:'./images/4.svg', name:'brocoli'},
    {imageSrc:'./images/5.svg', name:'carrot'},
    {imageSrc:'./images/6.svg', name:'chery'},
    {imageSrc:'./images/1.svg', name:'lemon'},
    {imageSrc:'./images/2.svg', name:'banana'},
    {imageSrc:'./images/3.svg', name:'kiwi'},
    {imageSrc:'./images/4.svg', name:'brocoli'},
    {imageSrc:'./images/5.svg', name:'carrot'},
    {imageSrc:'./images/6.svg', name:'chery'},
    {imageSrc:'./images/1.svg', name:'lemon'},
    {imageSrc:'./images/2.svg', name:'banana'},
    {imageSrc:'./images/3.svg', name:'kiwi'},
    {imageSrc:'./images/4.svg', name:'brocoli'},
    {imageSrc:'./images/5.svg', name:'carrot'},
    {imageSrc:'./images/6.svg', name:'chery'},
    {imageSrc:'./images/1.svg', name:'lemon'},
    {imageSrc:'./images/2.svg', name:'banana'},
    {imageSrc:'./images/3.svg', name:'kiwi'},
    {imageSrc:'./images/4.svg', name:'brocoli'},
    {imageSrc:'./images/5.svg', name:'carrot'},
    {imageSrc:'./images/6.svg', name:'chery'},
]

const placeholder = {imageSrc:'./images/question-mark.svg', name:'question-mark'};



const randomImage = ()=>{
    const data = images()
    data.sort(()=> Math.random() - 0.5);
    return data
}

let isFirst = 0
let firstImageNname = ''
let totalScore = 0
let firstCard 
let count = 60
let timeForNewGame = false

// Audio
let audio = document.getElementById('myAudio')
   audio.style.display = 'none'

function playAudio(){
    audio.play()
}
playAudio()

function pauseAudio(){
    audio.pause()
}

// Start/Load the game board
function startNewGame(){
    timerTag.innerHTML = ''
    score.innerHTML = ''
    game.innerHTML = `
    <div class="start-game-board">
    <img src='./images/landingPage.jpeg' />  
        <p>Welcome to <strong>Master Memory Game</strong>. </br> A game that tests your memory. </br>
        Choose pairs of images and see if they match.You have 60 seconds to make as many pairs as possible.
         </br></p>
        <button class='btn-start'>Click to Start</button>
        </div>`
        let button = document.querySelector('.btn-start')
        button.addEventListener('click', loadImages, playAudio)
}
startNewGame()

// Handling random display of images
function loadImages() {
    countdown()
    game.innerHTML = ''
    score.innerHTML =`Score: ${totalScore}`
    timerTag.innerHTML = `Timer: ${count}`
    const data = randomImage()
    data.forEach(item => {
        game.innerHTML += `<div class="uno-block">
        <img class="placeholder  " src="${placeholder.imageSrc}" alt="${placeholder.name}">
        <img class="mistery " src="${item.imageSrc}" name="${item.name}" alt="${item.name}">
        </div>`
    });  
   
    
    setTimeout(() => {
        document.querySelectorAll('.uno-block').forEach(x => {
            x.addEventListener('click' ,(e) => {
                showMystery(e.currentTarget);
            });
        })
    }, 500);
}

// handling click, reveal, hide, score incrment fonctionnalities
const showMystery = (element) => {
    element.classList.add('reverse')
     if(isFirst == 0){
        isFirst = 1
        firstImageNname = element.children[1].name
        firstCard = element
        firstCard.classList.add('unclickable')
     }else if (isFirst == 1 ){
        isFirst = 0
        element.classList.add('unclickable')
        if(firstImageNname == element.children[1].name){
            totalScore++
            score.innerHTML =`Score: ${totalScore}`
            if(totalScore == 12 ){
                console.log('no more cards')
                container.innerHTML =`<div class="start-game-board new-game">
                <p>Congratulations! </br> You've got <trong>${totalScore}</trong> correct match out of ${totalScore}.
                </br> You are the master! </p>
                <a href="index.html" class='btn-start btn-try-again'> Try Again </a
                </div>`
             }
        }else{
            firstCard.classList.remove('unclickable')
            element.classList.remove('unclickable')
            setTimeout(() => {
                element.classList.remove('reverse')
                firstCard.classList.remove('reverse')
            }, 500);
        }
     }
     
}

// setting the 60 seconds timer
function countdown(){
    let timer = setInterval(function() {
        if(count <= 0) {
            clearInterval(timer)
            timerTag.innerHTML = `Timer: ${count}`;
            container.innerHTML =`<div class="start-game-board new-game">
            <p>You've got <strong>${totalScore}</strong> correct match. </p>
            <a href="index.html" class='btn-start btn-try-again'> Try Again </a
            </div>`
            pauseAudio()
        } else {
            timerTag.innerHTML = `Timer: ${count--}`;
        }
    }, 1000);
}
