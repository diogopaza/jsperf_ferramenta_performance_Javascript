let arrayTeste =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,
18,19,20,21,22,23,24,25,26,27,28,29,30]


//FOREACH
/*
    arrayTeste.forEach((num, index) =>{
       return arrayTeste[index] = num * 2

    })

//MAP
/*
let doubled = arrayTeste.map( num =>{
    return num * 2 
}) 
*/


//o map permite concatenar com outros metodos
let menor10 = arrayTeste.map( num => num * 2 ).filter(num => num <10)
console.log(menor10)
