import { useState } from 'react';
import styles from './index.module.css';
import { FaEdit, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';

interface TagProps {
  name: string;
  id: string;
  isEditing: boolean;
  onStartEdit: () => void;
  onCancelEdit: () => void;
  onSaveEdit: (id: string, newName: string) => void;
  onDelete: (id: string) => void;
}

const Tag: React.FC<TagProps> = ({
  name,
  id,
  isEditing,
  onStartEdit,
  onCancelEdit,
  onSaveEdit,
  onDelete,
}) => {
  const [tempName, setTempName] = useState<string>(name);

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
            onClick={() => onSaveEdit(id, tempName)}
          >
            <FaCheck />
          </button>
          <button className={styles.iconButton} onClick={onCancelEdit}>
            <FaTimes />
          </button>
        </>
      ) : (
        <>
          {name}
          <button className={styles.iconButton} onClick={onStartEdit}>
            <FaEdit />
          </button>
          <button className={styles.iconButton} onClick={() => onDelete(id)}>
            <FaTrash />
          </button>
        </>
      )}
    </div>
  );
};

export default Tag;
