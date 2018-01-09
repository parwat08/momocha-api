import { Schema, Types, model } from 'mongoose';

const mediaSchema = new Schema({
    _uploaderId: {
        type: Types.ObjectId,
        ref: 'user',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
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
    "type": {
        type: String,
        enum: ['audio', 'video', 'gif', 'pic'],
        required: true,
    }
}, {
        timestamps: true,
    });

export default model('media', mediaSchema);
