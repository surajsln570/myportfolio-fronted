import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 overflow-hidden flex flex-col">

      {/* Cover Image */}
      {blog.coverImage && (
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="h-56 w-full object-cover hover:scale-105 transition-transform duration-500"
        />
      )}

      <div className="p-6 flex flex-col justify-between flex-1">

        {/* Title & Excerpt */}
        <div>
          <h2 className="text-2xl font-bold mb-3 line-clamp-2 text-gray-900">
            {blog.title || "Untitled Blog"}
          </h2>

          <p className="text-gray-700 text-sm mb-4 line-clamp-3">
            {blog.excerpt || "No description available."}
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
          <span className="text-gray-400 text-sm">
            {blog.createdAt ? new Date(blog.createdAt).toDateString() : "Date Unknown"}
          </span>
          <Link
            to={blog.slug ? `/blog/${blog.slug}` : "#"}
            className="text-primary font-semibold hover:text-primary-hover hover:underline text-sm"
          >
            Read More →
          </Link>
        </div>

      </div>
    </div>
  );
}