import { useState} from "react";
import Button from "../UI/Button";
import { createBlog, updateBlog } from "../../services/blogService";

export default function CreateBlog({ closeModal, setBlog, blog, loadBlogs }) {
  const [form, setForm] = useState({
    title: blog ? blog.title : "",
    excerpt: blog ? blog.excerpt : "",
    category: blog ? blog.category : "",
    coverImage: blog ? blog.coverImage : "",
    content: blog ? blog.content : "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false)
  // ✅ Handle Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Submit (Create / Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonDisabled(true)
    try {
      if (blog) {
        const res = await updateBlog(blog._id, form)
        alert(res.message)
        setBlog(null)
      } else {
        const res = await createBlog(form)
        alert(res.message)
      }
      if (closeModal) {
        await loadBlogs();
        closeModal();
      }
    } catch (error) {
      console.log("Error submitting blog:", error);
    } finally {
      setButtonDisabled(false)
    }
  };

  return (
    <div className="">
      <div className="fixed inset-0 z-50  bg-black/50 flex items-center justify-center "></div>
      <form
        onSubmit={handleSubmit}
        className="fixed z-60 p-10 top-5 left-1/2 -translate-x-1/2 overflow-y-auto h-[90vh] bg-white rounded-lg w-[95vw] md:w-[70vw]"
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-5">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {blog ? "Edit Blog" : "Create New Blog"}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              {blog
                ? "Update your article details below."
                : "Write and publish your new article."}
            </p>
          </div>
          {closeModal && (
            <button
              type="button"
              onClick={() => {
                setBlog(null)
                closeModal()
              }}
              className="text-gray-400 hover:text-black text-xl"
            >
              ✕
            </button>
          )}
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Blog Title
          </label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter blog title..."
            className="w-full border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 p-3 rounded-xl outline-none transition"
          />
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Short Description
          </label>
          <input
            name="excerpt"
            value={form.excerpt}
            onChange={handleChange}
            placeholder="Write short summary..."
            className="w-full border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 p-3 rounded-xl outline-none transition"
          />
        </div>

        {/* Category + Cover Image Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Category
            </label>
            <input
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Technology, Business..."
              className="w-full border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 p-3 rounded-xl outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Cover Image URL
            </label>
            <input
              name="coverImage"
              value={form.coverImage}
              onChange={handleChange}
              placeholder="Paste image URL..."
              className="w-full border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 p-3 rounded-xl outline-none transition"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Blog Content
          </label>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            rows="8"
            placeholder="Write your blog content here..."
            className="w-full border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 p-4 rounded-xl outline-none transition resize-none"
          />
        </div>

        {/* Action Button */}
        <div className="flex justify-end">
          <Button
            disabled={buttonDisabled}
            type="submit"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            {blog ? "Update Blog" : "Publish Blog"}
          </Button>
        </div>
      </form>
    </div>
  )
}