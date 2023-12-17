import { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  useCreateNewPostMutation,
  useGetAllTagsQuery,
} from '../../gql/generated';

import type { TagDetailsFragment } from '../../gql/generated';
import Select from 'react-select';
import AuthContext from '../../contexts/AuthContext';

type Props = {};

const CreatePost = (props: Props) => {
  const { register, handleSubmit, reset, control } = useForm();
  const {
    data: tagsData,
    loading: tagsLoading,
    error,
  } = useGetAllTagsQuery({
    variables: {},
  });
  const [createNewPostMutation] = useCreateNewPostMutation();
  const contextValue = useContext(AuthContext);
  const state = contextValue?.state.userId;
  // check if route contains 'my'
  const location = window.location.href;
  const isMyPosts = location.includes('posts/my');

  if (state && isMyPosts) {
  }

  const onSubmit = async (data: any) => {
    try {
      console.log('userId', state);
      const res = await createNewPostMutation({
        variables: {
          ...data,
          userId: state,
          tags: (data.tags || []).map(
            (tag: { name: string; value: string }) => tag.value,
          ),
        },
      });

      if (
        res.data?.createPost.__typename === 'Error' &&
        res.data?.createPost?.error
      ) {
        console.log('userId', state);
        console.error('Error creating post:', res.data?.createPost?.error);
      } else {
        reset();
        console.log('Post created successfully!');
      }
    } catch (error: any) {
      console.error('Error creating post:', error.message);
    }
  };

  if (tagsLoading) return <div>Loading...</div>;
  if (error) {
    console.error(error);
    return (
      <div>
        {' '}
        No tags present. <a href="/posts/tags/create">Create a tag!</a>
      </div>
    );
  }

  const tags = tagsData?.tags;
  console.log('tags', tagsData?.tags?.__typename);

  const tagOptions =
    (tags &&
      tags.__typename === 'TagResponseMultiple' &&
      tags.data &&
      tags.data.map((tag: TagDetailsFragment | null) => ({
        value: tag?.name || '',
        label: tag?.name || '',
      }))) ||
    [];

  if (tags && 'error' in tags) {
    return <div>Error: {tags.error}</div>;
  }

  return (
    <div>
      <h1>Create a New Post</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('title', { required: true })} placeholder="Title" />
        <textarea
          {...register('content', { required: true })}
          placeholder="Content"
        />
        <input
          {...register('author', { required: true })}
          placeholder="Author"
        />

        <Controller
          name="tags"
          control={control}
          render={({ field }) => (
            <Select {...field} isMulti options={tagOptions} />
          )}
        />

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;

// import React from 'react';

// type Props = {};

// const CreatePost = (props: Props) => {
//   return <div>CreatePost</div>;
// };

// export default CreatePost;
