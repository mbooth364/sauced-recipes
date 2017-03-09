var express = require("express");
var recipeRoute = express.Router();
var Recipe = require("../models/recipe");

recipeRoute.route("/")
.get(function(req, res) {
    Recipe.find(function(err, recipes) {
        if(err) return res.send.status(500).send(err);
        res.send(recipes);
    })
})

.post(function(req, res) {
    var recipe = new Recipe(req.body);
    recipe.save(function(err) {
        if(err) return res.send.status(500).send(err);
        res.status(201).send(recipe);
    })
});

recipeRoute.route("/:id")
.get(function(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        if(err) return res.status(500).send(err);
        res.send(recipe);
    })
})

.put(function(req, res) {
    Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, recipe) {
        if(err) return res.send.status(500).send(err);
        res.send(recipe);
    })
})

.delete(function(req, res) {
    Recipe.findByIdAndRemove(req.params.id, function(err, recipe) {
        if(err) return res.send.status(500).send(err);
        res.send({message: "Successfully deleted", recipeThatWasDeleted:recipe})
    })
})

module.exports = recipeRoute