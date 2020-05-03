const pets = [
    {
        type: 'dog',
        name: 'bolinha',
        age: 15,
        weight: 30
    },
    {
        type: 'cat',
        name: 'mingal',
        age: 6,
        weight: 2
    },
    {
        type: 'dog',
        name: 'rex',
        age: 4,
        weight: 5
    },
    {
        type: 'cat',
        name: 'marrom',
        age: 2,
        weight: 1
    },
    {
        type: 'fish',
        name: 'gulp',
        age: 1,
        weight: 0.01
    },
    {
        type: 'horse',
        name: 'pé de pano',
        age: 7,
        weight: 400
    }
]
/**
Reduce pode ser utilizado quando queremos iterar sobre um array e utilizar 
o valor de cada item para criar um objeto final baseado em alguma regra
No exemplo abaixo utilizamos para percorrer o array e retornar o total do peso
dos pets
*/
const totalWeight = pets.reduce((total, pet) =>{
  return total + pet.weight
}, 0) //valor inicial da variavel

console.log(totalWeight)
