var mongoose = require('mongoose');

var SearchHistorySchema = mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  created: {type: Date, required: true, default: Date.now},
  searchString: {type: String, required: true},
});

module.exports = mongoose.model('SearchHistory', SearchHistorySchema);