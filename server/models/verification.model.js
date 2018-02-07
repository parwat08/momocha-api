import mongoose from "mongoose";
import uuid from "node-uuid";

const Schema = mongoose.Schema;

const verificationTokenSchema = new Schema(
  {
    _userId: {
      type: Schema.Types.ObjectId,
      ref: "user"
    },
    token_type: {
      type: String,
      required: true,
      enum: ["verify", "reset"]
    },
    token: String,
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
      expires: "1h"
    }
  },
  {
    timestamps: true
  }
);

verificationTokenSchema.methods = {
  createVerificationToken(done) {
    const verificationToken = this;
    const token = uuid.v4();
    verificationToken.set("token", token);
    verificationToken.save(err => {
      if (err) return done(err);
      return done(null, token);
    });
  }
};

export default mongoose.model("verificationToken", verificationTokenSchema);
