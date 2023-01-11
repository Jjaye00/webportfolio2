const mongoose = require("mongoose");
const Product = require('../models/Product');

// Add a product 

	module.exports.addProduct = (data) => {
		console.log(data.isAdmin) 

		if(data.isAdmin) {
			let newProduct = new Product({
				name: data.product.name,
				description: data.product.description,
				price: data.product.price
			});

			return newProduct.save().then((newProduct, error) => {
				if(error){
					return error
				}

				return newProduct 
			})
		};

		
		let message = Promise.resolve('User must be ADMIN to access this.')

		return message.then((value) => {
			return {value}
		})
  }; 
// Show all products


module.exports.getAllProducts = () => {
	return Product.find({}).then(result => {
		return result;
	})
}

// GET - all Active Products
module.exports.getActiveProducts = () => {
	return Product.find({isActive:true}).then(result => {
			return result;
	})
}

// GET - Retrieve single product
module.exports.getProduct = (productId) => {

	return Product.findById(productId).then(result => {
		return result;
	})
}

// Update a product
module.exports.updateProduct= (productId, newContent) => {
	return Product.findById(productId).then((result, error) => {
		if(error) {
			console.log(error);
			return false;
		}

		result.isActive = newContent.isActive;

		return result.save().then((updateProduct, saveErr) =>{
			if (saveErr){
				console.log(saveErr);
				return false
			}
			else {
				return updateProduct;
			}
		})

	})
}



// Archive Product
module.exports.archiveProduct = (productId) => {
		return Product.findByIdAndUpdate(productId, {
			isActive: false
		})
		.then((archiveProduct, error) => {
			if(error) {
				return false
			}

			return {
				message: "Product archived successfully!"
			}
		})
	};
 