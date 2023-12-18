import React, { useState } from 'react';
import { useCreateNewCommentMutation } from '../../../../../../gql/generated';
import AuthContext from '../../../../../../contexts/AuthContext';
import styles from './index.module.css';

type AddCommentProps = { postId: string; commentsRefetch: any };

const AddComment = ({ postId, commentsRefetch }: AddCommentProps) => {
  const [createNewCommentMutation, { loading, error }] =
    useCreateNewCommentMutation();
  const contextValue = React.useContext(AuthContext);
  const state = contextValue?.state.userId;

  const [comment, setComment] = useState(''); // State to hold comment text

  const onSubmit = async () => {
    try {
      const res = await createNewCommentMutation({
        variables: {
          content: comment,
          postId: postId,
          authorId: state ? state : '',
        },
      });

      if (
        res.data?.createComment.__typename === 'Error' &&
        res.data?.createComment?.error
      ) {
        console.error(
          'Error creating comment:',
          res.data?.createComment?.error
        );
      } else {
        console.log('Comment created successfully!');
        setComment(''); // Empty the comment after successful submission
        commentsRefetch(); // Refetch comments after successful submission
      }
    } catch (error: any) {
      console.error('Error creating comment:', error.message);
    }
  };

  const isLoggedIn = !!state;

  if (isLoggedIn) {
    return (
      <div className={styles.addCommentContainer}>
        <textarea
          className={styles.textarea}
          placeholder="Add your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          disabled={loading}
        />
        <button className={styles.button} onClick={onSubmit} disabled={loading}>
          Submit Comment
        </button>
        {error && <p className={styles.errorMessage}>Error: {error.message}</p>}
      </div>
    );
  } else {
    return (
      <div>
        Please{' '}
        <a href="/loginout" className={styles.loginLink}>
          login
        </a>{' '}
        to add a comment.
      </div>
    );
  }
};

export default AddComment;
