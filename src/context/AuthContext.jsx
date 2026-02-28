import React from 'react'
import { createContext, useState, useEffect } from 'react'
import { fetchUser, serviceLogout } from '../services/services'
import { serverUrl } from '../services/services';
import { fetchBlogs } from '../services/blogService';
export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState(null);
    const [publishedBlogs, setPublishBlog] = useState([])
    const getUser = async () => {
        const data = await fetchUser();
        setIsLoggedIn(data.loggedIn);
        if (data.loggedIn) {
            setUser(data.user);
        } else {
            setUser(null)
        }
    }



    const handleLogout = async () => {
        const result = await serviceLogout();
        if (result.success) {
            await getUser()
        }
    }
    const [blogs, setBlogs] = useState([]);
    const loadBlogs = async () => {
        try {
            const data = await fetchBlogs();
            const publishedBlog = data.blogs.filter((blog) => blog.isPublished === true);
            setPublishBlog(publishedBlog);
            setBlogs(data.blogs);
            setLoading(false);
        } catch (error) {
            console.log('error in blog', error)
        }
    };
    const load = async () => {
        await getUser();
        await loadBlogs();
    }
    useEffect(() => {
        load();
    }, [])

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, publishedBlogs, id, loading, blogs, loadBlogs, setBlogs, setId, getUser, user, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}
