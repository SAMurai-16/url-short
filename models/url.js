const mongoose = require("mongoose")
const urlSchema = new mongoose.Schema({
    shortId :{
        type:String,
        required:true,
        unique:true,

    },
    RedirectURL :{
        type:String,
        required:true,
    },
    visithistory:[{timestamp:{type:Number}}],

},
{timestamps:true}
)

const URL = mongoose.model('url',urlSchema)
module.exports = URL;
