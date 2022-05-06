const createProfile = require('./src/profile-template');
const express = require('express')

const app = express()


sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
