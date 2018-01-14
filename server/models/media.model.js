import { Schema, Types, model } from 'mongoose';

const mediaSchema = new Schema({
    _uploaderId: {
        type: Types.ObjectId,
        ref: 'user',
        required: true,
    },
    caption: {
        type: String,
        required: true,
    },
    approval_status: Boolean,
    duration: Number, // total duration 
    language: String,
    media_url: String,
    poster_url: String,
    shares: Number,
    momochas: Number, // likes
    listens: Number,
    uploadedDate: {
        type: Date,
        default: Date.now,
        required: true,
    },
    tags: [{
        name: String,
        required: true,
    }],
    category: {
        // TODO: provide a list of enums,
        type: String,
    },
    media_type: {
        type: String,
        enum: ['audio', 'video', 'gif', 'pic'],
        required: true,
    }
}, {
        timestamps: true,
    });

export default model('media', mediaSchema);
