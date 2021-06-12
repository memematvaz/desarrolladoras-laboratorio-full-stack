var express = require('express');
var router = express.Router();
var users_controller = require('../controllers/usersController');
const { check } = require('express-validator');

const valid_user = [
    check('name', 'El nombre indicado debe tener al menos 3 caracteres y no puede incluir números')
        .isLength({ min: 3 })
        .isAlpha(locale = 'es-ES', { ignore: '- /' }),
    check('surname', 'Los apellidos indicados debe tener al menos 3 caracteres y no pueden incluir números')
        .isLength({ min: 3 })
        .isAlpha(locale = 'es-ES', { ignore: '- /' }),
    check('age', 'La edad indicada debe estar comprendida entre 0 y 125')
        .isFloat({ min: 0, max: 125 }),
    check('dni', 'El dni indicado debe contener 9 caracteres alfanuméricos')
        .isLength({ min: 9, max: 9 })
        .isAlphanumeric(),
    check('birthday', 'El cumpleaños indicado debe especificarse en formato aaaa-mm-dd')
        .isISO8601(),
    check('color', 'El color favorito indicado debe tener al menos 3 caracteres y no puede incluir números')
        .isLength({ min: 3 })
        .isAlpha(locale = 'es-ES', { ignore: '- /' }),
    check('gender', 'El sexo indicado debe ser uno de los siguientes: Hombre, Mujer, Otro, No especificado')
        .isIn(['Hombre', 'Mujer', 'Otro', 'No especificado'])
  ];

router.get('/', users_controller.users_list);

router.post('/', valid_user, users_controller.users_create);

router.put('/:id', valid_user, users_controller.users_update_one);

router.delete('/:id', users_controller.users_delete_one);

module.exports = router;
