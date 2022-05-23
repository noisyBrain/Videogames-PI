const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getAll } = require('../controllers/videogamesController.js');
const router = Router();

// para /videogames recordar eliminar la funcion crear() que está de prueba. Está en el index del root exportada en el module exports. Cuando la elimine, va a quedar getAll sola, por lo tanto recordar sacarle los curly brackets
router.use('/videogames', getAll); // me voy a traer  todo lo que venga desde la api y desde la db


module.exports = router
