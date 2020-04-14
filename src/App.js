/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBarContainer"
import PostsPage from "./components/PostsContainer/PostsPage"
import instaPosts from './dummy-data'
// import the PostsPage and SearchBar and add them to the App


const App = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [posts, setPosts] = useState(instaPosts)

  const filterPosts = () => {
    if (searchTerm === '') {
      return posts
    }
    let filteredPosts = posts.filter(post => {
      if (post.username.includes(searchTerm)) {
        return post
      }
    })
    return filteredPosts
  }

 console.log(filterPosts())
  return (
    <div className="App">
      {/* Add imported components here to render them */}
      <SearchBar currentSearch={setSearchTerm}/>
      <PostsPage posts={filterPosts()}/>
    </div>
  );
};

export default App;
