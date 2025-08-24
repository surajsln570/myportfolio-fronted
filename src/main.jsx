import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import {Projects} from './pages/Projects.jsx'
import ContactMe from './pages/ContactMe.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import AddProject from './pages/AddProject.jsx'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'; // Imports all brand icons
import { AuthProvider } from './context/AuthContext.jsx'

    library.add(faCheckSquare, faCoffee, fab);

const allPages = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/projects',
    element: <Projects/>
  },
  {
    path: '/contactme',
    element: <ContactMe/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: '/add-project',
    element: <AddProject/>
  },
  {
    path: '/add-project/:id',
    element: <AddProject/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={allPages} />
    </AuthProvider>
  </StrictMode>,
)
