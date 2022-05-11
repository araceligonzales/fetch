const { Model, Datatypes, INTEGER, DataTypes } = require('sequelize');
const sequelize = require("../config/connection")
const bcrypt = require('bcrypt')

class User extends Model {
  // need to add hashing for password
  checkpassword(loginPW) {
    return bcrypt.compareSync(loginPW, this.password)
  } 
}

User.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: Datatypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlphanumeric: true
      }
    },
    first_name: {
      type: Datatypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true
      }
    },
    last_name: {
      type: Datatypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlphanumeric: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4],
      },
    },
    // could use a location library to match users within 50 mi
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Should split table for cleaner code
    // Split after MVP created
    pet_name: {
      type: Datatypes.STRING,
      allowNull: false,
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
    }
  },
  {
    hooks: {
      // password hooks
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
)

module.exports = User