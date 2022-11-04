const fuiClicado = document.getElementById('calcular');

fuiClicado.addEventListener("click", (event) => {
    console.log(event)
    console.log(notasEnviadas())
} );

function notasEnviadas () {
    return "Notas enviadas com sucesso!"
}
