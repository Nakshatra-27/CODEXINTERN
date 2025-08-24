import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <Router>
      {/* Navbar */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 shadow sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-white">
          <h1 className="text-2xl font-extrabold">🌐 Client Side Routing</h1>
          <nav className="space-x-6">
            <Link to="/" className="hover:text-yellow-300">Home</Link>
            <Link to="/about" className="hover:text-yellow-300">About</Link>
            <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
            <Link to="/blog" className="hover:text-yellow-300">Blog</Link>
          </nav>
        </div>
      </header>

      {/* Page Container */}
      <main className="max-w-6xl mx-auto px-4 py-10 min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
          <div className="space-x-6">
            <Link to="/" className="hover:text-yellow-300">Home</Link>
            <Link to="/about" className="hover:text-yellow-300">About</Link>
            <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
            <Link to="/blog" className="hover:text-yellow-300">Blog</Link>
          </div>
        </div>
      </footer>
    </Router>
  );
}
