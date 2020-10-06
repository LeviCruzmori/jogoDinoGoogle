// add dino no script
const dino = document.querySelector('.dino');
const background = document.querySelector('.background')
//console.log(dino);
let isjumping = false
let position = 0;
// // identificando quando a tecla é pressionada
function handleKeyup(event){
    if(event.keyCode === 32){
        if(!isjumping){
            jump()
        }
     ;  
    }
    
}
   // console.log9('pressionou spaço');   

// criando evento pulo do dino.
function jump(){
    
    isjumping = true;

    let upInterval = setInterval(() =>{
        if(position >= 150){
            clearInterval(upInterval)
            //descendo
            let downInterval = setInterval(() =>{
                if(position <= 0){
                    clearInterval(downInterval);
                    isjumping = false;

                }else
                position -= 20;
                dino.style.bottom = position + 'px';
            },20)
        }else
        //subindo
        position += 20;
        dino.style.bottom = position + 'px';
    }, 20); 
}
  

//gerando os cactus
function createcactus(){
    const cactus = document.createElement('div');
   let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus')
    cactus.style.left = 1000 + 'px'
    background.appendChild(cactus)
    // CRIANDO O MOVIMENTO DO CACTUS
    let leftInterval =  setInterval(() =>{
          if(cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else if( cactusPosition > 0 && cactusPosition < 60 && position <60){
            clearInterval(leftInterval);
            document.body.innerHTML =  '<h1 class"gamer-over">Fim de jogo</h1> '
        }else{
           cactusPosition -= 10;
        cactus.style.left =  cactusPosition + 'px';
       
        }        
    },20);
    setTimeout(createcactus, randomTime);
}

//chamando a função cactus
createcactus();
// crinado evento do clique da tecla espaço
document.addEventListener('keyup', handleKeyup)
// document.addEventListener('keyup',() =>{
//     console.log('pressionou uma tecla');
