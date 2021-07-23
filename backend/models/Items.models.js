const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemsSchema = new Schema({
    itemname: {type: String, required: true},
    ItemID: {type: String, required: true, unique: true},
    CatalogID: {type: String, required: true},
    description: {type: String, required: true},
    Color: {type: String, required: true},
    Dimension: {type: Number, required: true},
    Available: {type: Number, required: true},
    date: {type: Date,required: true}
}, {
    timestamps: true
});

const items = mongoose.model('Exercise', exerciseSchema);

module.exports = items;