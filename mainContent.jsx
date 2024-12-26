import React, { useEffect, useState } from "react";
import Post from "./post";
import Image from "../assets/image.jpeg";

function MainContent() {
  const [posts, setPosts] = useState([]);

  // Function to handle adding a new post
  const addPost = (newPost) => {
    setPosts([newPost, ...posts]); // Add new post to the beginning of the array
  };

  const [temp, setTemp] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    setPosts((prev) => {
      const newPost = {
        fullname: "John Doe",
        username: "john_doe",
        title: temp,
        profilepic: Image,
        reacts: 10,
        comments: 5,
        shares: 2,
        stat: 1,
      };

      return [newPost, ...prev];
    });
  };

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) =>
        setPosts(
          data.posts.map((post) => {
            return {
              fullname: "John Doe",
              username: "john_doe",
              title: post.body,
              profilepic: "/assets/image.jpg",
              reacts: post.reactions.likes,
              comments: 5,
              shares: 2,
              stat: 1,
            };
          })
        )
      );
  }, []);


  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto p-4 bg-black text-white space-y-5 border-l border-r border-slate-700">
      <div className="sticky top-0 bg-black p-4 border-b border-slate-700 z-10">
        <h1 className="text-xl font-bold">Home</h1>
      </div>

      <form
        onSubmit={submitHandler}
        className="p-4 border border-slate-700 rounded-lg bg-gray-800 space-y-2"
      >
        <textarea
          onChange={(e) => setTemp(e.target.value)}
          placeholder="What's happening?"
          className="w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Tweet
        </button>
      </form>

      <div className="main-content p-4">
        {/* Pass the addPost function to PostInput */}
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export default MainContent;
