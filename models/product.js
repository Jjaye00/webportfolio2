const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
	name:{
		type: String,
		required: [true, "Name is required"]
	},
	description:{
		type: String,
		required: [true, "Description is required"]
	},
	price:{
		type: Number,
		required: [true, "Price is required"]
	},
	isActive:{
		type: Boolean,
		default: true
	},
	createdOn: {
		type: Date,
		default: new Date()
	},
	purchase : [
		{
			userId: {
				type: String,
				required: [true, "UserId is requred"]
			},
			purchasedOn :{
				type: Date,
				default: new Date()
			}
			/*
			productId: {
				type: String,
				required: [true, "productId is empty"]
			},
			quantity: {
				type: Number,
				required: [true, "quantity is empty"]
			}
			*/
		} 
	]
})


module.exports = mongoose.model("Product", courseSchema);
