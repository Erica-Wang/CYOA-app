const express = require('express');
const app = express();
const resultRoutes = express.Router();

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let models = require('./models');
let historyModel = models.history;
let resultModel = models.result;

resultRoutes.route('/').get(function (req,res){
	resultModel.find(function (err, results){
		if(err){
			console.log(err);
		}else{
			res.json(results);
		}
	});
});

resultRoutes.route('/finish').post(function (req,res){
	let thisHistory = new historyModel(req.body);
	thisHistory.save().then(
		his => {
			res.status(200);
		})
		.catch(err => {
			res.status(400);
		});

	console.log(thisHistory);

	if(req.body.is_alive){
		console.log('ALIVE');
		resultModel.findOne({'gender': req.body.gender}, function(err,result){
			if(!result){
				let thisResult = new resultModel({
					gender: req.body.gender,
					number_of_people_alive: 1,
					people_alive: [req.body.name]
				});

				thisResult.save().then(
					res => {
						res.status(200);
					})
					.catch(err => {
						res.status(400);
					}
				);
			}else{
				result.number_of_people_alive++;
				result.people_alive.push(req.body.name);

				result.save().then(business => {
					res.json('Update complete');
				}).catch(err => {
					res.status(400).send('Unable to update database');
				})
			}
		});
	}	

});

module.exports = resultRoutes;