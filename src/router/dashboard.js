const route = require('express').Router();
const authenticateJWT = require('../utils/authenticateJWT');

route.get('/', authenticateJWT, async (req, res, next) => {
  // const { username, email, password } = req.body;

  try {
    res.send({hola:req.user})
  } catch (error) {
    const errorMessage = 'Error to create user';
    console.error(`${errorMessage}: `, error.message);
    next(new Error(errorMessage));
  }
});

module.exports = route;
