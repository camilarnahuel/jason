// OBJETOS

const animal={
    nombre:'Felix',
    especie:'gato',
    edad:'4',
    comer(){
        //console.log(`${animal.nombre} come`)
        console.log(`${this.nombre} come`)
    }
}

animal.comer();

// DOM (documento object model)
//document.getElementById('') por id
//document.querySelector('') #
//document.querySelectorAll('') [] lista
console.log(document.querySelectorAll('a').getAttribute('href'))
document.querySelectorAll('a').setAttribute('href','www.google.com')

/*seleccionar elementos*/
const $mi = document.querySelector('#clase')
$mi.computedStyleMap.setProperty('color','#FFFFF')

let text=`<p> bla bla</p>`