

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	
	email : {
		type : String,
		required : [true, "Email is required"]
	},
	password : {
		type : String,
		required : [true, "Password is required"]
	},
	isAdmin : {
		type : Boolean,
		default : false
	},
	
	orders : [

			{
			productId: {
				type: String,
				required: [true, "productId is empty"]
			},
			purchasedOn :{
				type: Date,
				default: new Date()
			},
			status : {
				type : String,
				default : "Purchased"
			}


		}],
	
		/* 
		totalAmount: {
			type: Number
		},
		purchasedOn : {
			type: Date,
			default: new Date()
		}

		*/

	})


module.exports = mongoose.model("User", userSchema);
