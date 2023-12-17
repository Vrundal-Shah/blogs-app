import mongoose, { Schema, Document } from 'mongoose';

// Define the user document interface
export interface IUserDocument extends Document {
  email: string;
  firstName: string;
  lastName?: string; // Made this optional since it has a default value
  posts: Array<Schema.Types.ObjectId>; // Reference to Post documents
  comments: Array<Schema.Types.ObjectId>; // Reference to Comment documents
}

// Define the user schema
const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    default: '',
  },
  posts: [
    {
      type: Schema.Types.ObjectId, // Reference the ID of the related Post document(s)
      ref: 'Post', // This assumes that your Post model name is 'Post'
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId, // Reference the ID of the related Comment document(s)
      ref: 'Comment', // This assumes that your Comment model name is 'Comment'
    },
  ],
});

// Create and export the User model
export default mongoose.model<IUserDocument>('User', UserSchema);
