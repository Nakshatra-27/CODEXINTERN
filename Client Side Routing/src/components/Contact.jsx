export default function Contact() {
  return (
    <div className="bg-gradient-to-r from-pink-50 to-blue-50 shadow-lg rounded-2xl p-8">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">📞 Contact Us</h1>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
