const pets = [
    {
        name:'rex',
        type: 'dog',
        age: 10
    },
    {
        name:'miau',
        type:'cat',
        age: 2        
    },
    {
        name:'gulp',
        type:'fish',
        age: 1
    }
]

/*const newPets = pets.filter((pets) => {
    return pets.age < 5
})*/
 const menorIdade = (idade) => {
     return idade < 5
 }

 const newPets = pets.filter(({age}) => menorIdade(age));

console.log(pets)
console.log(newPets)