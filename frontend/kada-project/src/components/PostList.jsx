import axios from "axios";

export default function PostList({ posts, fetchPosts, setEditPost }) {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://ayambatam.my.id/api/notes/${id}`);
      fetchPosts();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ul className="space-y-2">
      {posts.map((post) => (
        <li key={post._id} className="flex justify-between items-center border p-2 rounded">
          <span>{post.title}</span>
          <div className="flex gap-2">
            <button
              onClick={() => setEditPost(post)}
              className="bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(post._id)}
              className="bg-red-500 px-2 py-1 rounded text-white hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}