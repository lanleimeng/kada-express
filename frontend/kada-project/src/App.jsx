import { useEffect, useState } from "react";
import axios from "axios";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState(null);

  // Fetch posts from backend
  const fetchPosts = async () => {
    try {
      const res = await axios.get("/api/notes"); // relative URL works if frontend served from same domain
      setPosts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Post CRUD App</h1>
      <PostForm fetchPosts={fetchPosts} editPost={editPost} setEditPost={setEditPost} />
      <PostList posts={posts} fetchPosts={fetchPosts} setEditPost={setEditPost} />
    </div>
  );
}

export default App;