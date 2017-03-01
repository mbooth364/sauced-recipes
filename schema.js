var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var recipeSchema = new Schema({
    menu: {
        type: String,
        lowercase: true,
        enum: ["tapas", "big tastes", "small plates", "buffet"],
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: String,
    image: String,
    ingredients: [String]
});

var Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe