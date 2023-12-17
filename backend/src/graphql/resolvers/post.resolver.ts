import PostModel, { IPostDocument } from '../models/post.model';
import { authenticate } from '../../utils/authenticationMiddleware';
import mongoose from 'mongoose';
import { standardizeDisplayString } from '../../utils/standardizeInput';

// type PostResponseSingle = {
//   data?: IPostDocument;
//   message?: string;
// };

// type PostResponseMultiple = {
//   data?: IPostDocument[];
//   message?: string;
// };

// type MutationPostResponse = {
//   data?: IPostDocument;
//   message?: string;
// };

// type MutationPostResponseBoolean = {
//   data?: boolean;
//   message?: string;
// };

const resolvers = {
  PostResponseSingleUnion: {
    __resolveType(obj: any) {
      if (obj.data && obj.data.title) {
        return 'PostResponseSingle'; // Return the name of the GraphQL type
      }
      if (obj.error) {
        return 'Error'; // Return the name of the GraphQL type
      }
      return null; // Or throw a specific error if you don't expect any other types
    },
  },

  PostResponseMultipleUnion: {
    __resolveType(obj: any) {
      if (obj.data && Array.isArray(obj.data)) {
        return 'PostResponseMultiple';
      }
      if (obj.error) {
        return 'Error';
      }
      return null;
    },
  },

  MutationPostResponseUnion: {
    __resolveType(obj: any) {
      console.log('obj', obj);
      if (obj.data) {
        return 'MutationPostResponse'; // Return the name of the GraphQL type
      }
      if (obj.error) {
        return 'Error'; // Return the name of the GraphQL type
      }
      return null; // Or throw a specific error if you don't expect any other types
    },
  },

  Query: {
    posts: async () => {
      try {
        const posts = await PostModel.find();

        const modifiedPosts = posts.map((post) => {
          return {
            post,
            _id: post._id.toString(),
          };
        });

        console.log('posts', modifiedPosts);

        return {
          data: modifiedPosts,
        };
      } catch (error: any) {
        return {
          error: error.message,
        };
      }
    },
    post: async (_: any, { id }: { id: string }) => {
      try {
        const post = await PostModel.findById(id);
        if (!post) {
          return {
            error: 'Post not found',
          };
        }
        return {
          data: post,
        };
      } catch (error: any) {
        return {
          error: error.message,
        };
      }
    },
  },

  Mutation: {
    createPost: async (
      _: any,
      args: {
        userId: string;
        title: string;
        content: string;
        author: string;
        tags: string[];
      },
      ctx: any,
    ) => {
      const response = authenticate(ctx);

      if (response.error) {
        return {
          error: response.error.message,
        };
      }

      try {
        // check if another post with the same title exists
        const postExists = await PostModel.findOne({
          title: standardizeDisplayString(args.title),
        });
        if (postExists) {
          return {
            error: 'Post with this title already exists',
          };
        }
        // create the post in the database
        const post = new PostModel({
          ...args,
          title: standardizeDisplayString(args.title),
          author: standardizeDisplayString(args.author),
          userId: new mongoose.Types.ObjectId(args.userId),
        });
        await post.save();
        console.log('post created', post);
        // insert the post id into the user's postIds array
        const { models } = ctx;
        const { User } = models;
        const res = await User.findByIdAndUpdate(args.userId, {
          $push: { postIds: post._id },
        });

        console.log('result og findByIdAndUpdate', res);

        console.log('post created 2', post);
        return {
          data: post,
        };
      } catch (error: any) {
        return {
          error: error.message,
        };
      }
    },

    updatePost: async (
      _: any,
      args: {
        id: string;
        title?: string;
        content?: string;
        author?: string;
        tags?: string[];
      },
      ctx: any,
    ) => {
      const response = authenticate(ctx);

      if (response.error) {
        return {
          error: response.error.message,
        };
      }

      try {
        const newArgs = { ...args };
        // title is optional
        if (args.title) {
          newArgs.title = standardizeDisplayString(args.title);
        }
        // author is optional
        if (args.author) {
          newArgs.author = standardizeDisplayString(args.author);
        }

        const post = await PostModel.findByIdAndUpdate(newArgs.id, newArgs, {
          new: true,
        });
        if (!post) {
          return {
            error: 'Post not found',
          };
        }
        // update the post in the database
        await post.save();
        return {
          data: post,
        };
      } catch (error: any) {
        return {
          error: error.message,
        };
      }
    },

    deletePost: async (_: any, { id }: { id: string }, ctx: any) => {
      const response = authenticate(ctx);

      if (response.error) {
        return {
          error: response.error.message,
        };
      }

      try {
        const post = await PostModel.findByIdAndDelete(id);
        if (!post) {
          return {
            error: 'Post not found',
          };
        }
        return {
          data: post,
        };
      } catch (error: any) {
        return {
          error: error.message,
        };
      }
    },
  },
};

export default resolvers;
