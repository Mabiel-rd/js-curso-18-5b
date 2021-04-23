

const description = {
    demand: true, //opcion obligatoria
    alias:'d', // -
    desc: 'Descripcion de la tarea a realizar'
}

const title = {
    demand: true, //Opcion obligatoria 
    alias: 't', // - 
    desc: 'titulo de la tarea a realizar - unico'
}

const completed = {
    alias: 'c',
    default: true, // Por default su valor es true
    desc: 'Marca como completar la tarea'
}
const erased = {
    alias: 'e',
    default: true, //Por default su valor es tru 
    desc: 'Borrar la tarea'

}
// Esta bandera sera obligaada para el comando create. 
const optionsCreate = {
    description,
    title
}

const optionsUpdate = {
    title, 
    completed
}
const optionsErase = {
    title,
    erased
}


module.exports = {
    optionsCreate,
    optionsUpdate,
    optionsErase
}