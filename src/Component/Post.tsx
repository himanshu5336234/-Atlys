import React from 'react';

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
    <div className="p-4 mb-4 bg-secondary rounded-lg shadow-md">
      <div className="flex items-center mb-2">
        <img src={avatarUrl} alt={`${author}'s avatar`} className="w-10 h-10 mr-3 rounded-full" />
        <div>
          <h4 className="text-sm font-bold text-white">{author}</h4>
          <p className="text-xs text-gray-400">{timeAgo}</p>
        </div>
      </div>
      <div className="flex items-center mb-2">
        <span className="mr-2">{emoji}</span>
        <p className="text-sm text-white">{content}</p>
      </div>
      <div className="text-sm text-gray-400">
        <span>{commentsCount} comments</span>
      </div>
    </div>
  );
};

export default Post;
