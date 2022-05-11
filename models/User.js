const { Model, Datatypes } = require('sequelize');
const sequelize = require("../config/connection")

class User extends Model {
  // need to add hashing for password
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