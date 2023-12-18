import { generateToken } from '../../utils/generateToken';
import getGoogleProfile from '../../utils/get-google-profile';
import { IUserDocument } from '../models/user.model';
import { authenticate } from '../../utils/authenticationMiddleware';

export const userResolvers = {
  AuthResponseUnion: {
    __resolveType(obj: any) {
      if (obj.accessToken || obj.refreshToken || obj.userId) {
        return 'AuthResponse'; // Return the name of the GraphQL type
      }
      if (obj.message) {
        return 'Error'; // Return the name of the GraphQL type
      }
      return null; // Or throw a specific error if you don't expect any other types
    },
  },

  QueryResponseSingleUnion: {
    __resolveType(obj: any) {
      if (obj.data && obj.data.firstName) {
        return 'QueryResponseSingle';
      }
      if (obj.error) {
        return 'Error';
      }
      return null;
    },
  },

  QueryResponseMultipleUnion: {
    __resolveType(obj: any) {
      if (obj.data && Array.isArray(obj.data)) {
        return 'QueryResponseMultiple';
      }
      if (obj.error) {
        return 'Error';
      }
      return null;
    },
  },

  MutationResponseUnion: {
    __resolveType(obj: any) {
      if (obj.data && obj.data.firstName) {
        return 'MutationResponse';
      }
      if (obj.error) {
        return 'Error';
      }
      return null;
    },
  },

  MutationResponseBooleanUnion: {
    __resolveType(obj: any) {
      if (typeof obj.data === 'boolean') {
        return 'MutationResponseBoolean';
      }
      if (obj.error) {
        return 'Error';
      }
      return null;
    },
  },

  Query: {
    getAllUsers: async (_: any, __: any, ctx: any) => {
      const { models } = ctx;
      const { User } = models;
      const response = authenticate(ctx);

      if (response.error) {
        const error = response.error;
        return {
          error: error.message,
        };
      }

      try {
        const users = await User.find();
        return {
          data: users,
        };
      } catch (error: any) {
        return {
          error: error.message,
        };
      }
    },
    getUserById: async (_: any, { id }: any, ctx: any) => {
      const response = authenticate(ctx);
      if (response.error) {
        return {
          error: response.error.message,
        };
      }
      const { models } = ctx;
      const { User } = models;
      try {
        const user = await User.findById(id);
        if (!user) {
          return {
            error: 'User not found',
          };
        }
        return {
          data: user,
        };
      } catch (error: any) {
        return {
          error: error.message,
        };
      }
    },

    getUserByEmail: async (_: any, { email }: any, ctx: any) => {
      const response = authenticate(ctx);
      if (response.error) {
        return {
          error: response.error.message,
        };
      }
      const { models } = ctx;
      const { User } = models;
      try {
        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user) {
          return {
            error: 'User not found',
          };
        }
        return {
          data: user,
        };
      } catch (error: any) {
        return {
          error: error.message,
        };
      }
    },
  },
  Mutation: {
    signUpGoogle: async (_: any, { accessToken }: any, ctx: any) => {
      const { models, res } = ctx;
      const { User } = models;

      console.log('in signUpGoogle');

      try {
        const data = await getGoogleProfile(accessToken);
        const { email, given_name: firstName, family_name: lastName } = data;

        let generatedAccessToken = '';
        let generatedRefreshToken = '';
        let userId = '';
        let error = '';

        console.log('here');

        // Check if the user is registered
        const existingUser: IUserDocument | null = await User.findOne({
          email: email.toLowerCase().replace(/ /gi, ''),
        });

        if (!existingUser) {
          // User not found, create a new user
          const newUser = new User({
            email: email.toLowerCase().replace(/ /gi, ''),
            firstName,
            lastName,
          });

          await newUser.save();

          generatedAccessToken = generateToken(newUser._id);
          // generatedRefreshToken = generateToken(newUser._id, true);

          // Set the access token as an HttpOnly cookie
          res.cookie('accessToken', generatedAccessToken, {
            httpOnly: true,
            // secure: true, // Use 'secure' in production to require HTTPS
            // sameSite: 'strict',
          });
          console.log('generatedAccessToken', generatedAccessToken);

          userId = newUser._id;
        } else {
          // User already exists
          // Generate Token
          generatedAccessToken = generateToken(existingUser._id);
          console.log('generatedAccessToken', generatedAccessToken);
          // generatedRefreshToken = generateToken(existingUser._id, true);

          // Set the access token as an HttpOnly cookie
          res.cookie('accessToken', generatedAccessToken, {
            httpOnly: true,
            // secure: true, // Use 'secure' in production to require HTTPS
            // sameSite: 'strict',
          });

          userId = existingUser._id;
        }

        return {
          accessToken: `Bearer ${generatedAccessToken}`,
          refreshToken: generatedRefreshToken,
          userId: userId,
        };
      } catch (error: any) {
        throw new Error(`Error signing up with Google: ${error.message}`);
      }
    },
    signOutGoogle: async (_: any, args: any, ctx: any) => {
      const { res } = ctx;
      console.log('in signOutGoogle');

      // only logged-in users can sign out
      const response = authenticate(ctx);
      console.log('response', response);
      if (response.error) {
        console.log('signOutGoogle fail');

        return {
          error: response.error.message,
        };
      }

      // Clear the access token from the client by setting its expiration to a past date
      res.cookie('accessToken', '', {
        httpOnly: true,
        // secure: true,
        // sameSite: 'strict',
        expires: new Date(0), // Set the expiration to Unix epoch time (essentially clearing the cookie)
      });

      console.log('signOutGoogle success');

      return {
        data: true,
      };
    },
    updateUser: async (
      _: any,
      { id, firstName, lastName, email }: any,
      ctx: any
    ) => {
      const response = authenticate(ctx);
      if (response.error) {
        return {
          error: response.error.message,
        };
      }
      const { models } = ctx;
      const { User } = models;
      try {
        const user = await User.findByIdAndUpdate(
          id,
          { firstName, lastName, email },
          { new: true }
        );
        return {
          data: user,
        };
      } catch (error: any) {
        return {
          error: error.message,
        };
      }
    },
    deleteUserByEmail: async (_: any, { email }: any, ctx: any) => {
      const response = authenticate(ctx);
      if (response.error) {
        return {
          error: response.error.message,
        };
      }
      const { models } = ctx;
      const { User } = models;
      try {
        await User.findOneAndRemove({ email: email.toLowerCase() });
        return {
          data: true,
        };
      } catch (error: any) {
        return {
          error: error.message,
        };
      }
    },
  },
};
