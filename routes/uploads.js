const { Router } = require('express');
const { check } = require('express-validator');

const { cargarArchivo, mostrarImagen, actualizarImagenCloudinary } = require('../controllers/uploads');
const { validarArchivoSubir, validarCampos } = require('../middlewares');
const { coleccionesPermitidas } = require('../helpers');

const router = Router();

router.post('/', validarArchivoSubir, cargarArchivo);

router.put('/:coleccion/:id',[
    validarArchivoSubir,
    check('id', 'El id debe de ser de Mongo').isMongoId(),
    check('coleccion').custom( c =>  coleccionesPermitidas( c, ['usuarios', 'productos'] ) ),
    validarCampos
], actualizarImagenCloudinary);

router.get('/:coleccion/:id', [
    check('id', 'El id debe de ser de Mongo').isMongoId(),
    check('coleccion').custom( c =>  coleccionesPermitidas( c, ['usuarios', 'productos'] ) ),
    validarCampos
], mostrarImagen)

module.exports = router;