import React from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import styles from './index.module.css';
import type {
  ExtendedPost,
  Post,
  PostResponseSingleUnion,
} from '../../../../gql/generated';
import { useGetPostByIdQuery } from '../../../../gql/generated';
import Comments from '../Comments';

type Props = {
  post?: ExtendedPost;
  smallCard?: boolean;
};

const SinglePost = ({ post, smallCard = false }: Props) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { data, loading, error } = useGetPostByIdQuery({
    variables: { id: post && post._id ? post._id : id || '' },
  });

  if (loading) return <div>Loading...</div>;
  if (error) {
    console.error(error);
    return (
      <div>
        {' '}
        Post not present. <a href="/posts">Posts page</a>
      </div>
    );
  }

  let currPost: PostResponseSingleUnion | null = data ? data.post : null;
  let postId = post && post._id ? post._id : id;

  if (!postId || !currPost || 'error' in currPost) {
    return (
      <div>
        Post not present. <a href="/posts">Posts page</a>
      </div>
    );
  }

  if (smallCard && currPost.data) {
    const first4Sentences =
      currPost.data.content.split('.').slice(0, 4).join('.') + '.';
    return (
      <Link to={`/posts/${postId}`} className={styles.container}>
        <h2>{currPost.data.title.toUpperCase()}</h2>
        <div className={styles.tags}>
          {currPost.data.tags.slice(0, 2).map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.content}>{first4Sentences}</div>
        <button className={styles.readMore}>Read More</button>
      </Link>
    );
  }

  return currPost.data ? (
    <div className={styles.fullContainer}>
      <h2 className={styles.fullTitle}>{currPost.data.title.toUpperCase()}</h2>
      <div className={styles.fullTags}>
        {currPost.data.tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
      <p>{currPost.data.content}</p>
      <Comments postId={postId} />
      <button className={styles.goBackButton} onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  ) : (
    <>
      Post not present. <a href="/posts">Posts page</a>
    </>
  );
};

export default SinglePost;
