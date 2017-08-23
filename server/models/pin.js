var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PinSchema = new mongoose.Schema({
    source_link: {
        type: String, 
        required: true, 
        minlength: 5
    }, 
    title: {
        type: String
    },
    image: {
        type: String, 
        required: true,
        minlength: 5
    },
    description: {
        type: String,
    },
    _user: {
     type: Schema.Types.ObjectId, ref: 'User'   
    },
    _board: {
        type: Schema.Types.ObjectId, ref: 'Board'
    },
    repins: [{
        type: Schema.Types.ObjectId, ref: 'Repinners'
    }],
    comments: [{
        type: Schema.Types.ObjectId, ref: 'Comment',
    }]
}, {timestamps: true});

mongoose.model('Pin', PinSchema)


