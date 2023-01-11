const express = require("express");  
const router = express.Router();
const productController = require("../controllers/productController.js");
const auth = require("../auth.js");

// Create a single course
/*router.post("/create", (req, res) => {
	courseController.addCourse(req.body).then(resultFromController => res.send(resultFromController))
})*/

// Add a product 
router.post("/create", auth.verify, (req, res) => {

const data = {
	product: req.body,
	isAdmin: auth.decode(req.headers.authorization).isAdmin
}

productController.addProduct(data).then(resultFromController => res.send(resultFromController));
});
// Create a Single Course END

// Get all products
router.get("/all", (req, res) => {
	productController.getAllProducts().then(resultFromController => res.send(resultFromController))
})


// Get all ACTIVE courses
router.get("/products", (req, res) => {
	productController.getActiveProducts().then(resultFromController => res.send(resultFromController))
})

//Get "SINGLE" product
router.get("/products/:productId", (req, res) => {
							// retrieves the id from the url
	productController.getProduct(req.params.productId).then(resultFromController => res.send(resultFromController))
})


// Update a  product
router.put("/:id/update", (req,res) => { 
	productController.updateProduct(req.params.id, req.body).then(result => res.send(result));
});




// Archiving a product


router.put("/:productId/archive", auth.verify,(req,res) =>{
	productController.archiveProduct(req.params.productId).then(resultFromController => {
		res.send(resultFromController)
	});
});





module.exports = router;