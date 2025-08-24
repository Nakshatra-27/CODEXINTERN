import { useParams, Link } from "react-router-dom";

const posts = [
  { id: 1, title: "Getting Started with React", content: "React is a powerful library for building UIs. You can create reusable components and handle state effectively.", author: "Riya", date: "Aug 20, 2025" },
  { id: 2, title: "Understanding React Router", content: "React Router allows client-side routing without refreshing the page. It supports dynamic routes, nested routes, and more.", author: "Dev Team", date: "Aug 22, 2025" },
  { id: 3, title: "State Management Basics", content: "State management helps you control and pass data between components. Hooks like useState and useReducer are great for this.", author: "Guest Author", date: "Aug 23, 2025" }
];

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">❌ Post Not Found</h2>
        <Link to="/blog" className="text-blue-600 hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <h1 className="text-4xl font-bold mb-3">{post.title}</h1>
      <p className="text-gray-500 mb-4">By {post.author} • {post.date}</p>
      <p className="text-gray-700 leading-relaxed mb-6">{post.content}</p>
      <Link to="/blog" className="text-blue-600 hover:underline">← Back to Blog</Link>
    </div>
  );
}
