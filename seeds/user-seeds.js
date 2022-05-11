const sequelize = require('../config/connection')
const { User } = require('../models')

const userdata = [
  {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    location: '',
    pet_type: '',
    pet_age: '',
    pet_traits: ''
  }
]

const seedUsers = () => User.bulkCreate(userdata)
// Change to User.bulkCreate(userdata, {individualHooks: true}); once encrypted passwords have been added


module.exports = seedUsers