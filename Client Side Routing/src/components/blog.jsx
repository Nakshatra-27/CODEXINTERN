import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "Getting Started with React", content: "React makes UI building easy.", author: "Riya", date: "Aug 20, 2025" },
  { id: 2, title: "Understanding React Router", content: "Routing in React is seamless with react-router-dom.", author: "Dev Team", date: "Aug 22, 2025" },
  { id: 3, title: "State Management Basics", content: "Learn about useState and useReducer hooks.", author: "Guest Author", date: "Aug 23, 2025" }
];

export default function Blog() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-purple-700">📝 Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-gradient-to-br from-white to-blue-50 shadow-lg rounded-xl p-5 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2 text-blue-700">{post.title}</h2>
            <p className="text-gray-600 mb-3">{post.content}</p>
            <p className="text-sm text-gray-500 mb-4">By {post.author} • {post.date}</p>
            <Link to={`/blog/${post.id}`} className="text-purple-600 hover:underline font-medium">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
