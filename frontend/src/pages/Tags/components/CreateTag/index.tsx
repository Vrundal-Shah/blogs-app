import React, { useState } from 'react';
import styles from '../../../../components/Tag/index.module.css';
import { FaPlus, FaCheck, FaTimes } from 'react-icons/fa';

interface CreateTagProps {
  isAnyTagEditing: boolean;
  onCreate: (name: string) => void;
}

const CreateTag: React.FC<CreateTagProps> = ({ isAnyTagEditing, onCreate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState('');

  return (
    <div className={styles.tagContainer}>
      {isEditing ? (
        <>
          <input
            className={styles.inputField}
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
          />
          <button
            className={styles.iconButton}
            onClick={() => {
              onCreate(tempName);
              setIsEditing(false);
            }}
          >
            <FaCheck />
          </button>
          <button
            className={styles.iconButton}
            onClick={() => setIsEditing(false)}
          >
            <FaTimes />
          </button>
        </>
      ) : (
        <button
          className={styles.iconButton}
          onClick={() => setIsEditing(true)}
          disabled={isAnyTagEditing}
        >
          <FaPlus />
        </button>
      )}
    </div>
  );
};

export default CreateTag;
