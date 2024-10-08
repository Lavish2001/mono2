"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SlackIntegrationsSetting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SlackIntegrationsSetting.init(
    {
      project_id: DataTypes.INTEGER,
      slack_team_id : DataTypes.STRING,
      slack_app_id : DataTypes.STRING,
      access_token : DataTypes.STRING,
      app_id : DataTypes.STRING,
      loading_message : DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "SlackIntegrationsSetting",
      timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
      underscored: true,
    }
  );
  return SlackIntegrationsSetting;
};