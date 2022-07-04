

 
const resultado = document.getElementById('resultado')


function imc(){
    const  nome = document.getElementById('nome').value
    const  altura = document.getElementById('altura').value
    const  peso = document.getElementById('peso').value
    const calcular = document.getElementById('calcular')

    if (nome!== '' && altura !== '' && peso !== ''){

        const valorImc = (peso/ (altura*altura)).toFixed(1);

        resultado.textContent = valorImc

        let classificacao

        if(valorImc < 18.5){
            classificacao = 'abaixo do peso'
            
        }
        else if (valorImc < 25){
            classificacao = 'com peso ideal'

        }

        resultado.textContent = `${nome} seu IMC é ${valorImc} e você está ${classificacao}`


    }else{
        resultado.textContent = 'Preencha todos os campos'
    }
    


    
}



calcular.addEventListener('click',imc);

