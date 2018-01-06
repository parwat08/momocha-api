import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    f_name: String,
    l_name: String,
    u_name: String,
    email: {
        type: String,
        unique: true,
        required: true,
        index: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    phone: String,
    country: String,
    city: String,
    verified: {
        type: Boolean,
        default: false,
    }
});

export default model('user', userSchema);
