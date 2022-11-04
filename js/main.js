const resultStr = document.getElementById('text');
const fuiClicado = document.getElementById('calcular');
const resultNum = document.getElementById('contar');
let count = 0;

fuiClicado.addEventListener("click", () => {
    let msg = "Fuic clicado: "
    resultStr.innerText = msg
    count++;
    let qtd = count > 1 ? 'vezes' : 'vez';
    resultNum.innerText = `${count} ${qtd}`;
} );
