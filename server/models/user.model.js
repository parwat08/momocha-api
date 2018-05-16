import bcrypt from "bcrypt";
import mongoose from "mongoose";

const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;

const userSchema = new Schema(
  {
    avatar: String,
    email: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    password: String,
    u_name: String,
    f_name: String,
    l_name: String,
    country: String,
    mobileNumber: String,
    city: String,
    age: Number,
    facebook: String,
    twitter: String,
    google: String,
    social: {
      type: Boolean,
      default: false
    },
    isVerified: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

/* eslint-disable func-names */
userSchema.pre("save", function(cb) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) {
    return cb();
  }
  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return cb(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return cb(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      cb();
    });
  });
});

userSchema.methods = {
  isPasswordVerified(rawPassword) {
    return new Promise((resolve, reject) =>
      bcrypt.compare(rawPassword, this.password, (err, isMatch) => {
        if (!err && isMatch) return resolve(true);
        const errF = false;
        return reject(errF);
      })
    );
  }
};

export default mongoose.model("user", userSchema);
