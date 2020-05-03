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
const dogs = pets.filter((pet) =>{
  return pet.type === 'dog'
})
const totalWeightDogs = dogs.reduce((total, pet) =>{
  return total + pet.weight
}, 0) //valor inicial da variavel
*/

//Encadeando
const totalWeightDogs = pets
  .filter((pet) =>{
    return pet.type === 'dog' 
  })
  .reduce((total, pet) =>{
    return total + pet.weight
  }, 0)
 console.log(totalWeightDogs)
