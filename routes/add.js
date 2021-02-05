var data = require("../data.json");

exports.addFriend = function(request, response) {   
	// Your code goes here
	const friendName = request.query.name;
	const friendDescription = request.query.description;
	const friendProfile = "http://lorempixel.com/400/400/people";
	const friendToAdd = {
		"name": friendName,
		"description": friendDescription,
		"imageURL": friendProfile
	}
	console.log(friendToAdd);
	data.friends.push(friendToAdd);
	response.render('index', data);
}