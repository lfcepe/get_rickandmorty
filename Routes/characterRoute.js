const express = require('express');
const router = express.Router();
const { getPersonajeGuardado } = require('../Controllers/characterController');

router.get('/guardarpersonajes', getPersonajeGuardado);

module.exports = router;