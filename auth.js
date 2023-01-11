const jwt = require("jsonwebtoken");
const secret = "CourseBookingAPI";

module.exports.createAccessToken = (user) =>{
	// payload
	const data = {
		id: user._id,
		email : user.email,
		isAdmin: user.isAdmin
	}
								 //callback function
	return jwt.sign(data, secret, {/*expiresIn : "60s"*/});
}

// To verify a token from the request (from postman)
module.exports.verify = (request, response, next) => {
	// Get JWT (JSON web Token) from postman
	let token = request.headers.authorization

	if(typeof token !== "undefined"){
		console.log(token);

		// remove first 7 characters ("Bearer ") from the token
		token = token.slice(7, token.length);

		return jwt.verify(token, secret, (error, data) =>{
			if(error){
				return response.send({
					auth: "Failed."
				})
			}
			else{
				next()
			}
		})
	}
	else{
		return null
	}
}

// To decode the user details from the token
module.exports.decode = (token) => {

	if(typeof token !== "undefined"){

		// remove first 7 characters ("Bearer ") from the token
		token = token.slice(7, token.length);
	}

	return jwt.verify(token, secret, (error, data) => {
		if(error){
			return null
		}
		else{
			return jwt.decode(token, {complete:true}).payload
		}
	})
}

// jwt parts
// header(alg,type)   payload     signature   
// abcdxqwertyuiasdlo.qwerujkasdl.poaaweamnan