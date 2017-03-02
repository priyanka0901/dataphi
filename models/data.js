'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://example:example@ds139665.mlab.com:39665/ollo');
var Schema = mongoose.Schema;

var msgSchema = new Schema({
    firstname: String
});
console.log(msgSchema);

var Msg = mongoose.model('Msg', msgSchema);


module.exports = Msg;