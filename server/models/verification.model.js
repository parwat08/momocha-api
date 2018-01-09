import { Schema, Types, model } from 'mongoose';
import uuid from 'node-uuid';

const verificationTokenSchema = new Schema({
    _userId: {
        type: Types.ObjectId,
        ref: 'user',
    },
    token: {
        type: String,
        required: true,
        enum: ['auth', 'reset'],
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
        expires: "1h"
    }
});

verificationTokenSchema.methods = {

    createVerificationToken(done) {

        const verificationToken = this;
        const token = uuid.v4();
        verificationToken.set('token', token);
        verificationToken.save(function (err) {
            if (err) return done(err);
            return done(null, token);
        })
    }
}

export default model('verificationToken', verificationTokenSchema);
