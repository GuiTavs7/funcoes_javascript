// 1) FUNÇÕES SEM PARÂMETROS

/* 
   function nomeDaFuncao(){
      <bloco de execução>
   }

   nomeDaFuncao()

*/

function incentivarQuester(){
    alert("Muito bem, você chegou ao JS, continue assim!");
}

incentivarQuester();

// 2) FUNÇÕES COM PARÂMETROS - PODEM SER ARMAZENADOS EM VARIÁVEIS

/* 
   function nomeDaFuncao(parametro1, parametro2){
      <bloco de execução>
   }

   nomeDaFuncao(parametro1, parametro2)

*/

function soma(numero1, numero2){
    return numero1 + numero2;
}

let resultadoDaSoma = soma(1, 3);
console.log(resultadoDaSoma); // 4

resultadoDaSoma = soma(resultadoDaSoma, 10);
console.log(resultadoDaSoma); // 14

// 3) DEFININDO VALORES DEFAULT - SEMPRE SERÃO UTILIZADOS QUANDO NÃO PASSARMOS PARÂMETROS!

function incentivarQuesterPeloNome(nomeQuester = "Quester"){
    alert("Muito bem " + nomeQuester + ", você chegou ao JS, continue assim!")
}

incentivarQuesterPeloNome("Roberto");

incentivarQuesterPeloNome();
