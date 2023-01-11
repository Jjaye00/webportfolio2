/*
	GitBash:
	npm init -y
	npm install express
	npm install mongoose
	npm install cors
	npm install bcrypt
	npm install jsonwebtoken
*/

// dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// routers
const userRoutes = require("./routes/userRoutes.js");
const productRoutes = require("./routes/productRoutes.js");
const orderRoutes = require("./routes/orderRoutes.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/users", userRoutes);
app.use("/product", productRoutes);
app.use("/orders", orderRoutes);

mongoose.connect("mongodb+srv://admin:admin@capstone.osui4cj.mongodb.net/e-commerce?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

mongoose.connection.once('open', () => console.log('Now connected to Ayson-Mongo DB Atlas.'));

app.listen(process.env.PORT || 4000, () => 
	{console.log(`API is now online on port ${process.env.PORT || 4000 }`)
}); 


