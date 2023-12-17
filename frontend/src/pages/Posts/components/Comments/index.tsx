import React from 'react';
import { useGetCommentsByPostIdQuery } from '../../../../gql/generated';
import AddComment from './components/AddComment';
import styles from './index.module.css'; // Assuming your CSS module file is named Comments.module.css

type Props = { postId: string };

const Comments = ({ postId }: Props) => {
  const { data, loading, error, refetch } = useGetCommentsByPostIdQuery({
    variables: { postId },
  });

  if (loading) return <div>Loading...</div>;
  if (error) {
    console.error(error);
    return (
      <div className={styles.commentsContainer}>
        {' '}
        No Comments present. You can write one!
      </div>
    );
  }

  const comments = data?.commentsByPostId;

  if (comments && 'error' in comments) {
    return (
      <div className={styles.commentsContainer}>Error: {comments.error}</div>
    );
  }

  return (
    <div className={styles.commentsContainer}>
      {comments?.data &&
        comments?.data.map((comment, index) =>
          comment?.content ? (
            <div className={styles.comment} key={index}>
              {comment?.content}
            </div>
          ) : null,
        )}
      <div className={styles.addCommentSection}>
        <AddComment postId={postId} commentsRefetch={() => refetch()} />
      </div>
    </div>
  );
};

export default Comments;
