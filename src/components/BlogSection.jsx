import React from 'react';
import BlogCard from './BlogCard';
import './BlogSection.css';

const blogPosts = [
  {
    id: 1,
    title: "How to create marketing personas that start with empathy",
    description: "Treating customers with respect earns you loyalty. Dig into marketing personas that reflect real people...",
    imageUrl: "/images/picture1.jpg",
    author: "Bruce Wayne",
    date: "25 December 2025"
  },
  {
    id: 2,
    title: "Drive ecommerce sales with dynamic ad campaigns on Facebook",
    description: "Treating customers with respect earns you loyalty. Dig into marketing personas that reflect real people...",
    imageUrl: "/images/picture2.jpg",
    author: "Clark Kent",
    date: "25 December 2025"
  },
  {
    id: 3,
    title: "How Instagram Made Laxatives Cool",
    description: "An age-old product gets a thoroughly modern, deeply weird, and potentially dangerous makeover...",
    imageUrl: "/images/picture3.jpg",
    author: "Tony Stark",
    date: "25 December 2025"
  },
  {
    id: 4,
    title: "How to create marketing personas that start with empathy",
    description: "Treating customers with respect earns you loyalty. Dig into marketing personas that reflect real people...",
    imageUrl: "/images/picture4.jpeg",
    author: "Wanda Maximoff",
    date: "25 December 2025"
  },
  {
    id: 5,
    title: "Drive ecommerce sales with dynamic ad campaigns on Facebook",
    description: "Treating customers with respect earns you loyalty. Dig into marketing personas that reflect real people...",
    imageUrl: "/images/picture5.jpg",
    author: "John Birmingham",
    date: "25 December 2025"
  },
  {
    id: 6,
    title: "How Instagram Made Laxatives Cool",
    description: "An age-old product gets a thoroughly modern, deeply weird, and potentially dangerous makeover...",
    imageUrl: "/images/picture6.jpg",
    author: "Logan",
    date: "25 December 2025"
  },
  {
    id: 7,
    title: "How to create marketing personas that start with empathy",
    description: "Treating customers with respect earns you loyalty. Dig into marketing personas that reflect real people...",
    imageUrl: "/images/picture7.jpg",
    author: "Geralt",
    date: "25 December 2025"
  },
  {
    id: 8,
    title: "Drive ecommerce sales with dynamic ad campaigns on Facebook",
    description: "Treating customers with respect earns you loyalty. Dig into marketing personas that reflect real people...",
    imageUrl: "/images/picture8.jpg",
    author: "Barry Allen",
    date: "25 December 2025"
  },
  {
    id: 9,
    title: "How Instagram Made Laxatives Cool",
    description: "An age-old product gets a thoroughly modern, deeply weird, and potentially dangerous makeover...",
    imageUrl: "/images/picture9.jpg",
    author: "Selina Kyle",
    date: "25 December 2025"
  }
  
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      {blogPosts.map(post => (
        <BlogCard key={post.id} post={post} />
      ))}
    </section>
  );
};

export default BlogSection;
