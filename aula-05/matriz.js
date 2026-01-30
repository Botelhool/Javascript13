let matriz =[
    [1,7,9],
    [2,6,8],
    [3,5,9]
]

for(let linha =0; linha < matriz.length; linha++){
    for(let coluna = 0; coluna < matriz.length; linha++){
        console.log(`matriz[${linha}][${coluna}]= ${matriz[linha][coluna]}`)
    }
}