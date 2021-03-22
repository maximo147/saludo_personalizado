const yargs = require('./config/yargs');
const { menu } = require('./componentes/tabla-nombre')
require('colors')


console.log(yargs.n)

menu(yargs.n, yargs.a, yargs.p, yargs.l)
    .then(x => console.log(x, 'creado'.rainbow))
    .catch(x => console.log(x))




