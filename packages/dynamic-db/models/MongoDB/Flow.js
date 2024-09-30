'use strict';
module.exports = mongoose => {
  const newSchema = new mongoose.Schema({
    project_id: {
      type: Number
    },
    version: {
      type: String
    },
    data: {
      type: Object, // Use "String" instead of "Text"
    },
    status: {
      type: String, // Use "String" instead of "Enumerator"
      enum: ['draft', 'published'], // Use "enum" for status values
      default: 'draft' // Set a default value if needed
    }
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
    minimize: false // Prevents Mongoose from stripping out empty objects
  });
  const Flow = mongoose.model('Flow', newSchema);
  return Flow;
};