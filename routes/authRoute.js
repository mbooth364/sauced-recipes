var express = require("express");
var authRoute = express.Router();
var User = require("../models/user");
var jwt = require("jsonwebtoken");
var config = require("../config");

authRoute.post("/signup", function(req, res) {
    User.find({email:req.body.email}, function(err, existingUser) {
        if(err) return res.status(500).send(err);
        if(existingUser.length) return res.send({success: false, message:"email is already taken"});
        
        var newUser = new User(req.body);
        newUser.save(function(err) {
            if(err) return res.status(500).send(err);
            res.status(201).send({success: true, message: "Successfully created a new user"})
        });
    });
});

authRoute.post("/login", function(req, res) {
    User.findOne({email: req.body.email}, function(err, user) {
        if(err) return res.status(500).send(err);
        if(!user) {
            return res.status(401).send({success: false, message:"Invalid email or pasword"})
        }
        user.checkPassword(req.body.password, function(err, isMatch) {
            if(err) return res.status(403).send(err);
            if(!isMatch) return res.status(403).send({success: false, message:"Invalid email or password"})
            var token = jwt.sign(user.toObject(), config.secret, {expiresIn: "24h"});
            res.send({token: token, success: true, user: user.withoutPassword(), message:"heres your token"});
        });
    });
});

module.exports = authRoute;