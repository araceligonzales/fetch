const router = require('express').Router()
const { User } = require('../../models')

router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password']}
  })
    .then(dbUserData => {
      
    }) 
})

module.exports = router;