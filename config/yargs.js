const yargs = require('yargs')
                .options({
                    'n':{
                        alias: 'name',
                        demandOption: true,
                        type: 'string',
                        defaultValue: 'Rex'
                    },
                    'a':{
                        alias: 'anionacimiento',
                        demandOption: true,
                        type: 'number',
                        defaultValue: 2000
                    },
                    'p':{
                        alias: 'pais',
                        demandOption: true,
                        type: 'string',
                        default: 'Perú'
                    },
                    'l':{
                        alias: 'listar',
                        demandOption: false,
                        type: 'boolean',
                        default: false
                    }
                })
                .check((argv, options) => {
                    if((argv.n === '')){
                        throw 'Nombre vacio'
                    }else{
                        return true
                    }
                })
                .argv
module.exports = yargs