import { useParams, Link } from "react-router-dom";
import { blogData } from "../blog-data";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogData.find((p) => p.id === Number(id));

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Link
          to="/blog"
          className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 rounded-md px-4 py-2 transition shadow-sm"
        >
          &larr;
          <span className="ml-2">Retour à tous les articles</span>
        </Link>
      </div>
      {post ? (
        <article className="bg-white p-6 md:p-10 rounded-lg shadow-lg">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
          />
          <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
            <span>{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            {post.title}
          </h1>
          <div className="prose prose-lg max-w-none text-gray-800">
            <p>{post.content}</p>
          </div>
        </article>
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article non trouvé</h1>
          <p className="text-gray-600 mb-8">
            Désolé, nous n'avons pas pu trouver l'article que vous cherchez.
          </p>
          <Link
            to="/blog"
            className="text-white bg-blue-600 hover:bg-blue-700 rounded-md px-4 py-2 transition"
          >
            Retour au blog
          </Link>
        </div>
      )}
    </div>
  );
}
