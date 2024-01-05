import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';

const PostForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();

  // const { mutate } = useMutation(createPost, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('posts');
  //     reset();
  //   },
  // });

  const onSubmit = (data) => {
   // mutate(data);
  console.log (data)
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Title:</label>
        <input type="text" {...register('title', { required: true })} />

        <label>Body:</label>
        <textarea {...register('body', { required: true })} />

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default PostForm;
