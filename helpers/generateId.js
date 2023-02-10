const mongoose = require('mongoose');

function generateId() {
    return mongoose.Types.ObjectId();
}

module.exports = generateId