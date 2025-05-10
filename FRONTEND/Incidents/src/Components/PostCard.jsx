import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const PostCard = ({ post }) => {
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return formatDistanceToNow(date, { addSuffix: true });
    } catch (error) {
      return 'Unknown time';
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg p-4 mb-4 border border-gray-700">
      <div className="flex items-start mb-3">
        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center mr-3">
          <span className="text-white font-bold">{post.username ? post.username[0].toUpperCase() : 'U'}</span>
        </div>
        <div>
          <div className="flex items-center">
            <span className="font-bold text-white">{post.username || 'Anonymous'}</span>
            <span className="text-gray-400 text-sm ml-2">{formatDate(post.createdAt)}</span>
          </div>
        </div>
      </div>
      
      <p className="text-white mb-3">{post.description}</p>
      
      {post.mediaUrl && (
        <div className="mb-3">
          {post.mediaType === 'image' ? (
            <img 
              src={`http://localhost:8000/api${post.mediaUrl}`} 
              alt="Post content" 
              className="max-w-full rounded-lg"
            />
          ) : post.mediaType === 'video' ? (
            <video 
              src={`http://localhost:8000/api${post.mediaUrl}`} 
              controls
              className="max-w-full rounded-lg"
            />
          ) : null}
        </div>
      )}
      
      <div className="flex items-center text-gray-400 text-sm">
        <button className="flex items-center mr-4 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
          </svg>
          Like
        </button>
        <button className="flex items-center mr-4 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Comment
        </button>
        <button className="flex items-center hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          Share
        </button>
      </div>
    </div>
  );
};

export default PostCard; 