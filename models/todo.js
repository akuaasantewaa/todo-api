import { Schema, model } from "mongoose";

const todoSchema = new Schema({
    title: { type: String, required: true },
    icon: { type: String, required: true },
    completed: { type: Boolean, default: false }
}, {
    timestamps: true,

});

export const TodoModel = model('Todo', todoSchema);  