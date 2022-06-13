const mongoose = require('mongoose');

async function connect(){

    try {
        await mongoose.connect('mongodb://localhost:27017/goang_dev');
        console.log('connect successful!!');
    }catch(error){
        console.log('connect false!!');
    }
}

module.exports = { connect };