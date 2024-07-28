import React from 'react';
import CreatePost from './CreatePost';
import Post from './Post';
const posts = [
  {
    author: "Theresa Webb",
    timeAgo: "5 mins ago",
    content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    commentsCount: 24,
    avatarUrl: "https://via.placeholder.com/40",
    emoji: "👋",
  },
  {
    author: "Marvin McKinney",
    timeAgo: "8 mins ago",
    content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    commentsCount: 12,
    avatarUrl: "https://via.placeholder.com/40",
    emoji: "😊",
  },
];
const Feed: React.FC = () => {
  return (
    <div className="max-w-screen-sm m-auto py-20 flex  flex-col gap-5">
      <div>
        <h1 className="text-3xl font-bold text-white">Hello Jane</h1>
        <p className=" my-3 text-[#7F8084]">
          How are you doing today? Would you like to share something with the community{' '}
          <span role="img" aria-label="smile">
            😊
          </span>
        </p>
      </div>


      <CreatePost />
      {posts.map((post, index) => (
        <Post
          key={index}
          author={post.author}
          timeAgo={post.timeAgo}
          content={post.content}
          commentsCount={post.commentsCount}
          avatarUrl={post.avatarUrl}
          emoji={post.emoji}
        />
      ))}
    </div>
  );
};

export default Feed;
