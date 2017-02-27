var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var recipeSchema = new Schema({
    title: String,
    description: String,
    images: [String],
    ingredients: [String]
});

var Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe