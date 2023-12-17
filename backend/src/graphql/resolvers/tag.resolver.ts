import { authenticate } from '../../utils/authenticationMiddleware';
import { TagModel } from '../models/tag.model';
import { standardizeDisplayString } from '../../utils/standardizeInput';

const tagResolvers = {
  TagResponseMultipleUnion: {
    __resolveType(obj: any) {
      if (obj.error) {
        return 'Error';
      }
      if (obj.data && Array.isArray(obj.data)) {
        return 'TagResponseMultiple';
      }
      return null; // GraphQLError is thrown if no type matched
    },
  },

  TagResponseSingleUnion: {
    __resolveType(obj: any) {
      if (obj.error) {
        return 'Error';
      }
      if (obj.data && obj.data.id) {
        return 'TagResponseSingle';
      }
      return null; // GraphQLError is thrown if no type matched
    },
  },

  MutationTagResponseUnion: {
    __resolveType(obj: any) {
      if (obj.error) {
        return 'Error';
      }
      if (obj.data && obj.data.id) {
        return 'MutationTagResponse';
      }
      return null; // GraphQLError is thrown if no type matched
    },
  },

  Query: {
    tags: async (_: any, __: any, ctx: any) => {
      try {
        const tags = await TagModel.find();

        if (tags && tags.length > 0) {
          return { data: tags.map((tag) => ({ id: tag._id, name: tag.name })) };
        } else {
          return { data: [] };
        }
      } catch (error: any) {
        return { error: error.message };
      }
    },
  },

  Mutation: {
    createTag: async (_: any, { name }: { name: string }, ctx: any) => {
      const response = authenticate(ctx);

      if (response.error) {
        return {
          error: response.error.message,
        };
      }
      try {
        const newTag = new TagModel({ name: standardizeDisplayString(name) });
        const savedTag = await newTag.save();

        return { data: { id: savedTag._id, name: savedTag.name } };
      } catch (error: any) {
        return { error: error.message };
      }
    },

    updateTag: async (
      _: any,
      { id, name }: { id: string; name: string },
      ctx: any,
    ) => {
      const response = authenticate(ctx);
      if (response.error) {
        return {
          error: response.error.message,
        };
      }
      try {
        const updatedTag = await TagModel.findByIdAndUpdate(
          id,
          { name: standardizeDisplayString(name) },
          { new: true },
        );

        if (!updatedTag) throw new Error('Tag not found');

        return { data: { id: updatedTag._id, name: updatedTag.name } };
      } catch (error: any) {
        return { error: error.message };
      }
    },

    deleteTag: async (_: any, { id }: { id: string }, ctx: any) => {
      const response = authenticate(ctx);
      if (response.error) {
        return {
          error: response.error.message,
        };
      }
      try {
        const deletedTag = await TagModel.findByIdAndRemove(id);
        if (!deletedTag) throw new Error('Tag not found');
        return { data: { id: deletedTag._id, name: deletedTag.name } };
      } catch (error: any) {
        return { error: error.message };
      }
    },
  },
};

export default tagResolvers;
