import mongoose, { Schema, Document } from 'mongoose';

export interface ICommentDocument extends Document {
  postId: mongoose.Schema.Types.ObjectId;
  replyToId?: mongoose.Schema.Types.ObjectId;
  authorId: mongoose.Schema.Types.ObjectId;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  likesUserIds: mongoose.Schema.Types.ObjectId[];
  replyIds: mongoose.Schema.Types.ObjectId[];
}

const CommentSchema = new Schema<ICommentDocument>({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  replyToId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
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
  likesUserIds: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
    default: [],
  },
  replyIds: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Comment',
    default: [],
  },
});

// Middleware to update the 'updatedAt' property on save and update operations
CommentSchema.pre<ICommentDocument>(
  ['save', 'findOneAndUpdate'],
  function (next) {
    this.updatedAt = new Date();
    next();
  },
);

const CommentModel = mongoose.model<ICommentDocument>('Comment', CommentSchema);

export default CommentModel;
