import { serverUrl } from "./services"

const API_URL = `${serverUrl}/api/blogs`;

/* ===============================
   GET ALL BLOGS
================================ */
export const fetchBlogs = async (page = 1) => {
  try {
    const res = await fetch(`${API_URL}?page=${page}`);
    if (!res.ok) throw new Error("Failed to fetch blogs");
    return await res.json();
  } catch (error) {
    console.log("error in fetchBlogs", error);
  }
};


/* ===============================
   GET SINGLE BLOG
================================ */
export const fetchSingleBlog = async (slug) => {
  try {
    const res = await fetch(`${API_URL}/${slug}`);
    if (!res.ok) throw new Error("Blog not found");
    return await res.json();
  } catch (error) {
    console.log("error in fetchSingleBlog", error);
  }
};


/* ===============================
   CREATE BLOG
================================ */
export const createBlog = async (data) => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Failed to create blog");
    return await res.json();
  } catch (error) {
    console.log("error in createBlog", error);
  }
};


/* ===============================
   UPDATE BLOG
================================ */
export const updateBlog = async (id, data) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Failed to update blog");
    return await res.json();
  } catch (error) {
    console.log("error in updateBlog", error);
  }
};


/* ===============================
   DELETE BLOG
================================ */
export const deleteBlog = async (id) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Failed to delete blog");
    return await res.json();
  } catch (error) {
    console.log("error in deleteBlog", error);
  }
};


/* ===============================
   TOGGLE PUBLISH
================================ */
export const togglePublish = async (id, token) => {
  try {
    const res = await fetch(`${API_URL}/toggle/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) throw new Error("Failed to toggle publish");
    return await res.json();
  } catch (error) {
    console.log("error in togglePublish", error);
  }
};