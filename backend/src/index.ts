import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import { userResolvers } from './graphql/resolvers/user.resolver';
import postResolvers from './graphql/resolvers/post.resolver';
import tagResolvers from './graphql/resolvers/tag.resolver';
import commentResolvers from './graphql/resolvers/comment.resolver';

import userModel, { IUserDocument } from './graphql/models/user.model';
import postModel, { IPostDocument } from './graphql/models/post.model';
import { TagModel } from './graphql/models/tag.model';
import commentModel from './graphql/models/comment.model';
import { readFileSync } from 'fs';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { authenticate } from './utils/authenticationMiddleware';

interface ContextType {
  req: express.Request;
  res: express.Response;
  models: {
    User: mongoose.Model<IUserDocument, {}>;
    Post: mongoose.Model<IPostDocument, {}>;
    // Tag?: mongoose.Model<ITagDocument, {}>;
  };
}

const isProduction = process.env.NODE_ENV === 'production';

const prodAllowedOrigins = [
  'https://blogspot-63t1.onrender.com',
  'blogs-app-beige.vercel.app',
];
const devAllowedOrigins = ['http://localhost:3001', 'http://localhost:3000'];
// const allowedOrigin = isProduction
//   ? 'https://blogspot-63t1.onrender.com' // Replace with your actual production domain
//   : 'http://localhost:3001';

async function createContext({
  req,
  res,
}: {
  req: express.Request;
  res: express.Response;
}): Promise<ContextType> {
  return {
    req,
    res,
    models: {
      User: userModel,
      Post: postModel,
      // You can add Tag back once you're sure other things are working
      // Tag: TagModel
    },
  };
}

dotenv.config();
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

const MONGO_URI = `mongodb+srv://${username}:${password}@blogspot-cluster0.dbo7dyh.mongodb.net/?retryWrites=true&w=majority`;

// Database connection
mongoose
  .connect(MONGO_URI, {
    serverApi: {
      version: '1',
      strict: true,
      deprecationErrors: true,
    },
  })
  .then(() => {
    console.log(`Db Connected`);
  })
  .catch((err) => {
    console.log('Error');
    console.log(MONGO_URI);
    console.log(err.message);
  });

const app = express();

// Our httpServer handles incoming requests to our Express app.
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.
const httpServer = http.createServer(app);

const typeDefs = [];

for (const filename of ['user', 'post', 'tag', 'comment']) {
  console.log(filename);
  typeDefs.push(
    readFileSync(`./src/graphql/schemas/${filename}.graphql`, {
      encoding: 'utf8',
    })
  );
}

const mergedTypeDefs = mergeTypeDefs(typeDefs);
const server = new ApolloServer({
  typeDefs: mergedTypeDefs,
  resolvers: [userResolvers, postResolvers, tagResolvers, commentResolvers],
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  introspection: true,
});

server.start().then(() => {
  app.use(cookieParser());
  // Set up our Express middleware to handle CORS, body parsing,
  // and our expressMiddleware function.
  app.use(
    '/',
    cors({
      origin: (origin, callback) => {
        if (!origin || (isProduction && prodAllowedOrigins.indexOf(origin) !== -1) || (!isProduction && devAllowedOrigins.indexOf(origin) !== -1)) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
      credentials: true,
    }),
    bodyParser.json(),
    expressMiddleware(server, {
      context: async ({ req, res }) => {
        let context = {
          req,
          res,
          models: {
            User: userModel,
            Post: postModel,
            Tag: TagModel,
            Comment: commentModel,
          },
        };

        // Can just add auth middleware here if want to use it for every request
        // try {
        //   context = authenticate(context);
        // } catch (error: any) {
        //   console.log(error);
        //   throw new Error(error.message);
        // }

        return context;
      },
    })
  );
  httpServer.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000/`);
  });
});
