const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
}, {
    versionKey: false,
});

const User = mongoose.model('Users', userSchema);

module.exports = User;
