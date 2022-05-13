const User = require('./User')
const Pet = require('./Pet')


// will use if pet model used
// User
// User.hasMany(Pet, {
//   foreignKey: 'pet_id'
// })

// User.belongsTo(Pet, {
//   foreignKey: 'user_id'
// })

// // Pet
// Pet.hasMany(User, {
//   foreignKey: 'user_id'
// })

// Pet.belongsTo(User, {
//   foreignKey: 'pet_id'
// })

module.exports = { User, Pet }