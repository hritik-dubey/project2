// Intern Model
// { name: {mandatory}, email: {mandatory, valid email, unique}, mobile: {mandatory, valid mobile number, unique}, collegeId: {ObjectId, ref to college model, isDeleted: {boolean, default: false}}
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const InternModel = new mongoose.Schema({
    name: {
        type: String, required: true, trim: true, //match: [/^[a-zA-Z]+$/, 'is invalid']
    },
    email: {
        type: String, required: true, trim: true, lowercase: true, unique: true
    },
    mobile:{
        type:Number,required:true,trim:true,unique:true
    },
    collegeId: {
                type: ObjectId, required: true, ref: "myCollege",
     },
     isDeleted: {  type: Boolean, default: false},
},{ timestamps: true })
module.exports = mongoose.model('InternModel', InternModel)