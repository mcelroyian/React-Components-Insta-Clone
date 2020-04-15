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

  //helper
  const hasMatch = (str1, str2) => {
    if (str1.toLowerCase().includes(str2.toLowerCase())) {
      return true
    } 
    else return false
  }

  const filterPosts = () => {
    if (searchTerm === '') {
      return posts
    }
    let term = searchTerm.trim()
    let filteredPosts = posts.filter(post => {
      const postData = Object.values(post)

      for (const value of postData) {
        if (typeof value === "string") {
        debugger
          console.log('looked at string: ',value)
          if (hasMatch(value, term)) {
            
            return post
          } 
        } if (Array.isArray(value)) {
          console.log('looked at array: ', value)
            for (const comment in value) {
              if (hasMatch(value[comment].username, term) || hasMatch(value[comment].text, term)) {
                
                return post
              } 
            }
        }
        
      }
    })
    return filteredPosts
  }

  //console.log(filterPosts())
  return (
    <div className="App">
      {/* Add imported components here to render them */}
      <SearchBar currentSearch={setSearchTerm} />
      <PostsPage posts={filterPosts()} />
    </div>
  );
};

export default App;
