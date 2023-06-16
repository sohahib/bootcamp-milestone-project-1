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
let count = 3

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
        button.addEventListener('click', loadImages)
}
startNewGame()

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
    }, 1000);

    
}
const showMystery = (element) => {
    element.classList.add('reverse')

     if(isFirst == 0){
        isFirst = 1
        firstImageNname = element.children[1].name
        firstCard = element
        firstCard.classList.add('unclickable')
     }else if (isFirst == 1 ){
        isFirst = 0
        if(firstImageNname == element.children[1].name){
            totalScore++
            score.innerHTML =`Score: ${totalScore}`
            console.log('yay!')
            element.classList.add('unclickable')
        }else{
            setTimeout(() => {
                element.classList.remove('reverse')
                firstCard.classList.remove('reverse')
            }, 1000);
            firstCard.classList.remove('unclickable')
            element.classList.remove('unclickable')
        }
     }
}
//loadImages()

function countdown(){
    let timer = setInterval(function() {

        if(count <= 0) {
            clearInterval(timer)
            timerTag.innerHTML = `Timer: ${count}`;
            container.innerHTML =`<div class="start-game-board">
            <p>You've got <strong>${totalScore}</strong> correct match. </p>
            <button  class="btn-start btn-try-again"> Try Again </button>
            </div>`
        } else {
            timerTag.innerHTML = `Timer: ${count--}`;
        }
    }, 1000);
    
}

// let playAgainButton = document.querySelector('.btn-try-again')
// playAgainButton.addEventListener('click', ()=>{
//  console.log('click')
//  loadImages
// })

