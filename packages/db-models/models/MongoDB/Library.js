'use strict';
module.exports = mongoose => {
  const newSchema = new mongoose.Schema({
    logo: {
      type: String
    },
    name: {
      type: String
    },
    description: {
      type: String
    },
    type: {
      type: String,
      enum: ['component', 'template', 'scenario']
    },
    data: {
      type: Object
    }
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
    minimize: false
  });
  const Library = mongoose.model('Library', newSchema); // Change variable name to "Library"
  return Library;
};