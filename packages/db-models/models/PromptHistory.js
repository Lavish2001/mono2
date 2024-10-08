"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PromptHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PromptHistory.init(
    {
        project_id: DataTypes.INTEGER,
        name : DataTypes.STRING
    },
    {
      sequelize,
      modelName: "PromptHistory",
      tableName : 'llmspark_prompt_histories',
      timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
      underscored: true,
    }
  );
  return PromptHistory;
};