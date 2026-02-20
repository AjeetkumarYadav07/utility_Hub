// mongodb+srv://ajeetchoudharyoffical2005_db_user:Vcg5Qfb2jItDufwV@cluster0.bqnbmi9.mongodb.net/?appName=Cluster0

const mongoose  = require("mongoose");

async function mongoconnect(url){
    await mongoose.connect(url);
}


module.exports = {
    mongoconnect ,
}