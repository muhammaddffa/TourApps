const express = require('express');

const {createUser, getAllUser, getUserById} = require('../controllers/userController');

const router = express.Router();


router.post("/", createUser);

router.get('/:id', getUserById);

router.get("/", getAllUser);

module.exports = router;