"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class VisitorData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  VisitorData.init(
    {
      visitor_id     : DataTypes.INTEGER,
      key      : DataTypes.STRING,
      value       : DataTypes.STRING
    },
    {
      sequelize,
      modelName: "VisitorData",
      timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
      underscored: true,
    }
  );
  return VisitorData;
};