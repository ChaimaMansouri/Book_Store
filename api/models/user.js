const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    id:{
        type:Number,
    } ,
    username: String,
    password: String,
    firstName: String,
    lastName: String,
	create_date:{
		type: Date,
		default: Date.now
	}
});

const User = module.exports = mongoose.model('user', userSchema);

