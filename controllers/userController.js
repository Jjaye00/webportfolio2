const User = require("../models/User.js");
const Product = require('../models/Product.js');
const Order = require('../models/Order.js');
const bcrypt = require("bcrypt");
const auth = require("../auth.js");

module.exports.checkEmailExist = (reqBody) => {

	// ".find" - a mongoose crud operation (query) to find a field value from a collection
	return User.find({email: reqBody.email }).then(result => {
		// condition if there is an exsiting  user
		if(result.length > 0){
			return true;
		}
		// condition if there is no existing user
		else
		{
			return false;
		}
	})
}

module.exports.registerUser = (reqBody) => {
	let newUser = new User({
		firstName: reqBody.firstName,
		lastName: reqBody.lastName,
		email: reqBody.email,
		password: bcrypt.hashSync(reqBody.password, 10),
		
	})

	return newUser.save().then((user, error) => {
		if(error){
			return false;
		}
		else{
			return true;
		}
	})
}

module.exports.loginUser = (reqBody) => {
	return User.findOne({email : reqBody.email}).then(result =>{
		if(result == null){
			return false;
		}
		else{
			const isPasswordCorrect = bcrypt.compareSync(reqBody.password, result.password);

			if(isPasswordCorrect){
				return {access: auth.createAccessToken(result)};
			}
			else{
				return false;
			}
		}
	})
}

 // Set account to admin 

module.exports.setAdmin= (userId, newContent) => {
	return User.findById(userId).then((result, error) => {
		if(error) {
			console.log(error);
			return false;
		}

		result.isAdmin = newContent.isAdmin;

		return result.save().then((setAdmin, saveErr) =>{
			if (saveErr){
				console.log(saveErr);
				return false
			}
			else {
				return "Success! Your account now has admin access.♥"
			}

		})
	})
}




//retrieve user details

module.exports.retrieveUser = (userId) => {
	return User.findById(userId).then((details, err) => {
		if(err){
			console.log(err);
			return false;
		}
		else{
			details.password = '*****';
			return details;
		}
	})
};

