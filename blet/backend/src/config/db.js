
const mongoose = require("mongoose") // new

// Connect to MongoDB database
mongoose
	.connect("mongodb+srv://dinaraaydamirova:dinara12345@cluster1.o6ywqda.mongodb.net/nemu?retryWrites=true&w=majority&appName=Cluster1")
	.then(() => {
	  console.log("db connect");
	}).catch((error)=>console.log(error))