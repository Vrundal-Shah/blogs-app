import { useState } from 'react';
import SingleTag from '../../components/Tag';
import {
  useGetAllTagsQuery,
  useCreateNewTagMutation,
  useUpdateExistingTagMutation,
  useDeleteExistingTagMutation,
} from '../../gql/generated';
import CreateTag from './components/CreateTag';
// import DeleteTag from './components/DeleteTag';

type Props = {};

const Tags = (props: Props) => {
  const {
    data: tagsData,
    loading: tagsLoading,
    error,
    refetch,
  } = useGetAllTagsQuery({
    variables: {},
  });

  const [
    createTag,
    { data: createData, loading: createLoading, error: createError },
  ] = useCreateNewTagMutation();
  const [
    updateExistingTagMutation,
    { data: updateData, loading: updateLoading, error: updateError },
  ] = useUpdateExistingTagMutation();
  const [
    deleteExistingTagMutation,
    { data: deleteData, loading: deleteLoading, error: deleteError },
  ] = useDeleteExistingTagMutation();
  const [editingTagIndex, setEditingTagIndex] = useState<number | null>(null);

  // handle creation of tag
  const onCreate = async (newName: string) => {
    try {
      const response = await createTag({
        variables: { name: newName },
      });
      console.log('response on tag creation', response);
      refetch();
      // #TODO Handle the response as needed
    } catch (error) {
      console.error('Error creating tag:', error);
    } finally {
      // Reset the form
      // reset();
    }
  };

  // handle update tag
  const onUpdate = async (id: string, newName: string) => {
    try {
      const response = await updateExistingTagMutation({
        variables: {
          id: id,
          name: newName,
        },
      });
      console.log('response on tag creation', response);

      if (response.data && response.data.updateTag?.__typename === 'Error') {
        console.error(
          'Server error updating tag:',
          response.data.updateTag?.error,
        );
      }
      refetch();

      // Handle success as needed
    } catch (error) {
      console.error('Error updating tag:', error);
    } finally {
      // Reset the form
      // reset();
    }
  };

  // handle delete tag
  const onDelete = async (id: string) => {
    try {
      const response = await deleteExistingTagMutation({
        variables: {
          id: id,
        },
      });
      console.log('response on tag deletion', response);

      if (response.data && response.data.deleteTag?.__typename === 'Error') {
        console.error(
          'Server error updating tag:',
          response.data.deleteTag?.error,
        );
      }
      refetch();

      // Handle success as needed
    } catch (error) {
      console.error('Error updating tag:', error);
    } finally {
      // Reset the form
      // reset();
    }
  };

  if (tagsLoading) return <div>Loading...</div>;
  if (error) {
    console.error(error);
    return <div> No tags present. Create a tag, below!</div>;
  }

  let tags = tagsData?.tags;

  if (tags && 'error' in tags) {
    return <div>Error: {tags.error}</div>;
  }

  const tagsContent =
    tags?.data &&
    tags.data.map((tag, id) => {
      if (tag && tag.name) {
        return (
          <SingleTag
            // size="large"
            key={tag.id}
            name={tag.name}
            id={tag.id}
            onSaveEdit={onUpdate}
            isEditing={id === editingTagIndex}
            onStartEdit={() => setEditingTagIndex(id)}
            onCancelEdit={() => setEditingTagIndex(null)}
            onDelete={onDelete}
          />
        );
      }
      return null;
    });

  return (
    <div>
      <h1>Tags</h1>
      <div>{tagsContent}</div>
      <CreateTag
        isAnyTagEditing={editingTagIndex !== null}
        onCreate={onCreate}
      />
    </div>
  );
};

export default Tags;
