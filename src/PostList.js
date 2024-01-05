import React from 'react';
import { useQuery } from 'react-query';
import { getPosts } from './api';

const PostList = () => {
  const { data: posts, isLoading, isError } = useQuery('posts', getPosts);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching posts</div>;

  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title} - {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
