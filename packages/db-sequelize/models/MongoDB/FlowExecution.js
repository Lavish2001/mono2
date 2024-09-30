'use strict';
module.exports = mongoose => {
  const newSchema = new mongoose.Schema({
    project_id: {
      type: Number
    },
    session_id: {
      type: Number
    },
    visitor_id: {
      type: Number
    },
    session_id: {
      type: Number
    },
    scenario_stack: {
      type: Array, // Use "String" instead of "Text"
    },
    execution_data: {
      type: Object, // Use "String" instead of "Text"
    },
    waiting_for_action_response : {
      type: Object, // Use "String" instead of "Text"
    },
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
    minimize: false // Prevents Mongoose from stripping out empty objects
  });
  const FlowExecution = mongoose.model('FlowExecution', newSchema);
  return FlowExecution;
};