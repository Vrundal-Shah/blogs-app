import React from 'react';
import { useGetAllPostsQuery } from '../../gql/generated';
import { Link } from 'react-router-dom';
import Post from './components/SinglePost';

type Props = {};

const Posts = (props: Props) => {
  const { data, loading, error } = useGetAllPostsQuery();

  if (loading) return <div>Loading...</div>;
  if (error) {
    console.log('here0');
    console.error(error);
    return (
      <div>
        {' '}
        Error! {error.clientErrors[0]?.message} No Posts present.{' '}
        <Link to="/posts/create">You can write one!</Link>
      </div>
    );
  }

  const postsData = data?.posts;

  if (postsData && 'error' in postsData) {
    return <div>Error: {postsData.error}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      {postsData?.data?.map((post, index) =>
        post ? <Post key={post._id} post={post} smallCard={true} /> : null
      )}
    </div>
  );
};

export default Posts;
