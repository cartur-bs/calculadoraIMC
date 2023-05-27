const calcular = () => {

    let peso = parseInt(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let output1 = document.getElementById('output');

    let resultado = parseInt(peso / (altura * altura));
    document.getElementById('output').innerHTML = resultado;

    const resultadoIMC = document.querySelector('.resultadoIMC');

    if(resultado < 18.5){
        resultadoIMC.innerHTML = 'Seu IMC indica que você está abaixo do peso.' 
    }
    if( resultado > 18.5 && resultado < 24.9){
        resultadoIMC.innerHTML = 'Seu IMC indica que você está no peso ideal, continue assim!' 
    }
    if( resultado > 25 && resultado < 29.9){
        resultadoIMC.innerHTML = 'Seu IMC indica que você apresenta sobrepeso.' 
    }
    if( resultado > 30){
        resultadoIMC.innerHTML = 'Seu IMC indica que você apresenta obesidade.' 
    }
}

const limpar = () => {
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('output').innerHTML= '';
    document.querySelector('.resultadoIMC').innerHTML = '';
}

