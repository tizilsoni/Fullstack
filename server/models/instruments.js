var mongoose = require('mongoose')

// instrument Schema
var instrumentSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true

    },
    risk:{
        type: String,
        required: true
    }

});

const instruments = module.exports = mongoose.model('instruments', instrumentSchema);

//get instruments
module.exports.getinstruments = (callback , limit) => {
    instruments.find(callback).limit(limit);
}

//add instruments

module.exports.addinstruments = (instrument , callback) =>{
    instruments.create(instrument , callback);
}

//update instruments

module.exports.updateinstruments = (id , instruments, options, callback) =>{
    var query = {_id: id};
    var update = {
        name: instruments.name,
        description: instruments.description,
        risk: instruments.risk
    }
    instruments.findOneAndUpdate(query, update, options, callback);
}

//delete instruments
module.exports.removeinstruments = (id, callback) =>{
    var query = {_id: id};
    instruments.remove(query, callback);
}