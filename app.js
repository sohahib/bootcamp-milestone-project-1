const fruits = ['😴😄😃⛔🎠🚓🚇'];

let timer = document.querySelector('.timer')
let score = document.querySelector('.score')
let game = document.querySelector('.game-board')
let image = document.getElementsByTagName('img')

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

function loadImages() {
    const data = randomImage()
    data.forEach(item => {
        game.innerHTML += `<div class="uno-block">
        <img onClick={handleClickBoard} class="placeholder" src="${placeholder.imageSrc}" alt="${placeholder.name}">
        <img class="mistery" src="${item.imageSrc}" name="${item.name}" alt="${item.name}">
        </div>`
    });  
    
}

loadImages()