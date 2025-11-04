const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando foi desenvolvido a primeira copa do mundo?",
        alternativas: [
            {
                texto: " 13 de julho de 1930, no uruguai.",
                afirmacao: " criada em 1930 no uruguai. ",
            },
            {
                texto: " criada  13 de julho de 1934, no méxico. ",
                afirmacao: " criada no dia 13 de julho. ",
            }
        ]
    },
    {
        enunciado: " Qual era o nome da taça antiga?",
        alternativas: [
            {
                texto: " Até 1970, o troféu era conhecido como Taça Jules Rimet.  ",
                afirmacao: " Criador da Copa Jules Rimet. ",
            },
            {
                texto: " Taça das Nações Unidas ",
                afirmacao: " Liga das Nações da UEFA ",
            }
        ]
    },
    {
        enunciado: " Qual país foi o anfitrião da Copa do Mundo de 2014? ",
        alternativas: [
            {
                texto: " Brasil ",
                afirmacao: " O Brasil sediou a Copa do Mundo de 2014. ",
            },
            {
                texto: " Argentina ",
                afirmacao: " A Argentina sediou a Copa do Mundo de 2014. ",
            }
        ]
    },
    {
        enunciado: " Qual país sediou a Copa do Mundo de 2022? ",
        alternativas: [
            {
                texto: " Catar   ",
                afirmacao: " O Catar sediou a Copa do Mundo de 2022. ",
            },
            {
                texto: " Russia   ",
                afirmacao: " O Russia sediou a Copa do Mundo de 2022. ",
            }
        ]
    },
    {
        enunciado: " Quantos títulos o Brasil tem na Copa do Mundo?   ",
        alternativas: [
            {
                texto: " 5 Titulos ",
                afirmacao: "O Brasil é o país com mais títulos, tendo vencido a Copa do Mundo 5 vezes. ",
            },
            {
                texto: " 4 Titulos ",
                afirmacao: " O Brasil é o país com mais títulos, tendo vencido a Copa do Mundo 4 vezes. ",
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPergunta(){

    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    } 
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Se fosse possível traduzir sua forma de aprender em palavras, diríamos que...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();