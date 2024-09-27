const fs = require('fs');
const path = require('path');
const Mongoose = require('mongoose');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/database.js')[env]["mongodb"];

if (config.url) {
  Mongoose.connect(config.url, config.options);
} 
// else if (config.config.dbName) {
//   Mongoose.connect(`${config.protocol}://${config.username}:${config.password}@${config.host}:${config.port}`, config.options);
// } else {
//   Mongoose.connect(`${config.protocol}://${config.username}:${config.password}@${config.host}:${config.port}/${config.name}`, config.options);
//}

const db = () => {
  const m = {};

  fs
    .readdirSync(__dirname)
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
      const model = require(path.resolve(__dirname, file))(Mongoose);
      m[model.modelName] = model;
    });

  return m;
}


const models = db();
const mongoose = Mongoose;

module.exports = mongoose;
module.exports.default = models;