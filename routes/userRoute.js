//same as productRoutes.js
const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userController');

router.post('/', userControllers.createUser);

router.get('/', userControllers.getAllUsers);

router.get('/:id', userControllers.getUserById);

router.put('/:id', userControllers.updateUser);

router.delete('/:id', userControllers.deleteUser);
