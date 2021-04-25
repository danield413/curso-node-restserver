const { Router } = require('express');
const { usuariosGet, usuariosPost, usuariosDelete, usuariosPut, usuariosPatch } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet);   

router.post('/', usuariosPost);   

router.put('/:id',usuariosPut);   

router.patch('/', usuariosPatch); 

router.delete('/', usuariosDelete);   


module.exports = router;