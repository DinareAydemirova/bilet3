const mongoose = require("mongoose")

const menuSchema = mongoose.Schema({
  image:String,
	name: String,
	description: String,
  price:String
})

module.exports = mongoose.model("Menu", menuSchema)