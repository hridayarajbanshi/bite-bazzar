import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email:{ type: String, required: true, unique: true },
    phoneNumber: { type: String },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
}, { timestamps: true}
);
const User = mongoose.models.User
export default User;
