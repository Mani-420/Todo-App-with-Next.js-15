import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ITodo extends Document {
  title: string;
  user: mongoose.Types.ObjectId;
  description: string;
  completed: boolean;
  createdAt: Date;
}

const todoSchema: Schema<ITodo> = new Schema(
  {
    title: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export default (mongoose.models.Todo as Model<ITodo>) ||
  mongoose.model<ITodo>('Todo', todoSchema);
