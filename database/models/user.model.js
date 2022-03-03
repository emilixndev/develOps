import pkg from 'mongoose';
const {Schema, model} = pkg;
import bcrypt from 'bcrypt';

const userSchema = Schema({
    id_role: {type: Schema.Types.ObjectId, ref:"roles"},
    username: String,
    email : String,
    password : String,
})

userSchema.statics.hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10)
        return bcrypt.hash(password, salt)
    } catch (err) {
        throw err
    }
}

userSchema.methods.comparePassword = function(password, hash){
    return bcrypt.compare(password, hash)
}

userSchema.pre("save", async function () {
    const docCount = await User.countDocuments();
    return (this.index = docCount + 1);
});


export const User = model("user",userSchema);