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

let isFirst = 0
let firstImageNname = ''
let totalScore = 0
let firstCard 


function loadImages() {
    const data = randomImage()
    data.forEach(item => {
        game.innerHTML += `<div class="uno-block">
        <img class="placeholder " src="${placeholder.imageSrc}" alt="${placeholder.name}">
        <img class="mistery" src="${item.imageSrc}" name="${item.name}" alt="${item.name}">
        </div>`
    });  
    const showMystery = (element) => {
        element.classList.add('reverse')

         if(isFirst == 0){
            isFirst = 1
            firstImageNname = element.children[1].name
            firstCard = element
         }else if (isFirst == 1 ){
            isFirst = 0
            if(firstImageNname == element.children[1].name){
                totalScore++
                score.innerHTML =`Score: ${totalScore}`
                console.log('yay!')
            }else{
                console.log('not a match')
                setTimeout(() => {
                    element.classList.remove('reverse')
                    firstCard.classList.remove('reverse')
                }, 1000);
            }
         }

    }
    
    setTimeout(() => {
        document.querySelectorAll('.uno-block').forEach(x => {
            x.addEventListener('click' ,(e) => {
                showMystery(e.currentTarget);
            });
        })
    }, 1000);



}
loadImages()




