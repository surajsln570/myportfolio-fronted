import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Row from "../Row";
import Button from "../UI/Button";
import { AuthContext } from "../../context/AuthContext";

export default function BlogBox({
  blog,
  isAdmin = false,
  onDelete,
  onToggle,
}) {
  const navigate = useNavigate();
  const [loadingAction, setLoadingAction] = useState(false);
  const {user} = useContext(AuthContext);

  if (!blog) return null;

  const handleDelete = async () => {
    if (!onDelete) return;
    setLoadingAction(true);
    await onDelete(blog._id);
    setLoadingAction(false);
  };

  const handleToggle = async () => {
    if (!onToggle) return;
    setLoadingAction(true);
    await onToggle(blog._id);
    setLoadingAction(false);
  };

  return (
    <div className="w-full bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col overflow-hidden">
      {/* Cover Image */}
      {blog.coverImage && (
        <div className="relative">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="h-52 w-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {/* Category Badge */}
          {blog.category && (
            <span className="absolute top-3 left-3 bg-primary text-white text-xs px-3 py-1 rounded-full shadow">
              {blog.category}
            </span>
          )}
          {/* Draft Badge */}
          {!blog.isPublished && (
            <span className="absolute top-3 right-3 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full shadow">
              Draft
            </span>
          )}
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="font-bold text-xl mb-3 line-clamp-2 text-gray-900">
          {blog.title || "Untitled Blog"}
        </h3>
        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-1">
          {blog.excerpt || blog.content || "No content available."}
        </p>
        {/* Footer */}
        <Row className="justify-between items-center border-t pt-4">
          <span className="text-xs text-gray-400">
            {blog.createdAt
              ? new Date(blog.createdAt).toDateString()
              : "Date Unknown"}
          </span>
          {/* Public View: Only show if published */}
          {blog.isPublished && (
            <Button
              onClick={() => navigate(`/blog/${blog._id}`)}
              variant="primary"
              className="text-xs px-4 py-1.5 rounded-full"
            >
              Read More →
            </Button>
          )}
        </Row>
        {/* Admin Controls */}
        {user && (
          <div className="flex gap-2 mt-5">
            <Button variant="secondary" className="text-xs px-3 py-1" onClick={() => navigate(`/edit-blog/${blog._id}`)}>
              Edit
            </Button>
            <Button
              variant="danger"
              className="text-xs px-3 py-1"
              onClick={handleDelete}
              disabled={loadingAction}
            >
              {loadingAction ? "Deleting..." : "Delete"}
            </Button>
            <Button variant="primary" className="text-xs px-3 py-1" onClick={handleToggle} disabled={loadingAction}>
              {loadingAction ? "Updating..." : blog.isPublished ? "Unpublish" : "Publish"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}