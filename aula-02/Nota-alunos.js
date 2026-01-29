//ler notas
const leia = require("readline-sync")
const nome = leia.question("Digite o nome do aluno: ")
let nota1 = leia.questionFloat("Digite a nota do 1 bimestre: ")
let nota2 = leia.questionFloat("Digite a nota do 2 bimestre: ")
let nota3 = leia.questionFloat("Digite a nota do bimestre 3 : ")
let nota4 = leia.questionFloat("Digite a nota do 4 bimestre: ")
//calcular a media 
let media = (nota1 + nota2 + nota3 +nota4)/4


if(media>=7){
    console.log(`Parabens ${nome},você foi aprovado!!\n Média:${media.toFixed(2)}`)
}
else if (media>=5 && media<7){
    console.log(`Aluno : ${nome} ficou de exame!!\n Média:${media.toFixed(2)}`)
}

else{
   console.log(`Aluno: ${nome} ficou Reprovado. \n Média:${media.toFixed(2)}`) 
}

//exibir a média 