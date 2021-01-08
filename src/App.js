import "./App.css";
import Post from "./components/Post";
import React, { useState } from "react";

// 57

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Ronaldo",
      caption: "I am better than messi",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
    },
    {
      username: "Messi",
      caption: "I want to leave Barcelone",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg",
    },
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <img
          alt="Instagram"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
        />
      </div>
      <h1>hello instagram - alistair</h1>
      {posts.map((post) => {
        return (
          <Post
            imageUrl={post.imageUrl}
            username={post.username}
            caption={post.caption}
          />
        );
      })}
    </div>
  );
}

export default App;
