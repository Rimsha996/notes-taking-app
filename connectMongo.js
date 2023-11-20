const mongoose = require('mongoose');

connectToDB = () =>{
    const uri = process.env.MOGOOSE_URI;
    mongoose.connect(uri);
    console.log('Connect to DB');
}

module.exports = connectToDB;