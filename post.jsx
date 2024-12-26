import React from "react";

export default function Post({post }) {

 return (

    <div className="post bg-cover bg-center p-4 bg-black rounded-lg shadow-lg">
      
      <div className="post-header flex items-center mb-4">
        <img 
          src={post.profilepic} 
          alt="profile" 
          className="profile-pic w-12 h-12 rounded-full border-2 border-blue-500"
        />

        <div className="user-info ml-4">
          <p className="username font-bold text-lg text-white">{post.username}</p>
          <p className="fullname text-sm text-white">{post.fullname}</p>
        </div>
      
      </div>

      <h2 className="post-title text-xl font-semibold text-white mb-4">{post.title}</h2>

      <div className="post-stats flex justify-between text-sm text-gray-600 mb-4">
        <span className="reacts">Reacts: {post.reacts}</span>
        <span className="comments">Comments: {post.comments}</span>
        <span className="shares">Shares: {post.shares}</span>
      </div>

      <div className="post-status text-gray-700">
        <p>{post.stat}</p>
      </div>
    </div>

    );
  }
  