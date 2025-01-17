const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name: { type: String, required: true },
    socialMediaHandle: { type: String, required: true ,unique:true},
    images: [{ type: String, required: true }],   
    submittedAt: { type: Date, default: Date.now },


});
module.exports = mongoose.model('user', userSchema);

