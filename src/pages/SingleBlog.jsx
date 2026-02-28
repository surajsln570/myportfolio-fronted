import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleBlog } from "../services/blogService";
import Col from '../components/Col.jsx'
export default function SingleBlog() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const loadBlog = async () => {
      const data = await fetchSingleBlog(slug);
      setBlog(data.blog);
    };

    loadBlog();
  }, [slug]);

  if (!blog) {
    return <Col><Navigation /> <div className="text-center py-20">Loading...</div></Col>
  }

  return (
    <Col>
      <Navigation />
      <div className="max-w-4xl mx-auto px-6 py-20">
        {blog.coverImage && (
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-80 object-cover rounded-2xl mb-8"
          />
        )}
        <h1 className="text-4xl font-bold mb-4">
          {blog.title}
        </h1>
        <div className="text-gray-500 mb-8 text-sm flex gap-4">
          <span>{new Date(blog.createdAt).toDateString()}</span>
          <span>{blog.readingTime}</span>
          <span>{blog.views} views</span>
        </div>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </Col>
  );
}