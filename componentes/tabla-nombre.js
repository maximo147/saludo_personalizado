const fs = require('fs');


const menu = (nombre, anios, pais, listar) => {
    return new Promise((resolve, reject) =>{
        const salida = `Hola me llamo ${nombre} tengo ${anios} años y vivo en ${pais}.`
        fs.writeFileSync(`./files/Archivo_${nombre}_${anios}_${pais}.txt`, salida)         
        if(listar){
            console.clear()
            console.log("===================================".red)
            console.log("     SALUDO PERSONALIZADOS")
            console.log("===================================".blue)
            
        }
        resolve(`Archivo_${nombre}_${anios}_${pais}.txt`)
    })
}

module.exports = {
    menu
}