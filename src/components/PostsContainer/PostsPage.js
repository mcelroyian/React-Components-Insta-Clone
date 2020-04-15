//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
//import instaPosts from '../../dummy-data'
// import data 

const PostsPage = ({posts}) => {
  // set up state for your data
  //const [posts, setPosts] = useState(instaPosts)
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {
       (posts.length !== 0 ? posts.map( post => <Post post={post}/>) : <h2>Sorry, nothing matches your search</h2>)
      }
    </div>
  );
};

export default PostsPage;
