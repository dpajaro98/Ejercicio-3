// - Una cadena de texto que se llame "estudiante" 
//concatenando tu Nombre y tu Apellido con un espacio entre medias

// - Una cadena de texto que se llame "estudianteMayus" 
//que contenga la cadena estudiante pero todo en mayúsculas

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

// - Una variable que contenga el número de letras de la cadena "estudiante" 
//contando los espacios

// - Una variable que contenga la primera letra del Nombre

// - Otra variable que contenga la última letra del Apellido

// - Una cadena de texto que elimine los espacios de la variable "estudiante"

// - Una variable booleana que diga si el Nombre está contenido en la 
//variable "estudiante"

let nombre="Darien Rafael"
let apellido="Pajaro Miranda"
let estudiante=`${nombre} ${apellido}`
let estudianteMayus=estudiante.toUpperCase()
let estudianteMinus=estudiante.toLowerCase()
let numLetras=estudiante.length
let Plnombre=estudiante.slice(0,1)
let Ulapellido=estudiante.slice(27,28)
let delSpace=estudiante.replace(/ /g,'')

if (nombre==estudiante){
    let vari=true
    console.log(vari)

}else{
    console.log("uy pana")
}

