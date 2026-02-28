import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'; // Imports all brand icons
import { AuthProvider } from './context/AuthContext.jsx'
import Blogs from './pages/Blogs.jsx'
import SingleBlog from './pages/SingleBlog.jsx'
import CreateBlog from './components/blog/CreateBlog.jsx'
library.add(faCheckSquare, faCoffee, fab);
const allPages = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/blog',
    element: <Blogs />
  },
  {
    path: '/edit-blog/:id',
    element: <CreateBlog />
  },
  {
    path: '/blog/:slug',
    element: <SingleBlog />
  },
  {
    path: '/signup',
    element: <Signup />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={allPages} />
    </AuthProvider>
  </StrictMode>,
)
