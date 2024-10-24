import { toJSON } from "@reis/mongoose-to-json";
import { model, Schema } from "mongoose";


const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avartar: { type: String},
    role: { type: String, default:'user', enum: ['user', 'vendor', 'admin', 'superadmin'] }
}, {
    timestamps: true
});

userSchema.plugin(toJSON);

export const UserModel = model('User', userSchema)