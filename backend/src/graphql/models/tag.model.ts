import mongoose, { Schema, Document } from 'mongoose';

export interface ITagDocument extends Document {
  name: string;
}

const TagSchema = new Schema<ITagDocument>({
  name: {
    type: String,
    required: true,
    unique: true, // Ensures tag names are unique
  },
});

export const TagModel = mongoose.model<ITagDocument>('Tag', TagSchema);
