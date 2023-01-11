const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
	name:{
		type: String,
		required: [true, "Name is required"]
	},
	product:{
		type: String,
		required: [true, "Product is required"]
	},
	price:{
		type: Number,
		required: [true, "Price is required"]
	},
	isActive:{
		type: Boolean,
		default: true
	},
	placedOn: {
		type: Date,
		default: new Date()
	},
	status: {
		type: String,
		default: "Order Placed"
	}
})

module.exports = mongoose.model("Order", orderSchema);
 