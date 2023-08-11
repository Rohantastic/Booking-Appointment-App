const express = require('express');
const controller = require('../controllers/user');
const router = express.Router();

router.get('/',controller.home);
router.get('/form',controller.form);
router.get('/get',controller.getUser);
router.post('/submit',controller.submitUser);
router.delete('/delete/:id',controller.deleteUser);



module.exports = router;