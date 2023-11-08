// OBJETOS

const animal={
    nombre:'Felix',
    especie:'gato',
    edad:'4',
    comer(){
        console.log(`${animal.nombre} come`)
        console.log(`${this.nombre} come`)
    }
}

console.log(animal.comer())