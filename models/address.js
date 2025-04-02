const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = Schema.Types.ObjectId

const addressSchema = new Schema({
    address:{
        street:{
            type: String,
            required: true
        },
        area:{
            type: String,
            required: true
        },
        city:{
            type: String,
            required: true
        },
        state:{
            type: String,
            required: true
        },
        country:{
            type: String,
            required: true
        }
    },
    user: [
        {
            type: objectId,
            ref: 'User'
        }
    ]
});

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;