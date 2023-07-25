// IndexPage.tsx
import { useEffect } from 'react';
import { useAuthenticationStatus } from '@nhost/react';
import { useRouter } from 'next/router';
import BaseLayout from '@/layouts/BaseLayout';
import Post from '../components/frontpage/post';
import { FaCode, FaHashtag, FaAt } from 'react-icons/fa';

// Updated placeholder data
const placeholderPosts = [
  { id: 1, community: 'ReactJS', user: 'Monke', title: 'Introducing React Hooks', type: 'topic', name: 'React', reason: 'Trending', previewText: 'React Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.', comments: 120, likes: 200, saves: 50, icon: <FaHashtag /> },
  { id: 2, community: 'NodeJS', user: 'Admin', title: 'Understanding the Node.js Event Loop', type: 'app', name: 'Node.js', reason: 'You may like', previewText: 'The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.', comments: 85, likes: 180, saves: 40, icon: <FaAt /> },
  { id: 3, community: 'JavaScript', user: 'Kira', title: 'ES6 Features and Syntax', type: 'component', name: 'ES6', reason: 'Based on your interests', previewText: 'ES6, also known as ECMAScript 2015, introduced many changes to JavaScript. This post discusses features such as let and const, arrow functions, rest and spread operators, and template literals.', comments: 60, likes: 150, saves: 30, icon: <FaCode /> },
  // Add more placeholder data as needed
];

function IndexPage() {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/join');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return <div>Loading...</div>; // or your custom loading component
  }

  return (
    <BaseLayout>
      <div className="feed">
        {placeholderPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </BaseLayout>
  );
}

export default IndexPage;
