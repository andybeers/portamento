const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema ({
    patchId: {
        type: Schema.Types.ObjectId,
        ref: 'Patch'
    },
    sequence: {
        type: Array,
        required: true,
    },
    tempo: {
        type: Number,
        default: 120
    }
    // key: {
    //     type: String,
    //     default: 'C'
    // }

});

module.exports = mongoose.model('Sequence', schema);