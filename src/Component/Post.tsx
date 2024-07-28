import React from 'react';
import Card from './UI/Card';

interface PostProps {
  author: string;
  timeAgo: string;
  content: string;
  commentsCount: number;
  avatarUrl: string;
  emoji: string;
}

const Post: React.FC<PostProps> = ({ author, timeAgo, content, commentsCount, avatarUrl, emoji }) => {
  return (
   <Card>
      <div className="flex items-center ">
        <img src={avatarUrl} alt={`${author}'s avatar`} className="w-10 h-10 mr-3 rounded-full" />
        <div>
          <h4 className="text-sm font-bold text-[#C5C7CA]">{author}</h4>
          <p className="text-xs text-[#7F8084]">{timeAgo}</p>
        </div>
      </div>
      <div className="flex rounded-lg	 items-center bg-primary p-5  ">
        <p className="mr-2">{emoji}</p>
        <p className="text-sm text-[#7F8084]">{content}</p>
      </div>
      <div className="text-sm text-gray-400">
        <p>{commentsCount} comments</p>
      </div>
    </Card>
  );
};

export default Post;
