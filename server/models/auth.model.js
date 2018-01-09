import { Schema, Types, model } from 'mongoose';

const authSchema = new Schema({
    _userId: {
        type: Types.ObjectId,
        ref: 'user',
    },
    u_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    collection: 'auth',
})

export default model('auth', authSchema);
