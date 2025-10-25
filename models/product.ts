import mongoose from "mongoose";
import { describe } from "node:test";
import { features } from "process";
const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    slug:{
        type: String,
        required: true,
        unique: true,

    },
    description:{
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    images:[String],
    category:{
        type: String,
        enum: ['laptop', 'smartphone', 'headset', 'camera', 'accessories'],
        required: true,
    },
    inventory:{
        type: Number,
        default:0,

    },
    featured:{
        type: Boolean,
        default: false,
    }
}, { timestamps: true});
    
const Product = mongoose.model('Product', ProductSchema);
export default Product;
