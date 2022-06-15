const respostaElement = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const respostas = [
    "Não.",
    "Sim.",
    "Com certeza!",
    "Não tenho tanta certeza :(",
    "Será?",
    "Um passarinho me disse que sim",
    "Um passarinho me disse que não",
    "Pode apostar que não!",
    "Pode apostar que sim!",
    "Nem morto, meu chapa.",
    "Só pagando.",
    "Certamente que sim.",
    "K K K, coitado.",
    "Hmm... que tal perguntar outra coisa?",
]

// clicar em fazer pergunta
function fazerPergunta() {
    if(inputPergunta.value == "") {
        alert("E a pergunta?")
        return
    }

    const pergunta = "<div>" + inputPergunta.value + "</div>"

    // Gerar número aleatório
    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
    
    respostaElement.innerHTML = pergunta + respostas[numeroAleatorio]

    // Sumir a resposta depois de 3 segundos
    // setTimeout(function () {
    //    respostaElement.style.opacity = 0;
    //}, 3000)
}




