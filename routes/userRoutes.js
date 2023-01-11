// dependencies
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");
const auth = require("../auth.js");

router.post("/checkEmail", (req, res) => {
	userController.checkEmailExist(req.body).then(resultFromController => res.send(resultFromController))
});

router.post("/register", (req, res) => {
	userController.registerUser(req.body).then(resultFromController => res.send(resultFromController))
})


router.post("/registerAdmin", (req, res) => {
	userController.registerAdmin(req.body).then(resultFromController => res.send(resultFromController))
})

router.post("/login", (req, res) => {
	userController.loginUser(req.body).then(resultFromController => res.send(resultFromController))
});


///////

router.post("/:id", (req, res) => {
	userController.registerUser(req.body).then(resultFromController => res.send(resultFromController))
})

// Set user as admin 
router.put("/:id/admin", (req,res) => { 
	userController.setAdmin(req.params.id, req.body).then(result => res.send(result));
});

//retrieve user 

router.get("/retrieve/:id", (req, res) => {
	userController.retrieveUser(req.params.id).then(result => res.send(result))
});


module.exports = router;
