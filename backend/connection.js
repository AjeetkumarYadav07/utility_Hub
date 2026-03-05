
const mongoose  = require("mongoose");

async function mongoconnect(url){
    await mongoose.connect(url);
}


module.exports = {
    mongoconnect ,
}