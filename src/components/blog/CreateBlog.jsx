import { useState, useEffect } from "react";
import Button from "../UI/Button";
import { useParams, useNavigate } from "react-router-dom";
import { createBlog, fetchSingleBlog, updateBlog } from "../../services/blogService";

export default function CreateBlog({ closeModal, loadBlogs }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    category: "",
    coverImage: "",
    content: "",
  });
  // ✅ Handle Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // ✅ Fetch Old Data in Edit Mode
  useEffect(() => {
    const getBlog = async () => {
      try {
        setLoading(true);
        const data = await fetchSingleBlog(id);
        // Agar backend { blog: {} } return kare
        const blog = data.blog ? data.blog : data;
        setForm({
          title: blog.title || "",
          excerpt: blog.excerpt || "",
          category: blog.category || "",
          coverImage: blog.coverImage || "",
          content: blog.content || "",
        });
      } catch (error) {
        console.log("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      getBlog();
    }
  }, [id]);
  // ✅ Submit (Create / Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(id){
        const res = await updateBlog(id, form)
        console.log(res);
      } else {
        const res = await createBlog(form)
        console.log(res);
      }
      if(closeModal){
        closeModal();
        loadBlogs();
      }else {
        navigate('/blog')
      }
    } catch (error) {
      console.log("Error submitting blog:", error);
    }
  };
  if (loading) return <p>Loading...</p>;
  return (
    <form onSubmit={handleSubmit} className={`${id ? "px-[200px] pt-[50px] ": ""} space-y-4`}>
      {
        id && <h1>Edit Your Article</h1>
      }
      <input
        name="title"
        value={form.title}
        placeholder="Title"
        className="w-full border p-3 rounded-lg"
        onChange={handleChange}
      />
      <input
        name="excerpt"
        value={form.excerpt}
        placeholder="Excerpt"
        className="w-full border p-3 rounded-lg"
        onChange={handleChange}
      />
      <input
        name="category"
        value={form.category}
        placeholder="Category"
        className="w-full border p-3 rounded-lg"
        onChange={handleChange}
      />
      <input
        name="coverImage"
        value={form.coverImage}
        placeholder="Cover Image URL"
        className="w-full border p-3 rounded-lg"
        onChange={handleChange}
      />
      <textarea
        name="content"
        value={form.content}
        rows="6"
        placeholder="Write your blog..."
        className="w-full border p-3 rounded-lg"
        onChange={handleChange}
      />
      <Button
        type="submit"
        className="bg-primary text-white px-6 py-2 rounded-lg"
      >
        {id ? "Update Blog" : "Publish"}
      </Button>
    </form>
  );
}