import server from './server'
import colors from 'colors'

const port = process.env.PORT || 4000;

server.listen(port, ()=> {
    console.log(colors.cyan.bold(`REST API funcionando en el puerto ${port}`))
} );

const app = require('express')();

app.get('/', (req , res) => res.json({mensaje : 'test de pagina'}));