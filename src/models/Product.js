const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    descricao : {
        type: String,
        required: true,
    },
    url :{
        type: String,
        required: true,
    },
    creatAt: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model('Product', ProductSchema);

