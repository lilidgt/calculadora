//adiciona número ou operador ao display
function appendCharacter(character) {
    const display = document.getElementById('display');
    //adiciona número ou operador ao final do texto no display
    display.value += character;
}

//limpa o display
function clearDisplay() {
    document.getElementById('display').value = '';
}

//apaga o último caracter do display
function deleteLast() {
    const display = document.getElementById('display');
    //remove o último caracter
    display.value = display.value.slice(0, -1);
}

//calcula a expressão no display
function calculate() {
    const display = document.getElementById('display');
    try {
        //eval() tenta interpretar o texto string como código javascript e retorna o resultado
        //parseFloat garante que operações como 0.1 + 0.2 sejam tratadas corretamente
        display.value = eval(display.value);
    }
    catch (error) {
        //se ocorrer um erro no try, o bloco catch captura e trata erros
        alert('Expressão inválida');
        clearDisplay();
    }
}
