let tela1 = document.querySelector('.tela-1');
let tela2 = document.querySelector('.tela-2');
let tela3 = document.querySelector('.tela-3');
let tela4 = document.querySelector('.tela-4');

let avancar = document.querySelectorAll('.tela .avancar');
avancar.forEach((botao, index) =>{
    botao.addEventListener('click', () =>{
        if(index === 0){
            tela1.classList.add('esconder');
            tela2.classList.remove('esconder');
            
        }else if(index === 1){
            tela2.classList.add('esconder');
            tela3.classList.remove('esconder');
        }else if(index === 2){
            tela3.classList.add('esconder');
            tela4.classList.remove('esconder');
        }
    })
})

let voltar = document.querySelectorAll('.tela .voltar');

voltar.forEach((botao, index) =>{
    botao.addEventListener('click', () =>{
        if(index === 3){
            tela4.classList.add('esconder')
            tela3.classList.remove('esconder')
        }else if(index === 2){
            tela3.classList.add('esconder');
            tela2.classList.remove('esconder')
        }else if(index === 1){
            tela2.classList.add('esconder');
            tela1.classList.remove('esconder')
        }
    })
})

console.log(voltar)