const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

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
ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);

