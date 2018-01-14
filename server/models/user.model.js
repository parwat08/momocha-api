import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
let SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
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
    u_name: String,
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

userSchema.pre('save', function (cb) {
    let user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) {
        return cb();
    }
    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return cb(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return cb(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            cb();
        })
    })
})

userSchema.methods = {

    isPasswordVerified(rawPassword) {
        return new Promise((resolve, reject) => {
            return bcrypt.compare(rawPassword, this.password, (err, isMatch) => {
                if (!err && isMatch) return resolve(true);
                return reject(false);
            })
        })
    }
}

export default model('user', userSchema);
