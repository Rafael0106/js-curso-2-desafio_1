let horaDesafio = document.querySelector('h1');
horaDesafio.innerHTML = 'Hora do Desafio';

function buttonConsole() {
    console.log('O botão foi clicado');
}

function buttonAlert() {
    alert('Eu amo JS');
}

function buttonPrompt() {
    let cidade = prompt('Fale um nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você.`)
}

function buttonSoma(){
    let num1 = parseInt(prompt('Escolha o primeiro número.'));
    let num2 = parseInt(prompt('Escolha o segundo número'));
    let numSoma = num1 + num2;
    alert(`Soma: ${numSoma}`);
}