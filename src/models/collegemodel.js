// { name: { mandatory, unique, example iith}, fullName: {mandatory, example `Indian Institute of Technology, Hyderabad`}, logoLink: {mandatory}, isDeleted: {boolean, default: false} }

const mongoose = require("mongoose");


const collegeSchema = new mongoose.Schema({

    name: { type: String, required: "name is mandatory" , trim: true, unique: true, },

    fullName: { type: String,  trim: true,required: "fullName is mandatory " },

    logoLink: { type: String, required: true,trim:true },

    isDeleted: { type: Boolean, default: false },

}, { timestamps: true })

module.exports = mongoose.model('myCollege', collegeSchema)

