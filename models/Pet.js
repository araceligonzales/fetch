const { User } = require('sequelize')
const sequelize = require('../config/connection')

class Pet extends Model {}

Pet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pet_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true
      }
    },
    pet_age: {
      type: Datatypes.INTEGER,
      allowNull: false
    },
    pet_type: {
      type: Datatypes.STRING,
      allowNull: false
    },
    pet_traits: {
      type: Datatypes.STRING,
      allowNull: false
    },
    pet_bio: {
      type: Datatypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    owner_id: {
      type: Datatypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'pet'
  }
)

module.exports = Pet

