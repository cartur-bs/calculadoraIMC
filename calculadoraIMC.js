const calcular = () => {

    let peso = parseInt(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let output1 = document.getElementById('output');

    let resultado = parseInt(peso / (altura * altura));
    document.getElementById('output').innerHTML = resultado;

}

const limpar = () => {
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
}

