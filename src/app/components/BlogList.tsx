// components/BlogList.tsx
import React from 'react';

interface Post {
  title: string;
  date: string;
}

const posts: Post[] = [
  { title: 'Understanding Selenium Testing', date: 'October 10, 2024' },
];

const BlogList: React.FC = () => {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-semibold mb-6">Recent Blog Posts</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index} className="mb-6">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <small className="text-gray-500">{post.date}</small>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BlogList;
