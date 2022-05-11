const sequelize = require('../config/connection')
const { User } = require('../models')

const userdata = [
  {
    username: '',
    email: '',
    password: ''
  }
]

const seedUsers = () => User.bulkCreate(userdata)
// Change to User.bulkCreate(userdata, {individualHooks: true}); once encrypted passwords have been added


module.exports = seedUsers