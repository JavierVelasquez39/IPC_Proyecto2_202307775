// PostList.jsx
import React from 'react';
import { getPosts } from './path/to/your/posts/file';
import Post from './Post';

export default function PostList() {
  const posts = getPosts();

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          name={post.user.nombres}
          email={post.user.email}
          text={post.description}
          category={post.category}
          image={post.image}
        />
      ))}
    </div>
  );
}