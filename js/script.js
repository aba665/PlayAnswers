var txt = document.getElementById("txt")
var a = document.getElementById("a")
var b = document.getElementById("b")
var c = document.getElementById("c")
var proximo = document.getElementById("next")
var ponto = document.getElementById("ponto")
var q = document.getElementById("questao")
var totalacertos = document.getElementById("acertos")
var indexPerguntas = 0
var pontuacao = 0
var acertos = 0

var collectionPerguntas = [
    {questao: "1* Ao analisar um programa elaborado, o programador identificou que uma subrotina recebia um parâmetro X passado por referência. Portanto, ao ser chamada essa subrotina:", a: "a) O endereço da variável original será passado como parâmetro, possibilitando que, caso a subrotina altere o valor de X, o valor da variável original também seja alterado.", b: "b) O endereço da variável original será passado como parâmetro, o que impedirá que a subrotina altere o valor de X e, por consequência, o valor da variável original.", c: "c) Uma cópia do valor da variável original é passada como parâmetro e, caso a subrotina altere o valor de X, o valor da variável original também será alterado. ", identificador: "Questão: 1"},
    {questao: "2* Qual dos seguinte itens a seguir pode ser representado por um valor constante", a: "a) Salário de um Funcionário", b: "b) Valor de Pi", c: "c) Distância da Terra ao Sol",  identificador: "Questão: 2"},
    {questao: "3* Qual a diferença entre os operadores lógicos E (AND) e OU (OR)", a: "a)  O operador AND retorna verdadeiro somente se todas as expressões de entrada forem verdadeiras, ao passo que o operador OR retorna falso se pelo menos uma das expressões de entrada for verdadeira", b: "b)  O operador AND retorna falso somente se todas as expressões de entrada forem verdadeiras, ao passo que o operador OR retorna falso se pelo menos uma das expressões de entrada for verdadeira", c: "c) O operador OR retorna verdadeiro somente se todas as expressões de entrada forem falsas, ao passo que o operador AND retorna verdadeiro se pelo menos uma das expressões de entrada for verdadeira",  identificador: "Questão: 3"},
    {questao: "4* Quais são os operadores aritméticos", a: "a) =, +=, -=", b: "b) || , &&, !", c: "c) +, *, -, /, **",  identificador: "Questão: 4"},
    {questao: "5* O que é um requisito funcional", a: "a) Requisito funcional é como o sistema se comportará na fase de testes", b: "b) É toda necessidade que um sistema deve abranger, ou seja, deve fazer", c: "c) Requisito funcional é como um sistema abordará determinada necessidade",  identificador: "Questão: 5"},
    {questao: "6* O que é um 'SGDB'", a: "a) Um sistema de aplicação de testes", b: "b) Uma IDE", c: "c) Um sistema de gerenciamento de uma base de dados",  identificador: "Questão: 6"},
    {questao: "Ah é uma pena mais o nosso jogo chegou ao final, mas espero que você tenha se divertido", a: `Muito obrigado por ter joagado \u{1F601}`, b: " E até a", c: `próxima \u{1F590}`,  identificador: ""}
]
var collectionResposta = [
    {correta: "a) O endereço da variável original será passado como parâmetro, possibilitando que, caso a subrotina altere o valor de X, o valor da variável original também seja alterado." },
    {correta: "b) Valor de Pi"},
    {correta: "a)  O operador AND retorna verdadeiro somente se todas as expressões de entrada forem verdadeiras, ao passo que o operador OR retorna falso se pelo menos uma das expressões de entrada for verdadeira"},
    {correta: "c) +, *, -, /, **"},
    {correta: "b) É toda necessidade que um sistema deve abranger, ou seja, deve fazer"},
    {correta: "c) Um sistema de gerenciamento de uma base de dados"},
    {correta: ""}
]

function loaderPagina(index){
    txt.textContent = collectionPerguntas[index].questao
    a.textContent = collectionPerguntas[index].a
    b.textContent = collectionPerguntas[index].b
    c.textContent = collectionPerguntas[index].c
    q.textContent = collectionPerguntas[index].identificador
    ponto.textContent = pontuacao
    totalacertos.textContent = acertos
    
   
}
loaderPagina(indexPerguntas)

function next(){
    indexPerguntas++
    loaderPagina(indexPerguntas)
    desbloquear()

    if(indexPerguntas ==6){
        proximo.classList.add("bloqueado")   
    }
    
    
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
    if(respostaEscolhida == certa) {
       
        pontuacao += 10
        acertos += 1
    }
}