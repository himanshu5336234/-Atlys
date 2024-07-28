import React from 'react';
import CreatePost from './CreatePost';
import Post from './Post';
import CustomGrid from './UI/CustomGrid';

const Feed: React.FC = () => {
  return (
    <div className="">
      <div className="grid grid-cols-6 gap-4">
  <div className="col-span-4 ...">01</div>
  <div className=" col-end-3 ...">02</div>
  <div className=" col-span-2 ...">03</div>
  <div className="col-end-7 ...">04</div>
</div>
       <CustomGrid container spacing={2}>
       <CustomGrid item xs={1}>
        <div className="p bg-blue-500 text-white">Item 1</div>
      </CustomGrid>
      <CustomGrid item xs={12}>
        <div className=" bg-blue-500 text-white">Item 1</div>
      </CustomGrid>
       </CustomGrid>
      <h1 className="text-3xl font-bold text-white">Hello Jane</h1>
      <p className="text-gray-400">
        How are you doing today? Would you like to share something with the community{' '}
        <span role="img" aria-label="smile">
          😊
        </span>
      </p>
      <CreatePost />
      <Post
        author="Theresa Webb"
        timeAgo="5 mins ago"
        content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        commentsCount={24}
        avatarUrl="https://via.placeholder.com/40"
        emoji="👋"
      />
      <Post
        author="Marvin McKinney"
        timeAgo="8 mins ago"
        content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        commentsCount={12}
        avatarUrl="https://via.placeholder.com/40"
        emoji="😊"
      />
    </div>
  );
};

export default Feed;
