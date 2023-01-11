const User = require("../models/User.js");
const Product = require('../models/Product.js');
const Order = require('../models/Order.js');
const bcrypt = require("bcrypt");
const auth = require("../auth.js");
const mongoose = require("mongoose");


// Place an order (non-admin)

module.exports.placeOrder = (requestBody) => {
	let newOrder = new Order({
		name : requestBody.name,
		product : requestBody.product,
		price : requestBody.price
	})

	return newOrder.save().then((order, error) => {
		if(error) {
			console.log(error);
			return "Error detected";
		}
		else {
			return "Thank you for placing an order!";
		}
	})
}

// cancel order 


module.exports.cancelOrder= (orderId, newContent) => {
	return Order.findById(orderId).then((result, error) => {
		if(error) {
			console.log(error);
			return false;
		}

		result.status = newContent.status;

		return result.save().then((setOrder, saveErr) =>{
			if (saveErr){
				console.log(saveErr);
				return false
			}
			else {
				return setOrder;
			}

		})
	})
}

// Retrieve all customer's order(s)

module.exports.goToProfile = () => {
	return Order.find({}).then(result =>{
		return result; 
	})
}
