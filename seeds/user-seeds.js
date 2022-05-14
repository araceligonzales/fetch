const sequelize = require('../config/connection')
const { User } = require('../models')

const userdata = [
  {
    username: 'jacqueline',
    first_name: 'Jackqueline',
    last_name: 'S',
    email: 'hfdskjh',
    password: '',
    location: '',
    pet_type: '',
    pet_name: '',
    pet_age: 2,
    pet_traits: ''
  },
  {
    username: 'rob',
    first_name: 'Rob',
    last_name: 'B',
    email: '',
    password: '',
    location: '',
    pet_type: '',
    pet_name: '',
    pet_age: 1,
    pet_traits: ''
  },
  {
    username: 'alice',
    first_name: 'Alice',
    last_name: 'B',
    email: '',
    password: '',
    location: '',
    pet_type: '',
    pet_name: '',
    pet_age: 3,
    pet_traits: ''
  }
]

const seedUsers = () => User.bulkCreate(userdata)
// Change to User.bulkCreate(userdata, {individualHooks: true}); once encrypted passwords have been added


module.exports = seedUsers