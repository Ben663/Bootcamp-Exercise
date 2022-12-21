import mongoose from "mongoose";
//{Schema, model}
import '../connect/js';

export const dataSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        require: true,
    },
    isActive: Boolean,
    price: {
        type: Number,
        require: true,
        min: 50,
        max: 500,
    }
})
export const product = new mongoose.model('product', dataSchema);