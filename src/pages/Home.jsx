import Navigation from '../components/Navigation'
import About from '../components/home/About.jsx';
import BlogBox from '../components/blog/BlogBox.jsx';
import Row from '../components/Row.jsx';
import Col from '../components/Col.jsx';
import { Link } from 'react-router-dom';
import Skills from '../components/home/Skills.jsx';
import Projects from '../components/home/Projects.jsx';
import Contact from '../components/home/Contact.jsx';
import AddProject from '../components/home/AddProject.jsx';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';
import Loader from '../components/UI/Loader.jsx';

export default function Home() {
  const [addProject, setAddProject] = useState(false)
  // const {blogs} = useContext(AuthContext)
  const {publishedBlogs} = useContext(AuthContext)

  return (
    <div className='min-h-screen flex-col justify-start'>
      {
        addProject && <AddProject setAddProject={setAddProject} />
      }
      <Navigation />
      <Col>
        <About />
        <Col className={'items-center gap-5'}>
          <h1 className='text-3xl font-bold'>Read My Articles</h1>
          <Row className={'justify-center min-h-[100px] relative w-full md:flex-row flex-col gap-5'}>
            {publishedBlogs && publishedBlogs.map((blog) => (
              <BlogBox
                blog={blog}                
                key={blog._id} />
            ))}
            {
              publishedBlogs.length<=0 && <Loader/>
            }
          </Row>
          <Link className='underline text-lg text-purple-900' to={'/blog'}>Read More</Link>
        </Col>
        <Skills />
        <Projects addProject={addProject} setAddProject={setAddProject} />
        <Contact />
      </Col>
    </div>
  )
}
