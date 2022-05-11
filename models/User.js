const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model {
  // need to add hashing for password
  // checkpassword(loginPW) {
  //   return bcrypt.compareSync(loginPW, this.password);
  // }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlphanumeric: true,
      },
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
      },
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlphanumeric: true,
      },
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
    pet_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pet_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
      },
    },
    pet_age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    pet_traits: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },

    // pet_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'pet',
    //     key: 'id'
    //   }
    // },
  },
  {
    // hooks: {
    //   // password hooks
    //   async beforeCreate(newUserData) {
    //     newUserData.password = await bcrypt.hash(newUserData.password, 10);
    //     return newUserData;
    //   },

    //   async beforeUpdate(updatedUserData) {
    //     updatedUserData.password = await bcrypt.hash(
    //       updatedUserData.password,
    //       10
    //     );
    //     return updatedUserData;
    //   },
    // },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
