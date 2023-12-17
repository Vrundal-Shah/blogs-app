import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken: Scalars['String']['output'];
  refreshToken?: Maybe<Scalars['String']['output']>;
  userId: Scalars['ID']['output'];
};

export type AuthResponseUnion = AuthResponse | Error;

export type Comment = {
  __typename?: 'Comment';
  authorId: Scalars['ID']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  likesUserIds: Array<Scalars['ID']['output']>;
  postId: Scalars['ID']['output'];
  replyIds: Array<Scalars['ID']['output']>;
  replyToId?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type CommentResponseMultiple = {
  __typename?: 'CommentResponseMultiple';
  data?: Maybe<Array<Maybe<Comment>>>;
};

export type CommentResponseMultipleUnion = CommentResponseMultiple | Error;

export type CommentResponseSingle = {
  __typename?: 'CommentResponseSingle';
  data?: Maybe<Comment>;
};

export type CommentResponseSingleUnion = CommentResponseSingle | Error;

export type Error = {
  __typename?: 'Error';
  error: Scalars['String']['output'];
};

export type ExtendedPost = {
  __typename?: 'ExtendedPost';
  _id: Scalars['ID']['output'];
  post: Post;
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment: MutationCommentResponseUnion;
  createPost: MutationPostResponseUnion;
  createTag: MutationTagResponseUnion;
  deleteComment: MutationCommentResponseUnion;
  deletePost: MutationPostResponseUnion;
  deleteTag: MutationTagResponseUnion;
  deleteUserByEmail?: Maybe<MutationResponseBooleanUnion>;
  deleteUserById?: Maybe<MutationResponseBooleanUnion>;
  likeComment: MutationCommentResponseUnion;
  signOutGoogle?: Maybe<MutationResponseBooleanUnion>;
  signUpGoogle?: Maybe<AuthResponseUnion>;
  unlikeComment: MutationCommentResponseUnion;
  updateComment: MutationCommentResponseUnion;
  updatePost: MutationPostResponseUnion;
  updateTag: MutationTagResponseUnion;
  updateUser?: Maybe<MutationResponseUnion>;
};


export type MutationCreateCommentArgs = {
  authorId: Scalars['ID']['input'];
  content: Scalars['String']['input'];
  postId: Scalars['ID']['input'];
  replyToId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCreatePostArgs = {
  author: Scalars['String']['input'];
  content: Scalars['String']['input'];
  tags: Array<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationCreateTagArgs = {
  name: Scalars['String']['input'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserByEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationDeleteUserByIdArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLikeCommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSignUpGoogleArgs = {
  accessToken: Scalars['String']['input'];
};


export type MutationUnlikeCommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateCommentArgs = {
  content: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};


export type MutationUpdatePostArgs = {
  author?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateTagArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCommentResponse = {
  __typename?: 'MutationCommentResponse';
  data?: Maybe<Comment>;
};

export type MutationCommentResponseUnion = Error | MutationCommentResponse;

export type MutationPostResponse = {
  __typename?: 'MutationPostResponse';
  data?: Maybe<Post>;
};

export type MutationPostResponseUnion = Error | MutationPostResponse;

export type MutationResponse = {
  __typename?: 'MutationResponse';
  data?: Maybe<User>;
};

export type MutationResponseBoolean = {
  __typename?: 'MutationResponseBoolean';
  data: Scalars['Boolean']['output'];
};

export type MutationResponseBooleanUnion = Error | MutationResponseBoolean;

export type MutationResponseUnion = Error | MutationResponse;

export type MutationTagResponse = {
  __typename?: 'MutationTagResponse';
  data?: Maybe<TagInput>;
};

export type MutationTagResponseUnion = Error | MutationTagResponse;

export type Post = {
  __typename?: 'Post';
  author: Scalars['String']['output'];
  commentIds: Array<Scalars['ID']['output']>;
  content: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  tags: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export type PostResponseMultiple = {
  __typename?: 'PostResponseMultiple';
  data?: Maybe<Array<Maybe<ExtendedPost>>>;
};

export type PostResponseMultipleUnion = Error | PostResponseMultiple;

export type PostResponseSingle = {
  __typename?: 'PostResponseSingle';
  data?: Maybe<Post>;
};

export type PostResponseSingleUnion = Error | PostResponseSingle;

export type Query = {
  __typename?: 'Query';
  comment: CommentResponseSingleUnion;
  commentsByAuthorId: CommentResponseMultipleUnion;
  commentsByPostId: CommentResponseMultipleUnion;
  commentsByReplyToId: CommentResponseMultipleUnion;
  getAllUsers?: Maybe<QueryResponseMultipleUnion>;
  getUserByEmail?: Maybe<QueryResponseSingleUnion>;
  getUserById?: Maybe<QueryResponseSingleUnion>;
  post: PostResponseSingleUnion;
  posts: PostResponseMultipleUnion;
  tags: TagResponseMultipleUnion;
};


export type QueryCommentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCommentsByAuthorIdArgs = {
  authorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommentsByPostIdArgs = {
  postId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommentsByReplyToIdArgs = {
  replyToId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetUserByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPostArgs = {
  id: Scalars['ID']['input'];
};

export type QueryResponseMultiple = {
  __typename?: 'QueryResponseMultiple';
  data?: Maybe<Array<Maybe<User>>>;
};

export type QueryResponseMultipleUnion = Error | QueryResponseMultiple;

export type QueryResponseSingle = {
  __typename?: 'QueryResponseSingle';
  data?: Maybe<User>;
};

export type QueryResponseSingleUnion = Error | QueryResponseSingle;

export type Tag = {
  __typename?: 'Tag';
  name: Scalars['String']['output'];
};

export type TagInput = {
  __typename?: 'TagInput';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type TagResponseMultiple = {
  __typename?: 'TagResponseMultiple';
  data?: Maybe<Array<Maybe<TagInput>>>;
};

export type TagResponseMultipleUnion = Error | TagResponseMultiple;

export type TagResponseSingle = {
  __typename?: 'TagResponseSingle';
  data?: Maybe<TagInput>;
};

export type TagResponseSingleUnion = Error | TagResponseSingle;

export type User = {
  __typename?: 'User';
  comments?: Maybe<Array<Maybe<Comment>>>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<Array<Maybe<Post>>>;
};

export type GetCommentsByPostIdQueryVariables = Exact<{
  postId: Scalars['ID']['input'];
}>;


export type GetCommentsByPostIdQuery = { __typename?: 'Query', commentsByPostId: { __typename?: 'CommentResponseMultiple', data?: Array<{ __typename?: 'Comment', postId: string, replyToId?: string | null, authorId: string, content: string, createdAt: string, updatedAt: string, likesUserIds: Array<string>, replyIds: Array<string> } | null> | null } | { __typename?: 'Error', error: string } };

export type GetCommentsByReplyToIdQueryVariables = Exact<{
  replyToId: Scalars['ID']['input'];
}>;


export type GetCommentsByReplyToIdQuery = { __typename?: 'Query', commentsByReplyToId: { __typename?: 'CommentResponseMultiple', data?: Array<{ __typename?: 'Comment', postId: string, replyToId?: string | null, authorId: string, content: string, createdAt: string, updatedAt: string, likesUserIds: Array<string>, replyIds: Array<string> } | null> | null } | { __typename?: 'Error', error: string } };

export type GetCommentsByAuthorIdQueryVariables = Exact<{
  authorId: Scalars['ID']['input'];
}>;


export type GetCommentsByAuthorIdQuery = { __typename?: 'Query', commentsByAuthorId: { __typename?: 'CommentResponseMultiple', data?: Array<{ __typename?: 'Comment', postId: string, replyToId?: string | null, authorId: string, content: string, createdAt: string, updatedAt: string, likesUserIds: Array<string>, replyIds: Array<string> } | null> | null } | { __typename?: 'Error', error: string } };

export type GetCommentByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetCommentByIdQuery = { __typename?: 'Query', comment: { __typename?: 'CommentResponseSingle', data?: { __typename?: 'Comment', postId: string, replyToId?: string | null, authorId: string, content: string, createdAt: string, updatedAt: string, likesUserIds: Array<string>, replyIds: Array<string> } | null } | { __typename?: 'Error', error: string } };

export type CreateNewCommentMutationVariables = Exact<{
  postId: Scalars['ID']['input'];
  replyToId?: InputMaybe<Scalars['ID']['input']>;
  content: Scalars['String']['input'];
  authorId: Scalars['ID']['input'];
}>;


export type CreateNewCommentMutation = { __typename?: 'Mutation', createComment: { __typename?: 'Error', error: string } | { __typename?: 'MutationCommentResponse', data?: { __typename?: 'Comment', postId: string, replyToId?: string | null, authorId: string, content: string, createdAt: string, updatedAt: string, likesUserIds: Array<string>, replyIds: Array<string> } | null } };

export type UpdateExistingCommentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  content: Scalars['String']['input'];
}>;


export type UpdateExistingCommentMutation = { __typename?: 'Mutation', updateComment: { __typename?: 'Error', error: string } | { __typename?: 'MutationCommentResponse', data?: { __typename?: 'Comment', postId: string, replyToId?: string | null, authorId: string, content: string, createdAt: string, updatedAt: string, likesUserIds: Array<string>, replyIds: Array<string> } | null } };

export type DeleteExistingCommentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteExistingCommentMutation = { __typename?: 'Mutation', deleteComment: { __typename?: 'Error', error: string } | { __typename?: 'MutationCommentResponse', data?: { __typename?: 'Comment', postId: string, replyToId?: string | null, authorId: string, content: string, createdAt: string, updatedAt: string, likesUserIds: Array<string>, replyIds: Array<string> } | null } };

export type LikeACommentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type LikeACommentMutation = { __typename?: 'Mutation', likeComment: { __typename?: 'Error', error: string } | { __typename?: 'MutationCommentResponse', data?: { __typename?: 'Comment', postId: string, replyToId?: string | null, authorId: string, content: string, createdAt: string, updatedAt: string, likesUserIds: Array<string>, replyIds: Array<string> } | null } };

export type UnlikeACommentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type UnlikeACommentMutation = { __typename?: 'Mutation', unlikeComment: { __typename?: 'Error', error: string } | { __typename?: 'MutationCommentResponse', data?: { __typename?: 'Comment', postId: string, replyToId?: string | null, authorId: string, content: string, createdAt: string, updatedAt: string, likesUserIds: Array<string>, replyIds: Array<string> } | null } };

export type CommentDetailsFragment = { __typename?: 'Comment', postId: string, replyToId?: string | null, authorId: string, content: string, createdAt: string, updatedAt: string, likesUserIds: Array<string>, replyIds: Array<string> };

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostsQuery = { __typename?: 'Query', posts: { __typename?: 'Error', error: string } | { __typename?: 'PostResponseMultiple', data?: Array<{ __typename?: 'ExtendedPost', _id: string, post: { __typename?: 'Post', userId: string, title: string, content: string, author: string, createdAt: string, updatedAt: string, tags: Array<string>, commentIds: Array<string> } } | null> | null } };

export type GetPostByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetPostByIdQuery = { __typename?: 'Query', post: { __typename?: 'Error', error: string } | { __typename?: 'PostResponseSingle', data?: { __typename?: 'Post', userId: string, title: string, content: string, author: string, createdAt: string, updatedAt: string, tags: Array<string>, commentIds: Array<string> } | null } };

export type CreateNewPostMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  content: Scalars['String']['input'];
  author: Scalars['String']['input'];
  tags: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type CreateNewPostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Error', error: string } | { __typename?: 'MutationPostResponse', data?: { __typename?: 'Post', userId: string, title: string, content: string, author: string, createdAt: string, updatedAt: string, tags: Array<string>, commentIds: Array<string> } | null } };

export type UpdateExistingPostMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  author?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type UpdateExistingPostMutation = { __typename?: 'Mutation', updatePost: { __typename?: 'Error', error: string } | { __typename?: 'MutationPostResponse', data?: { __typename?: 'Post', userId: string, title: string, content: string, author: string, createdAt: string, updatedAt: string, tags: Array<string>, commentIds: Array<string> } | null } };

export type DeletePostByIdMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeletePostByIdMutation = { __typename?: 'Mutation', deletePost: { __typename?: 'Error', error: string } | { __typename?: 'MutationPostResponse', data?: { __typename?: 'Post', userId: string, title: string, content: string, author: string, createdAt: string, updatedAt: string, tags: Array<string>, commentIds: Array<string> } | null } };

export type GetAllTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTagsQuery = { __typename?: 'Query', tags: { __typename?: 'Error', error: string } | { __typename?: 'TagResponseMultiple', data?: Array<{ __typename?: 'TagInput', id: string, name: string } | null> | null } };

export type CreateNewTagMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CreateNewTagMutation = { __typename?: 'Mutation', createTag: { __typename?: 'Error', error: string } | { __typename?: 'MutationTagResponse', data?: { __typename?: 'TagInput', id: string, name: string } | null } };

export type UpdateExistingTagMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type UpdateExistingTagMutation = { __typename?: 'Mutation', updateTag: { __typename?: 'Error', error: string } | { __typename?: 'MutationTagResponse', data?: { __typename?: 'TagInput', id: string, name: string } | null } };

export type DeleteExistingTagMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteExistingTagMutation = { __typename?: 'Mutation', deleteTag: { __typename?: 'Error', error: string } | { __typename?: 'MutationTagResponse', data?: { __typename?: 'TagInput', id: string, name: string } | null } };

export type TagDetailsFragment = { __typename?: 'TagInput', id: string, name: string };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetUserByIdQuery = { __typename?: 'Query', getUserById?: { __typename?: 'Error', error: string } | { __typename?: 'QueryResponseSingle', data?: { __typename?: 'User', firstName: string, lastName?: string | null, email: string, posts?: Array<{ __typename?: 'Post', title: string, content: string, author: string, tags: Array<string> } | null> | null, comments?: Array<{ __typename?: 'Comment', postId: string } | null> | null } | null } | null };

export type GetUserByEmailQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type GetUserByEmailQuery = { __typename?: 'Query', getUserByEmail?: { __typename?: 'Error', error: string } | { __typename?: 'QueryResponseSingle', data?: { __typename?: 'User', firstName: string, lastName?: string | null, email: string, posts?: Array<{ __typename?: 'Post', title: string, content: string, author: string, tags: Array<string> } | null> | null, comments?: Array<{ __typename?: 'Comment', postId: string } | null> | null } | null } | null };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', getAllUsers?: { __typename?: 'Error', error: string } | { __typename?: 'QueryResponseMultiple', data?: Array<{ __typename?: 'User', firstName: string, lastName?: string | null, email: string, posts?: Array<{ __typename?: 'Post', title: string, content: string, author: string, tags: Array<string> } | null> | null, comments?: Array<{ __typename?: 'Comment', postId: string } | null> | null } | null> | null } | null };

export type SignUpGoogleMutationVariables = Exact<{
  accessToken: Scalars['String']['input'];
}>;


export type SignUpGoogleMutation = { __typename?: 'Mutation', signUpGoogle?: { __typename?: 'AuthResponse', accessToken: string, refreshToken?: string | null, userId: string } | { __typename?: 'Error', error: string } | null };

export type SignOutGoogleMutationVariables = Exact<{ [key: string]: never; }>;


export type SignOutGoogleMutation = { __typename?: 'Mutation', signOutGoogle?: { __typename?: 'Error', error: string } | { __typename?: 'MutationResponseBoolean', data: boolean } | null };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'Error', error: string } | { __typename?: 'MutationResponse', data?: { __typename?: 'User', firstName: string, lastName?: string | null, email: string, posts?: Array<{ __typename?: 'Post', title: string, content: string, author: string, tags: Array<string> } | null> | null, comments?: Array<{ __typename?: 'Comment', postId: string } | null> | null } | null } | null };

export type DeleteUserByIdMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteUserByIdMutation = { __typename?: 'Mutation', deleteUserById?: { __typename?: 'Error', error: string } | { __typename?: 'MutationResponseBoolean', data: boolean } | null };

export type DeleteUserByEmailMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type DeleteUserByEmailMutation = { __typename?: 'Mutation', deleteUserByEmail?: { __typename?: 'Error', error: string } | { __typename?: 'MutationResponseBoolean', data: boolean } | null };

export type UserFieldsFragment = { __typename?: 'User', firstName: string, lastName?: string | null, email: string, posts?: Array<{ __typename?: 'Post', title: string, content: string, author: string, tags: Array<string> } | null> | null, comments?: Array<{ __typename?: 'Comment', postId: string } | null> | null };

export const CommentDetailsFragmentDoc = gql`
    fragment CommentDetails on Comment {
  postId
  replyToId
  authorId
  content
  createdAt
  updatedAt
  likesUserIds
  replyIds
}
    `;
export const TagDetailsFragmentDoc = gql`
    fragment TagDetails on TagInput {
  id
  name
}
    `;
export const UserFieldsFragmentDoc = gql`
    fragment UserFields on User {
  firstName
  lastName
  email
  posts {
    title
    content
    author
    tags
  }
  comments {
    postId
  }
}
    `;
export const GetCommentsByPostIdDocument = gql`
    query GetCommentsByPostId($postId: ID!) {
  commentsByPostId(postId: $postId) {
    ... on CommentResponseMultiple {
      data {
        postId
        replyToId
        authorId
        content
        createdAt
        updatedAt
        likesUserIds
        replyIds
      }
    }
    ... on Error {
      error
    }
  }
}
    `;

/**
 * __useGetCommentsByPostIdQuery__
 *
 * To run a query within a React component, call `useGetCommentsByPostIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentsByPostIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentsByPostIdQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useGetCommentsByPostIdQuery(baseOptions: Apollo.QueryHookOptions<GetCommentsByPostIdQuery, GetCommentsByPostIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommentsByPostIdQuery, GetCommentsByPostIdQueryVariables>(GetCommentsByPostIdDocument, options);
      }
export function useGetCommentsByPostIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentsByPostIdQuery, GetCommentsByPostIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommentsByPostIdQuery, GetCommentsByPostIdQueryVariables>(GetCommentsByPostIdDocument, options);
        }
export type GetCommentsByPostIdQueryHookResult = ReturnType<typeof useGetCommentsByPostIdQuery>;
export type GetCommentsByPostIdLazyQueryHookResult = ReturnType<typeof useGetCommentsByPostIdLazyQuery>;
export type GetCommentsByPostIdQueryResult = Apollo.QueryResult<GetCommentsByPostIdQuery, GetCommentsByPostIdQueryVariables>;
export const GetCommentsByReplyToIdDocument = gql`
    query GetCommentsByReplyToId($replyToId: ID!) {
  commentsByReplyToId(replyToId: $replyToId) {
    ... on CommentResponseMultiple {
      data {
        postId
        replyToId
        authorId
        content
        createdAt
        updatedAt
        likesUserIds
        replyIds
      }
    }
    ... on Error {
      error
    }
  }
}
    `;

/**
 * __useGetCommentsByReplyToIdQuery__
 *
 * To run a query within a React component, call `useGetCommentsByReplyToIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentsByReplyToIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentsByReplyToIdQuery({
 *   variables: {
 *      replyToId: // value for 'replyToId'
 *   },
 * });
 */
export function useGetCommentsByReplyToIdQuery(baseOptions: Apollo.QueryHookOptions<GetCommentsByReplyToIdQuery, GetCommentsByReplyToIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommentsByReplyToIdQuery, GetCommentsByReplyToIdQueryVariables>(GetCommentsByReplyToIdDocument, options);
      }
export function useGetCommentsByReplyToIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentsByReplyToIdQuery, GetCommentsByReplyToIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommentsByReplyToIdQuery, GetCommentsByReplyToIdQueryVariables>(GetCommentsByReplyToIdDocument, options);
        }
export type GetCommentsByReplyToIdQueryHookResult = ReturnType<typeof useGetCommentsByReplyToIdQuery>;
export type GetCommentsByReplyToIdLazyQueryHookResult = ReturnType<typeof useGetCommentsByReplyToIdLazyQuery>;
export type GetCommentsByReplyToIdQueryResult = Apollo.QueryResult<GetCommentsByReplyToIdQuery, GetCommentsByReplyToIdQueryVariables>;
export const GetCommentsByAuthorIdDocument = gql`
    query GetCommentsByAuthorId($authorId: ID!) {
  commentsByAuthorId(authorId: $authorId) {
    ... on CommentResponseMultiple {
      data {
        postId
        replyToId
        authorId
        content
        createdAt
        updatedAt
        likesUserIds
        replyIds
      }
    }
    ... on Error {
      error
    }
  }
}
    `;

/**
 * __useGetCommentsByAuthorIdQuery__
 *
 * To run a query within a React component, call `useGetCommentsByAuthorIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentsByAuthorIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentsByAuthorIdQuery({
 *   variables: {
 *      authorId: // value for 'authorId'
 *   },
 * });
 */
export function useGetCommentsByAuthorIdQuery(baseOptions: Apollo.QueryHookOptions<GetCommentsByAuthorIdQuery, GetCommentsByAuthorIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommentsByAuthorIdQuery, GetCommentsByAuthorIdQueryVariables>(GetCommentsByAuthorIdDocument, options);
      }
export function useGetCommentsByAuthorIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentsByAuthorIdQuery, GetCommentsByAuthorIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommentsByAuthorIdQuery, GetCommentsByAuthorIdQueryVariables>(GetCommentsByAuthorIdDocument, options);
        }
export type GetCommentsByAuthorIdQueryHookResult = ReturnType<typeof useGetCommentsByAuthorIdQuery>;
export type GetCommentsByAuthorIdLazyQueryHookResult = ReturnType<typeof useGetCommentsByAuthorIdLazyQuery>;
export type GetCommentsByAuthorIdQueryResult = Apollo.QueryResult<GetCommentsByAuthorIdQuery, GetCommentsByAuthorIdQueryVariables>;
export const GetCommentByIdDocument = gql`
    query GetCommentById($id: ID!) {
  comment(id: $id) {
    ... on CommentResponseSingle {
      data {
        postId
        replyToId
        authorId
        content
        createdAt
        updatedAt
        likesUserIds
        replyIds
      }
    }
    ... on Error {
      error
    }
  }
}
    `;

/**
 * __useGetCommentByIdQuery__
 *
 * To run a query within a React component, call `useGetCommentByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCommentByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCommentByIdQuery, GetCommentByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommentByIdQuery, GetCommentByIdQueryVariables>(GetCommentByIdDocument, options);
      }
export function useGetCommentByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentByIdQuery, GetCommentByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommentByIdQuery, GetCommentByIdQueryVariables>(GetCommentByIdDocument, options);
        }
export type GetCommentByIdQueryHookResult = ReturnType<typeof useGetCommentByIdQuery>;
export type GetCommentByIdLazyQueryHookResult = ReturnType<typeof useGetCommentByIdLazyQuery>;
export type GetCommentByIdQueryResult = Apollo.QueryResult<GetCommentByIdQuery, GetCommentByIdQueryVariables>;
export const CreateNewCommentDocument = gql`
    mutation CreateNewComment($postId: ID!, $replyToId: ID, $content: String!, $authorId: ID!) {
  createComment(
    postId: $postId
    replyToId: $replyToId
    content: $content
    authorId: $authorId
  ) {
    ... on MutationCommentResponse {
      data {
        postId
        replyToId
        authorId
        content
        createdAt
        updatedAt
        likesUserIds
        replyIds
      }
    }
    ... on Error {
      error
    }
  }
}
    `;
export type CreateNewCommentMutationFn = Apollo.MutationFunction<CreateNewCommentMutation, CreateNewCommentMutationVariables>;

/**
 * __useCreateNewCommentMutation__
 *
 * To run a mutation, you first call `useCreateNewCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewCommentMutation, { data, loading, error }] = useCreateNewCommentMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      replyToId: // value for 'replyToId'
 *      content: // value for 'content'
 *      authorId: // value for 'authorId'
 *   },
 * });
 */
export function useCreateNewCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateNewCommentMutation, CreateNewCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNewCommentMutation, CreateNewCommentMutationVariables>(CreateNewCommentDocument, options);
      }
export type CreateNewCommentMutationHookResult = ReturnType<typeof useCreateNewCommentMutation>;
export type CreateNewCommentMutationResult = Apollo.MutationResult<CreateNewCommentMutation>;
export type CreateNewCommentMutationOptions = Apollo.BaseMutationOptions<CreateNewCommentMutation, CreateNewCommentMutationVariables>;
export const UpdateExistingCommentDocument = gql`
    mutation UpdateExistingComment($id: ID!, $content: String!) {
  updateComment(id: $id, content: $content) {
    ... on MutationCommentResponse {
      data {
        postId
        replyToId
        authorId
        content
        createdAt
        updatedAt
        likesUserIds
        replyIds
      }
    }
    ... on Error {
      error
    }
  }
}
    `;
export type UpdateExistingCommentMutationFn = Apollo.MutationFunction<UpdateExistingCommentMutation, UpdateExistingCommentMutationVariables>;

/**
 * __useUpdateExistingCommentMutation__
 *
 * To run a mutation, you first call `useUpdateExistingCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateExistingCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateExistingCommentMutation, { data, loading, error }] = useUpdateExistingCommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useUpdateExistingCommentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateExistingCommentMutation, UpdateExistingCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateExistingCommentMutation, UpdateExistingCommentMutationVariables>(UpdateExistingCommentDocument, options);
      }
export type UpdateExistingCommentMutationHookResult = ReturnType<typeof useUpdateExistingCommentMutation>;
export type UpdateExistingCommentMutationResult = Apollo.MutationResult<UpdateExistingCommentMutation>;
export type UpdateExistingCommentMutationOptions = Apollo.BaseMutationOptions<UpdateExistingCommentMutation, UpdateExistingCommentMutationVariables>;
export const DeleteExistingCommentDocument = gql`
    mutation DeleteExistingComment($id: ID!) {
  deleteComment(id: $id) {
    ... on MutationCommentResponse {
      data {
        postId
        replyToId
        authorId
        content
        createdAt
        updatedAt
        likesUserIds
        replyIds
      }
    }
    ... on Error {
      error
    }
  }
}
    `;
export type DeleteExistingCommentMutationFn = Apollo.MutationFunction<DeleteExistingCommentMutation, DeleteExistingCommentMutationVariables>;

/**
 * __useDeleteExistingCommentMutation__
 *
 * To run a mutation, you first call `useDeleteExistingCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteExistingCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteExistingCommentMutation, { data, loading, error }] = useDeleteExistingCommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteExistingCommentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteExistingCommentMutation, DeleteExistingCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteExistingCommentMutation, DeleteExistingCommentMutationVariables>(DeleteExistingCommentDocument, options);
      }
export type DeleteExistingCommentMutationHookResult = ReturnType<typeof useDeleteExistingCommentMutation>;
export type DeleteExistingCommentMutationResult = Apollo.MutationResult<DeleteExistingCommentMutation>;
export type DeleteExistingCommentMutationOptions = Apollo.BaseMutationOptions<DeleteExistingCommentMutation, DeleteExistingCommentMutationVariables>;
export const LikeACommentDocument = gql`
    mutation LikeAComment($id: ID!) {
  likeComment(id: $id) {
    ... on MutationCommentResponse {
      data {
        postId
        replyToId
        authorId
        content
        createdAt
        updatedAt
        likesUserIds
        replyIds
      }
    }
    ... on Error {
      error
    }
  }
}
    `;
export type LikeACommentMutationFn = Apollo.MutationFunction<LikeACommentMutation, LikeACommentMutationVariables>;

/**
 * __useLikeACommentMutation__
 *
 * To run a mutation, you first call `useLikeACommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeACommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeACommentMutation, { data, loading, error }] = useLikeACommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLikeACommentMutation(baseOptions?: Apollo.MutationHookOptions<LikeACommentMutation, LikeACommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikeACommentMutation, LikeACommentMutationVariables>(LikeACommentDocument, options);
      }
export type LikeACommentMutationHookResult = ReturnType<typeof useLikeACommentMutation>;
export type LikeACommentMutationResult = Apollo.MutationResult<LikeACommentMutation>;
export type LikeACommentMutationOptions = Apollo.BaseMutationOptions<LikeACommentMutation, LikeACommentMutationVariables>;
export const UnlikeACommentDocument = gql`
    mutation UnlikeAComment($id: ID!) {
  unlikeComment(id: $id) {
    ... on MutationCommentResponse {
      data {
        postId
        replyToId
        authorId
        content
        createdAt
        updatedAt
        likesUserIds
        replyIds
      }
    }
    ... on Error {
      error
    }
  }
}
    `;
export type UnlikeACommentMutationFn = Apollo.MutationFunction<UnlikeACommentMutation, UnlikeACommentMutationVariables>;

/**
 * __useUnlikeACommentMutation__
 *
 * To run a mutation, you first call `useUnlikeACommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnlikeACommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unlikeACommentMutation, { data, loading, error }] = useUnlikeACommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUnlikeACommentMutation(baseOptions?: Apollo.MutationHookOptions<UnlikeACommentMutation, UnlikeACommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnlikeACommentMutation, UnlikeACommentMutationVariables>(UnlikeACommentDocument, options);
      }
export type UnlikeACommentMutationHookResult = ReturnType<typeof useUnlikeACommentMutation>;
export type UnlikeACommentMutationResult = Apollo.MutationResult<UnlikeACommentMutation>;
export type UnlikeACommentMutationOptions = Apollo.BaseMutationOptions<UnlikeACommentMutation, UnlikeACommentMutationVariables>;
export const GetAllPostsDocument = gql`
    query GetAllPosts {
  posts {
    ... on PostResponseMultiple {
      data {
        _id
        post {
          userId
          title
          content
          author
          createdAt
          updatedAt
          tags
          commentIds
        }
      }
    }
    ... on Error {
      error
    }
  }
}
    `;

/**
 * __useGetAllPostsQuery__
 *
 * To run a query within a React component, call `useGetAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, options);
      }
export function useGetAllPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, options);
        }
export type GetAllPostsQueryHookResult = ReturnType<typeof useGetAllPostsQuery>;
export type GetAllPostsLazyQueryHookResult = ReturnType<typeof useGetAllPostsLazyQuery>;
export type GetAllPostsQueryResult = Apollo.QueryResult<GetAllPostsQuery, GetAllPostsQueryVariables>;
export const GetPostByIdDocument = gql`
    query GetPostById($id: ID!) {
  post(id: $id) {
    ... on PostResponseSingle {
      data {
        userId
        title
        content
        author
        createdAt
        updatedAt
        tags
        commentIds
      }
    }
    ... on Error {
      error
    }
  }
}
    `;

/**
 * __useGetPostByIdQuery__
 *
 * To run a query within a React component, call `useGetPostByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPostByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPostByIdQuery, GetPostByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostByIdQuery, GetPostByIdQueryVariables>(GetPostByIdDocument, options);
      }
export function useGetPostByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostByIdQuery, GetPostByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostByIdQuery, GetPostByIdQueryVariables>(GetPostByIdDocument, options);
        }
export type GetPostByIdQueryHookResult = ReturnType<typeof useGetPostByIdQuery>;
export type GetPostByIdLazyQueryHookResult = ReturnType<typeof useGetPostByIdLazyQuery>;
export type GetPostByIdQueryResult = Apollo.QueryResult<GetPostByIdQuery, GetPostByIdQueryVariables>;
export const CreateNewPostDocument = gql`
    mutation CreateNewPost($userId: ID!, $title: String!, $content: String!, $author: String!, $tags: [String!]!) {
  createPost(
    userId: $userId
    title: $title
    content: $content
    author: $author
    tags: $tags
  ) {
    ... on MutationPostResponse {
      data {
        userId
        title
        content
        author
        createdAt
        updatedAt
        tags
        commentIds
      }
    }
    ... on Error {
      error
    }
  }
}
    `;
export type CreateNewPostMutationFn = Apollo.MutationFunction<CreateNewPostMutation, CreateNewPostMutationVariables>;

/**
 * __useCreateNewPostMutation__
 *
 * To run a mutation, you first call `useCreateNewPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewPostMutation, { data, loading, error }] = useCreateNewPostMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      title: // value for 'title'
 *      content: // value for 'content'
 *      author: // value for 'author'
 *      tags: // value for 'tags'
 *   },
 * });
 */
export function useCreateNewPostMutation(baseOptions?: Apollo.MutationHookOptions<CreateNewPostMutation, CreateNewPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNewPostMutation, CreateNewPostMutationVariables>(CreateNewPostDocument, options);
      }
export type CreateNewPostMutationHookResult = ReturnType<typeof useCreateNewPostMutation>;
export type CreateNewPostMutationResult = Apollo.MutationResult<CreateNewPostMutation>;
export type CreateNewPostMutationOptions = Apollo.BaseMutationOptions<CreateNewPostMutation, CreateNewPostMutationVariables>;
export const UpdateExistingPostDocument = gql`
    mutation UpdateExistingPost($id: ID!, $title: String, $content: String, $author: String, $tags: [String!]) {
  updatePost(
    id: $id
    title: $title
    content: $content
    author: $author
    tags: $tags
  ) {
    ... on MutationPostResponse {
      data {
        userId
        title
        content
        author
        createdAt
        updatedAt
        tags
        commentIds
      }
    }
    ... on Error {
      error
    }
  }
}
    `;
export type UpdateExistingPostMutationFn = Apollo.MutationFunction<UpdateExistingPostMutation, UpdateExistingPostMutationVariables>;

/**
 * __useUpdateExistingPostMutation__
 *
 * To run a mutation, you first call `useUpdateExistingPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateExistingPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateExistingPostMutation, { data, loading, error }] = useUpdateExistingPostMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      content: // value for 'content'
 *      author: // value for 'author'
 *      tags: // value for 'tags'
 *   },
 * });
 */
export function useUpdateExistingPostMutation(baseOptions?: Apollo.MutationHookOptions<UpdateExistingPostMutation, UpdateExistingPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateExistingPostMutation, UpdateExistingPostMutationVariables>(UpdateExistingPostDocument, options);
      }
export type UpdateExistingPostMutationHookResult = ReturnType<typeof useUpdateExistingPostMutation>;
export type UpdateExistingPostMutationResult = Apollo.MutationResult<UpdateExistingPostMutation>;
export type UpdateExistingPostMutationOptions = Apollo.BaseMutationOptions<UpdateExistingPostMutation, UpdateExistingPostMutationVariables>;
export const DeletePostByIdDocument = gql`
    mutation DeletePostById($id: ID!) {
  deletePost(id: $id) {
    ... on MutationPostResponse {
      data {
        userId
        title
        content
        author
        createdAt
        updatedAt
        tags
        commentIds
      }
    }
    ... on Error {
      error
    }
  }
}
    `;
export type DeletePostByIdMutationFn = Apollo.MutationFunction<DeletePostByIdMutation, DeletePostByIdMutationVariables>;

/**
 * __useDeletePostByIdMutation__
 *
 * To run a mutation, you first call `useDeletePostByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostByIdMutation, { data, loading, error }] = useDeletePostByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePostByIdMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostByIdMutation, DeletePostByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostByIdMutation, DeletePostByIdMutationVariables>(DeletePostByIdDocument, options);
      }
export type DeletePostByIdMutationHookResult = ReturnType<typeof useDeletePostByIdMutation>;
export type DeletePostByIdMutationResult = Apollo.MutationResult<DeletePostByIdMutation>;
export type DeletePostByIdMutationOptions = Apollo.BaseMutationOptions<DeletePostByIdMutation, DeletePostByIdMutationVariables>;
export const GetAllTagsDocument = gql`
    query GetAllTags {
  tags {
    ... on TagResponseMultiple {
      data {
        id
        name
      }
    }
    ... on Error {
      error
    }
  }
}
    `;

/**
 * __useGetAllTagsQuery__
 *
 * To run a query within a React component, call `useGetAllTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTagsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTagsQuery, GetAllTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTagsQuery, GetAllTagsQueryVariables>(GetAllTagsDocument, options);
      }
export function useGetAllTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTagsQuery, GetAllTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTagsQuery, GetAllTagsQueryVariables>(GetAllTagsDocument, options);
        }
export type GetAllTagsQueryHookResult = ReturnType<typeof useGetAllTagsQuery>;
export type GetAllTagsLazyQueryHookResult = ReturnType<typeof useGetAllTagsLazyQuery>;
export type GetAllTagsQueryResult = Apollo.QueryResult<GetAllTagsQuery, GetAllTagsQueryVariables>;
export const CreateNewTagDocument = gql`
    mutation CreateNewTag($name: String!) {
  createTag(name: $name) {
    ... on MutationTagResponse {
      data {
        id
        name
      }
    }
    ... on Error {
      error
    }
  }
}
    `;
export type CreateNewTagMutationFn = Apollo.MutationFunction<CreateNewTagMutation, CreateNewTagMutationVariables>;

/**
 * __useCreateNewTagMutation__
 *
 * To run a mutation, you first call `useCreateNewTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewTagMutation, { data, loading, error }] = useCreateNewTagMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateNewTagMutation(baseOptions?: Apollo.MutationHookOptions<CreateNewTagMutation, CreateNewTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNewTagMutation, CreateNewTagMutationVariables>(CreateNewTagDocument, options);
      }
export type CreateNewTagMutationHookResult = ReturnType<typeof useCreateNewTagMutation>;
export type CreateNewTagMutationResult = Apollo.MutationResult<CreateNewTagMutation>;
export type CreateNewTagMutationOptions = Apollo.BaseMutationOptions<CreateNewTagMutation, CreateNewTagMutationVariables>;
export const UpdateExistingTagDocument = gql`
    mutation UpdateExistingTag($id: ID!, $name: String!) {
  updateTag(id: $id, name: $name) {
    ... on MutationTagResponse {
      data {
        id
        name
      }
    }
    ... on Error {
      error
    }
  }
}
    `;
export type UpdateExistingTagMutationFn = Apollo.MutationFunction<UpdateExistingTagMutation, UpdateExistingTagMutationVariables>;

/**
 * __useUpdateExistingTagMutation__
 *
 * To run a mutation, you first call `useUpdateExistingTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateExistingTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateExistingTagMutation, { data, loading, error }] = useUpdateExistingTagMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateExistingTagMutation(baseOptions?: Apollo.MutationHookOptions<UpdateExistingTagMutation, UpdateExistingTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateExistingTagMutation, UpdateExistingTagMutationVariables>(UpdateExistingTagDocument, options);
      }
export type UpdateExistingTagMutationHookResult = ReturnType<typeof useUpdateExistingTagMutation>;
export type UpdateExistingTagMutationResult = Apollo.MutationResult<UpdateExistingTagMutation>;
export type UpdateExistingTagMutationOptions = Apollo.BaseMutationOptions<UpdateExistingTagMutation, UpdateExistingTagMutationVariables>;
export const DeleteExistingTagDocument = gql`
    mutation DeleteExistingTag($id: ID!) {
  deleteTag(id: $id) {
    ... on MutationTagResponse {
      data {
        id
        name
      }
    }
    ... on Error {
      error
    }
  }
}
    `;
export type DeleteExistingTagMutationFn = Apollo.MutationFunction<DeleteExistingTagMutation, DeleteExistingTagMutationVariables>;

/**
 * __useDeleteExistingTagMutation__
 *
 * To run a mutation, you first call `useDeleteExistingTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteExistingTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteExistingTagMutation, { data, loading, error }] = useDeleteExistingTagMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteExistingTagMutation(baseOptions?: Apollo.MutationHookOptions<DeleteExistingTagMutation, DeleteExistingTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteExistingTagMutation, DeleteExistingTagMutationVariables>(DeleteExistingTagDocument, options);
      }
export type DeleteExistingTagMutationHookResult = ReturnType<typeof useDeleteExistingTagMutation>;
export type DeleteExistingTagMutationResult = Apollo.MutationResult<DeleteExistingTagMutation>;
export type DeleteExistingTagMutationOptions = Apollo.BaseMutationOptions<DeleteExistingTagMutation, DeleteExistingTagMutationVariables>;
export const GetUserByIdDocument = gql`
    query GetUserById($id: ID!) {
  getUserById(id: $id) {
    ... on QueryResponseSingle {
      data {
        ...UserFields
      }
    }
    ... on Error {
      error
    }
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const GetUserByEmailDocument = gql`
    query GetUserByEmail($email: String!) {
  getUserByEmail(email: $email) {
    ... on QueryResponseSingle {
      data {
        ...UserFields
      }
    }
    ... on Error {
      error
    }
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useGetUserByEmailQuery__
 *
 * To run a query within a React component, call `useGetUserByEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetUserByEmailQuery(baseOptions: Apollo.QueryHookOptions<GetUserByEmailQuery, GetUserByEmailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByEmailQuery, GetUserByEmailQueryVariables>(GetUserByEmailDocument, options);
      }
export function useGetUserByEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByEmailQuery, GetUserByEmailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByEmailQuery, GetUserByEmailQueryVariables>(GetUserByEmailDocument, options);
        }
export type GetUserByEmailQueryHookResult = ReturnType<typeof useGetUserByEmailQuery>;
export type GetUserByEmailLazyQueryHookResult = ReturnType<typeof useGetUserByEmailLazyQuery>;
export type GetUserByEmailQueryResult = Apollo.QueryResult<GetUserByEmailQuery, GetUserByEmailQueryVariables>;
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  getAllUsers {
    ... on QueryResponseMultiple {
      data {
        ...UserFields
      }
    }
    ... on Error {
      error
    }
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const SignUpGoogleDocument = gql`
    mutation SignUpGoogle($accessToken: String!) {
  signUpGoogle(accessToken: $accessToken) {
    ... on AuthResponse {
      accessToken
      refreshToken
      userId
    }
    ... on Error {
      error
    }
  }
}
    `;
export type SignUpGoogleMutationFn = Apollo.MutationFunction<SignUpGoogleMutation, SignUpGoogleMutationVariables>;

/**
 * __useSignUpGoogleMutation__
 *
 * To run a mutation, you first call `useSignUpGoogleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpGoogleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpGoogleMutation, { data, loading, error }] = useSignUpGoogleMutation({
 *   variables: {
 *      accessToken: // value for 'accessToken'
 *   },
 * });
 */
export function useSignUpGoogleMutation(baseOptions?: Apollo.MutationHookOptions<SignUpGoogleMutation, SignUpGoogleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpGoogleMutation, SignUpGoogleMutationVariables>(SignUpGoogleDocument, options);
      }
export type SignUpGoogleMutationHookResult = ReturnType<typeof useSignUpGoogleMutation>;
export type SignUpGoogleMutationResult = Apollo.MutationResult<SignUpGoogleMutation>;
export type SignUpGoogleMutationOptions = Apollo.BaseMutationOptions<SignUpGoogleMutation, SignUpGoogleMutationVariables>;
export const SignOutGoogleDocument = gql`
    mutation SignOutGoogle {
  signOutGoogle {
    ... on MutationResponseBoolean {
      data
    }
    ... on Error {
      error
    }
  }
}
    `;
export type SignOutGoogleMutationFn = Apollo.MutationFunction<SignOutGoogleMutation, SignOutGoogleMutationVariables>;

/**
 * __useSignOutGoogleMutation__
 *
 * To run a mutation, you first call `useSignOutGoogleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignOutGoogleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signOutGoogleMutation, { data, loading, error }] = useSignOutGoogleMutation({
 *   variables: {
 *   },
 * });
 */
export function useSignOutGoogleMutation(baseOptions?: Apollo.MutationHookOptions<SignOutGoogleMutation, SignOutGoogleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignOutGoogleMutation, SignOutGoogleMutationVariables>(SignOutGoogleDocument, options);
      }
export type SignOutGoogleMutationHookResult = ReturnType<typeof useSignOutGoogleMutation>;
export type SignOutGoogleMutationResult = Apollo.MutationResult<SignOutGoogleMutation>;
export type SignOutGoogleMutationOptions = Apollo.BaseMutationOptions<SignOutGoogleMutation, SignOutGoogleMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: ID!, $firstName: String, $lastName: String, $email: String) {
  updateUser(id: $id, firstName: $firstName, lastName: $lastName, email: $email) {
    ... on MutationResponse {
      data {
        ...UserFields
      }
    }
    ... on Error {
      error
    }
  }
}
    ${UserFieldsFragmentDoc}`;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const DeleteUserByIdDocument = gql`
    mutation DeleteUserById($id: ID!) {
  deleteUserById(id: $id) {
    ... on MutationResponseBoolean {
      data
    }
    ... on Error {
      error
    }
  }
}
    `;
export type DeleteUserByIdMutationFn = Apollo.MutationFunction<DeleteUserByIdMutation, DeleteUserByIdMutationVariables>;

/**
 * __useDeleteUserByIdMutation__
 *
 * To run a mutation, you first call `useDeleteUserByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserByIdMutation, { data, loading, error }] = useDeleteUserByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserByIdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserByIdMutation, DeleteUserByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserByIdMutation, DeleteUserByIdMutationVariables>(DeleteUserByIdDocument, options);
      }
export type DeleteUserByIdMutationHookResult = ReturnType<typeof useDeleteUserByIdMutation>;
export type DeleteUserByIdMutationResult = Apollo.MutationResult<DeleteUserByIdMutation>;
export type DeleteUserByIdMutationOptions = Apollo.BaseMutationOptions<DeleteUserByIdMutation, DeleteUserByIdMutationVariables>;
export const DeleteUserByEmailDocument = gql`
    mutation DeleteUserByEmail($email: String!) {
  deleteUserByEmail(email: $email) {
    ... on MutationResponseBoolean {
      data
    }
    ... on Error {
      error
    }
  }
}
    `;
export type DeleteUserByEmailMutationFn = Apollo.MutationFunction<DeleteUserByEmailMutation, DeleteUserByEmailMutationVariables>;

/**
 * __useDeleteUserByEmailMutation__
 *
 * To run a mutation, you first call `useDeleteUserByEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserByEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserByEmailMutation, { data, loading, error }] = useDeleteUserByEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useDeleteUserByEmailMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserByEmailMutation, DeleteUserByEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserByEmailMutation, DeleteUserByEmailMutationVariables>(DeleteUserByEmailDocument, options);
      }
export type DeleteUserByEmailMutationHookResult = ReturnType<typeof useDeleteUserByEmailMutation>;
export type DeleteUserByEmailMutationResult = Apollo.MutationResult<DeleteUserByEmailMutation>;
export type DeleteUserByEmailMutationOptions = Apollo.BaseMutationOptions<DeleteUserByEmailMutation, DeleteUserByEmailMutationVariables>;