import { useState } from "react";
import axios from "axios";

export default function PostForm({ fetchPosts, editPost, setEditPost }) {
  const [title, setTitle] = useState(editPost ? editPost.title : "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editPost) {
        await axios.put(`https://ayambatam.my.id/api/notes/${editPost._id}`, { title });
        setEditPost(null);
      } else {
        await axios.post("https://ayambatam.my.id/api/notes", { title });
      }
      setTitle("");
      fetchPosts();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter post title"
        className="border p-2 flex-1 rounded"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        {editPost ? "Update" : "Add"}
      </button>
    </form>
  );
}