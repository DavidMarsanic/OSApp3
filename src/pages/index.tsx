import React, { useEffect, useState } from 'react';
import { useAuthenticationStatus } from '@nhost/react';
import BaseLayout from '@/layouts/BaseLayout';
import Post from '../components/frontpage/post';
import { FaCode, FaHashtag, FaAt } from 'react-icons/fa';
import JoinPage from '../components/frontpage/join';

// Updated placeholder data
const placeholderPosts = [
  { id: 1, community: 'ReactJS', user: 'User 1', title: 'Introducing React Hooks', type: 'topic', name: 'React', reason: 'Trending', previewText: 'React Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.', comments: 120, likes: 200, saves: 50, icon: <FaHashtag />, topComment: 'This is a top comment for Post 1', image: 'https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg' },
  { id: 2, community: 'NodeJS', user: 'User 2', title: 'Understanding the Node.js Event Loop', type: 'app', name: 'Node.js', reason: 'You may like', previewText: 'The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.', comments: 85, likes: 180, saves: 40, icon: <FaAt />, topComment: 'This is a top comment for Post 2', image: 'https://www.seobility.net/en/wiki/images/4/45/Responsive-web-design.png' },
  { id: 3, community: 'JavaScript', user: 'User 3', title: 'ES6 Features and Syntax', type: 'component', name: 'ES6', reason: 'Based on your interests', previewText: 'ES6, also known as ECMAScript 2015, introduced many changes to JavaScript. This post discusses features such as let and const, arrow functions, rest and spread operators, and template literals.', comments: 60, likes: 150, saves: 30, icon: <FaCode />, topComment: 'This is a top comment for Post 3', image: 'https://via.placeholder.com/150' },
  // Add more placeholder data as needed
];

function IndexPage() {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();

  // Add a new state to track the initial check
  const [initialCheck, setInitialCheck] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      // When the check is done, update the state
      setInitialCheck(true);
    }
  }, [isLoading]);

  // Don't render anything until the initial check is done
  if (!initialCheck) {
    return <div>Loading...</div>; // or your custom loading component
  }

  // If authenticated, render the PageContent, otherwise render the JoinPage
  return (
    <BaseLayout>
      {isAuthenticated ? (
        <div className="feed">
          {placeholderPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <JoinPage />
      )}
    </BaseLayout>
  );
}

export default IndexPage;