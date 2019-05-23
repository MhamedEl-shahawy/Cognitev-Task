const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create ninja Schema & model
const Ninjaschema = new Schema({
    name: {
        type: String,
    },
    country: {
        type: String
    },
    budget:{
        type:Number
    },
     goal: {
        type:String
     },
    category: {
        type:String
    }
});
 
const Ninja = mongoose.model('ninja', Ninjaschema);

module.exports = Ninja;
