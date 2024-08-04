const mongoose = require("mongoose");

async function connecttomongoDB(url){
mongoose.connect(url)}

module.exports = {
    connecttomongoDB
}