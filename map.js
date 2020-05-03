/**
 * Map
 * Retorna um novo array com a mesma quantidade de elementos
 * que o array inicial
 */

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
 * Com o Map é possivel retornar apenas uma caracteristica do objeto dentro de um array
 * Como no exemplo abaixo, iremos retornar apenas o nome dos elementos do array pets,
 * em um novo array de mesmo tamanho
 */
const petNames = pets.map((pet) =>{
    return pet.name
})
console.log(petNames);