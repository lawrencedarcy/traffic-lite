const mongoose = require('./db');
const Schema = mongoose.Schema;

const topicSchema = new Schema({
  
  title: {type: String, default: 0},
  timestamp: Number,
  votes: Number
  
});

const Topic = mongoose.model('Topic', topicSchema);
module.exports = Topic;