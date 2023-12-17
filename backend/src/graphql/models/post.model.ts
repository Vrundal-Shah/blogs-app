import mongoose, { Schema, Document } from 'mongoose';

export interface IPostDocument extends Document {
  userId: Schema.Types.ObjectId;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
  commentIds: Schema.Types.ObjectId[];
}

const PostSchema = new Schema<IPostDocument>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  tags: {
    type: [String],
    default: [],
  },
  commentIds: {
    type: [Schema.Types.ObjectId],
    ref: 'Comment',
    default: [],
  },
});

// Middleware to update the 'updatedAt' property on save and update operations
PostSchema.pre<IPostDocument>(['save', 'findOneAndUpdate'], function (next) {
  this.updatedAt = new Date();
  next();
});

const PostModel = mongoose.model<IPostDocument>('Post', PostSchema);

export default PostModel;
