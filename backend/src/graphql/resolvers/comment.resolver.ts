import CommentModel, { ICommentDocument } from '../models/comment.model';
import { authenticate } from '../../utils/authenticationMiddleware';

const commentResolvers = {
  CommentResponseSingleUnion: {
    __resolveType(obj: any) {
      if (obj.data && obj.data.postId) {
        return 'CommentResponseSingle';
      }
      if (obj.error) {
        return 'Error';
      }
      return null;
    },
  },

  CommentResponseMultipleUnion: {
    __resolveType(obj: any) {
      if (obj.data && Array.isArray(obj.data)) {
        return 'CommentResponseMultiple';
      }
      if (obj.error) {
        return 'Error';
      }
      return null;
    },
  },

  MutationCommentResponseUnion: {
    __resolveType(obj: any) {
      if (obj.data && obj.data.postId) {
        return 'MutationCommentResponse';
      }
      if (obj.error) {
        return 'Error';
      }
      return null;
    },
  },

  Query: {
    commentsByPostId: async (
      _: any,
      { postId }: { postId: string },
      ctx: any,
    ) => {
      // const response = authenticate(ctx);
      // if (response.error) {
      //   return { error: response.error.message };
      // }
      console.log('commentsbypostId');

      try {
        const comments = await CommentModel.find({ postId });
        if (!comments) {
          console.log('No comments found');
          return { data: [] }; // Always return an array, even if empty
        }
        return { data: comments };
      } catch (error: any) {
        return { error: error.message };
      }
    },
    commentsByReplyToId: async (
      _: any,
      { replyToId }: { replyToId: string },
      ctx: any,
    ) => {
      // const response = authenticate(ctx);
      // if (response.error) {
      //   return { error: response.error.message };
      // }

      try {
        const comments = await CommentModel.find({ replyToId });
        return { data: comments };
      } catch (error: any) {
        return { error: error.message };
      }
    },
    commentsByAuthorId: async (
      _: any,
      { authorId }: { authorId: string },
      ctx: any,
    ) => {
      const response = authenticate(ctx);
      if (response.error) {
        return { error: response.error.message };
      }

      try {
        const comments = await CommentModel.find({ authorId });
        return { data: comments };
      } catch (error: any) {
        return { error: error.message };
      }
    },
    comment: async (_: any, { id }: { id: string }, ctx: any) => {
      const response = authenticate(ctx);
      if (response.error) {
        return { error: response.error.message };
      }

      try {
        const comment = await CommentModel.findById(id);
        if (!comment) throw new Error('Comment not found');
        return { data: comment };
      } catch (error: any) {
        return { error: error.message };
      }
    },
  },

  Mutation: {
    createComment: async (
      _: any,
      {
        postId,
        replyToId,
        content,
        authorId,
      }: {
        postId: string;
        replyToId?: string;
        content: string;
        authorId: string;
      },
      ctx: any,
    ) => {
      const response = authenticate(ctx);
      if (response.error) {
        return { error: response.error.message };
      }
      console.log('Authenticated user:', ctx.user);

      try {
        // Create the new comment
        const newComment: ICommentDocument = new CommentModel({
          postId: postId,
          replyToId: replyToId,
          authorId: authorId,
          content: content,
          // Default values for required fields
          // createdAt: new Date().toISOString(),
          // updatedAt: new Date().toISOString(),
          // likesUserIds: [],
          // replyIds: [],
        });
        await newComment.save();

        // If replyToId is provided, update the replyIds list for the associated comment
        if (replyToId) {
          const parentComment = await CommentModel.findById(replyToId);
          if (!parentComment) {
            throw new Error('Parent comment not found');
          }
          parentComment.replyIds.push(newComment.id);
          await parentComment.save();
        }

        return { data: newComment };
      } catch (error: any) {
        return { error: error.message };
      }
    },
    updateComment: async (
      _: any,
      { id, content }: { id: string; content: string },
      ctx: any,
    ) => {
      const response = authenticate(ctx);
      if (response.error) {
        return { error: response.error.message };
      }

      try {
        const updatedComment = await CommentModel.findByIdAndUpdate(
          id,
          { content },
          { new: true },
        );
        if (!updatedComment) throw new Error('Comment not found');
        return { data: updatedComment };
      } catch (error: any) {
        return { error: error.message };
      }
    },
    deleteComment: async (_: any, { id }: { id: string }, ctx: any) => {
      const response = authenticate(ctx);
      if (response.error) {
        return { error: response.error.message };
      }

      try {
        const deletedComment = await CommentModel.findByIdAndDelete(id);
        if (!deletedComment) throw new Error('Comment not found');
        return { data: deletedComment };
      } catch (error: any) {
        return { error: error.message };
      }
    },
    likeComment: async (_: any, { id }: { id: string }, ctx: any) => {
      const response = authenticate(ctx);
      if (response.error) {
        return { error: response.error.message };
      }

      try {
        const comment = await CommentModel.findById(id);
        if (!comment) throw new Error('Comment not found');
        comment.likesUserIds.push(ctx.user.id);
        await comment.save();
        return { data: comment };
      } catch (error: any) {
        return { error: error.message };
      }
    },
    unlikeComment: async (_: any, { id }: { id: string }, ctx: any) => {
      const response = authenticate(ctx);
      if (response.error) {
        return { error: response.error.message };
      }

      try {
        const comment = await CommentModel.findById(id);
        if (!comment) throw new Error('Comment not found');
        comment.likesUserIds = comment.likesUserIds.filter(
          (userId) => userId.toString() !== ctx.user.id.toString(),
        );
        await comment.save();
        return { data: comment };
      } catch (error: any) {
        return { error: error.message };
      }
    },
  },
};

export default commentResolvers;
