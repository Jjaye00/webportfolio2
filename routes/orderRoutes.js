const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User.js");
const Order = require('../models/Order.js');
const bcrypt = require("bcrypt");
const orderController = require("../controllers/orderController.js");
const auth = require("../auth.js");
const router = express.Router();
// place an order 

router.post("/purchase", (req,res) => {
	orderController.placeOrder(req.body).then(result => res.send(result));
})

module.exports.getActiveProducts = () => {
	return Product.find({isActive:true}).then(result => {
			return result;
	})
}

// cancel order

router.put("/:id/cancel", (req,res) => { 
	orderController.cancelOrder(req.params.id, req.body).then(result => res.send(result));
});

module.exports = router;

// // Retrieve all customer's order(s)



router.get("/profile", (req,res) =>{

	orderController.goToProfile().then(resultFromController => res.send(resultFromController));
})
