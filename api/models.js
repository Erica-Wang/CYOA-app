const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let historySchema = new Schema({
  name: String,
  gender: String,
  failed_question: Number,
  is_alive: Boolean
},{
	collection: 'history'
});

let resultSchema = new Schema({
  gender: String,
  number_of_people_alive: Number,
  people_alive: [String]
},{
	collection: 'result'
});

let historyModel = mongoose.model('history', historySchema);
let resultModel = mongoose.model('result', resultSchema);

module.exports = 
{
	result: resultModel,
	history: historyModel
};