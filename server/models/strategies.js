 var mongoose = require('mongoose')

// instrument Schema
var startegySchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true

    },
    instrument:{
        type: String,
        required: true
    }

});

const strategies = module.exports = mongoose.model('strategies', startegySchema);

//get strategy
module.exports.getstrategies = (callback , limit) => {
    strategies.find(callback).limit(limit);
}

//add strategy

module.exports.addstrategies = (strategie , callback) =>{
    strategies.create(strategie , callback);
}

//update strategy

module.exports.updatestrategies = (id , strategie, options, callback) =>{
    var query = {_id: id};
    var update = {
        name: strategie.name,
        description: strategie.description,
        instrument: strategie.instrument
    }
    strategies.findOneAndUpdate(query, update, options, callback);
}

//delete strategy
module.exports.removestrategies = (id, callback) =>{
    var query = {_id: id};
    strategies.remove(query, callback);
}