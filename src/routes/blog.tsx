import { Link } from "react-router-dom";
import { blogData } from "../blog-data";

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Mon Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((post) => (
          <li key={post.id} className="list-none">
            <Link to={`/blog/${post.id}`} className="block group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 group-hover:scale-105">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-gray-700">{post.summary}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
}
