var txt = document.getElementById("txt")
var a = document.getElementById("a")
var b = document.getElementById("b")
var c = document.getElementById("c")
var indexPerguntas = 0
var collectionPerguntas = [
    {questao: "1* Ao analisar um programa elaborado, o programador identificou que uma subrotina recebia um parâmetro X passado por referência. Portanto, ao ser chamada essa subrotina:", a: "a) Ao analisar um programa elaborado, o programador identificou que uma subrotina recebia um parâmetro X passado por referência. Portanto, ao ser chamada essa subrotina", b: "b) O endereço da variável original será passado como parâmetro, o que impedirá que a subrotina altere o valor de X e, por consequência, o valor da variável original.", c: "c) Uma cópia do valor da variável original é passada como parâmetro e, caso a subrotina altere o valor de X, o valor da variável original também será alterado. "},
    {questao: "2* Qual dos seguinte itens a seguir pode ser representado por um valor constante", a: "a) Salário de um Funcionário", b: "b) Valor de Pi", c: "c) Distância da Terra ao Sol"},
    {questao: "3* Qual a diferença entre os operadores lógicos E (AND) e OU (OR)", a: "a)  O operador AND retorna verdadeiro somente se todas as expressões de entrada forem verdadeiras, ao passo que o operador OR retorna falso se pelo menos uma das expressões de entrada for verdadeira", b: "b)  O operador AND retorna falso somente se todas as expressões de entrada forem verdadeiras, ao passo que o operador OR retorna falso se pelo menos uma das expressões de entrada for verdadeira", c: "c) O operador OR retorna verdadeiro somente se todas as expressões de entrada forem falsas, ao passo que o operador AND retorna verdadeiro se pelo menos uma das expressões de entrada for verdadeira"}
]
var collectionResposta = [
    {correta: "a) Ao analisar um programa elaborado, o programador identificou que uma subrotina recebia um parâmetro X passado por referência. Portanto, ao ser chamada essa subrotina" },
    {correta: "b) Valor de Pi"},
    {correta: "a)  O operador AND retorna verdadeiro somente se todas as expressões de entrada forem verdadeiras, ao passo que o operador OR retorna falso se pelo menos uma das expressões de entrada for verdadeira"}
]

function loaderPagina(index){
    txt.textContent = collectionPerguntas[index].questao
    a.textContent = collectionPerguntas[index].a
    b.textContent = collectionPerguntas[index].b
    c.textContent = collectionPerguntas[index].c


}
loaderPagina(indexPerguntas)

// a.addEventListener("click", function(){

//     alert("Meus parabéns, Sua resposta esta correta")
// })
// b.addEventListener("click", function(){

//     alert("Resposta errada")
// })
// c.addEventListener("click", function(){

//     alert("Resposta errada")
// })
function next(){
    indexPerguntas++
    loaderPagina(indexPerguntas)
   desbloquear()
}
function bloquear(){
    a.classList.add("bloqueado")
    b.classList.add("bloqueado")
    c.classList.add("bloqueado")
}
function desbloquear(){
    a.classList.remove("bloqueado")
    b.classList.remove("bloqueado")
    c.classList.remove("bloqueado")
}
function verificarAcerto(resposta){
    bloquear()
    let numeroDaQuestao = indexPerguntas
    let respostaEscolhida = resposta.textContent
    let certa = collectionResposta[numeroDaQuestao].correta
    console.log(resposta.textContent)
    console.log(collectionResposta[numeroDaQuestao].correta)
    if(respostaEscolhida == certa) {
        alert(`Yeah, Você acertou!!! \u{1F973}`)

    } else {
        alert(`Ohh no, Você Errou!!! \u{1F62D}`)
       
    }
    
}
// function verificação(){
//     if()
// }
// function typewrite(element){
//     element.innerText.split("")
//     element.innerHTML = ""
//     textArray.forEach((letra, i) => {
//         setTimeout(function(){
//             element.innerHTML += letra;
//         }, 75 * i)
//     });
// }
// typewrite(txt);