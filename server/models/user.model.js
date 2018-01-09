import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    f_name: String,
    l_name: String,
    mobileNumber: String,
    country: String,
    city: String,
    age: Number,
    isVerified: {
        type: Boolean,
        default: false,
    }
});

export default model('user', userSchema);
