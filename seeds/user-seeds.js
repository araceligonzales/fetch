const sequelize = require('../config/connection')
const { User } = require('../models')

const userdata = [
  {
    username: 'k',
    first_name: 'k',
    last_name: 'c',
    email: 'kc@s.com',
    password: 'abc',
    // location: '',
    // pet_type: '',
    // pet_name: '',
    // pet_age: '',
    // pet_traits: ''
  }
]

const seedUsers = () => User.bulkCreate(userdata)
// Change to User.bulkCreate(userdata, {individualHooks: true}); once encrypted passwords have been added


module.exports = seedUsers