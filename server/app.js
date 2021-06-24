var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require ('mongoose');
const cors = require('cors')

app.use(cors())

app.use(bodyParser.json());

var Instruments =require('./models/instruments');
var Strategies =require('./models/strategies')

mongoose.connect('mongodb://localhost:2717/trader',{ useNewUrlParser: true , useUnifiedTopology: true }).catch(err => console.log(err))

var db = mongoose.connection;

app.get('/', (req, res) =>{
    res.send('Use Commands Like /api/instruments or /api/strategies');
});

//For Instruments.js

app.get('/api/instruments', (req, res) =>{
    Instruments.getinstruments((err , instruments) =>{
        if(err){
            console.log(err);
        }
        res.json(instruments);
    });
});

app.post('/api/instruments', (req, res) =>{
    var instrument = req.body;
    Instruments.addinstruments(instrument, (err , instrument) =>{
        if(err){
            console.log(err);
        }
        res.json(instrument);
    });
});

app.put('/api/instruments/:_id', (req, res) =>{
    var id = req.params._id;
    var instrument = req.body;
    Instruments.updateinstruments(id, instrument, {}, (err , instrument) =>{
        if(err){
            console.log(err);
        }
        res.json(instrument);
    });
});

app.delete('/api/instruments', (req, res) =>{
    var id = req.params._id;
    Instruments.removeinstruments(id, (err , instrument) =>{
        if(err){
            console.log(err);
        }
        res.json(instrument);
    });
});

//For Strategies.js

app.get('/api/strategies', (req, res) =>{
    Strategies.getstrategies((err , strategy) =>{
        if(err){
            console.log(err);
        }
        res.json(strategy);
    });
});

app.post('/api/strategies', (req, res) =>{
    var strategy = req.body;
    Strategies.addstrategies(strategy, (err , strategy) =>{
        if(err){
            console.log(err);
        }
        res.json(strategy);
    });
});

app.put('/api/strategies/:_id', (req, res) =>{
    var id = req.params._id;
    var strategy = req.body;
    Strategies.updatestrategies(id, strategy, {}, (err , strategy) =>{
        if(err){
            console.log(err);
        }
        res.json(strategy);
    });
});

app.delete('/api/strategies', (req, res) =>{
    var id = req.params._id;
    Strategies.removestrategies(id, (err , strategy) =>{
        if(err){
            console.log(err);
        }
        res.json(strategy);
    });
});

app.listen(3001);
console.log('Running on port 3001');
