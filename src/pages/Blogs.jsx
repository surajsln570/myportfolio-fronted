import { useContext, useState } from "react";
import CreateBlog from "../components/blog/CreateBlog";
import Button from "../components/UI/Button";
import { deleteBlog, togglePublish } from "../services/blogService.js";
import BlogBox from "../components/blog/BlogBox.jsx";
import { AuthContext } from "../context/AuthContext.jsx";
import Col from "../components/Col.jsx";
import Navigation from "../components/Navigation.jsx";

export default function Blogs() {
  const { loading, user, publishedBlogs, blogs, loadBlogs } = useContext(AuthContext)
  const [showForm, setShowForm] = useState(false);
  const handleDelete = async (id) => {
    const res = await deleteBlog(id);
    await loadBlogs();
    alert(res.message)
  };

  const handleToggle = async (id) => {
    const res = await togglePublish(id);
    await loadBlogs();
    alert(res.message)
  };


  if (loading) {
    return <Col><Navigation /><div className="text-center py-20">Loading...</div></Col>;
  }

  return (
    <Col>
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">Latest Blogs</h1>
          <Button
            variant="primary"
            onClick={() => setShowForm(true)}
            className="bg-primary text-white px-5 py-2 rounded-lg hover:scale-105 transition"
          >
            Write Blog
          </Button>
        </div>
        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {
            user
              ?
              blogs && blogs.map((blog) => (
                <BlogBox
                  blog={blog}
                  isAdmin={true}
                  onDelete={handleDelete}
                  onToggle={handleToggle}
                  key={blog._id} />
              ))
              :
              publishedBlogs && publishedBlogs.map((blog) => (
            <BlogBox
              blog={blog}
              isAdmin={true}
              onDelete={handleDelete}
              onToggle={handleToggle}
              key={blog._id} />
          ))
          }
        </div>
        {/* Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-3xl rounded-2xl p-8 relative">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-xl"
              >
                ✕
              </button>
              <CreateBlog loadBlogs={loadBlogs} closeModal={() => setShowForm(false)} />
            </div>
          </div>
        )}
      </div>
    </Col>
  );
}