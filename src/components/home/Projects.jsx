import { useContext, useEffect, useState } from 'react'
import Row from '../Row'
import Col from '../Col'
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { deleteServerProject, serviceGetProjects } from '../../services/services';
import { IoCloseSharp } from 'react-icons/io5';
import { MdModeEditOutline } from "react-icons/md";

export default function Projects({ setAddProject }) {

  const { user, setId } = useContext(AuthContext)
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await serviceGetProjects();
      setProjects(data.projects)
    }
    getData();
  }, [])

  const deleteProject = async (e, id) => {
    e.preventDefault();
    const response = await deleteServerProject(id)
    const updatedProjects = projects.filter((project) => project._id !== response.id)
    setProjects(updatedProjects);
  }

  const updateProject = (e, id) => {
    e.preventDefault();
    setId(id)
    setAddProject(true)
  }

  return (
    <Col id='projects'
      className="items-center relative w-full py-16 px-6 
                 bg-gradient-to-b from-background1 to-yellow-50">

      <h1 className='text-4xl font-bold mb-12 text-center 
                     bg-gradient-to-r from-primary to-purple-500 
                     bg-clip-text text-transparent'>
        Latest Projects
      </h1>

      <Row className='gap-10 w-full md:flex-row flex-col md:px-10'>

        {projects && projects.slice(0, 3).map((project, i) => (

          <Col
            key={i}
            className='group w-full md:w-1/3 relative overflow-hidden 
                       rounded-2xl shadow-xl hover:shadow-2xl 
                       transition-all duration-300 hover:-translate-y-2'>

            {/* Background Image */}
            <div
              style={{ backgroundImage: `url(${project.projectImage})` }}
              className='absolute inset-0 bg-cover bg-center 
                         transition-transform duration-500 
                         group-hover:scale-110'
            ></div>

            {/* Dark Overlay */}
            <div className='absolute inset-0 bg-black/60 group-hover:bg-black/70 transition'></div>

            {/* Content */}
            <Col className='relative z-20 p-6 text-white min-h-[280px] justify-between'>

              {user && (
                <div className='absolute right-3 top-3 flex gap-3'>
                  <IoCloseSharp
                    onClick={(e) => deleteProject(e, project._id)}
                    className='text-red-400 hover:scale-110 cursor-pointer text-2xl transition'
                  />
                  <MdModeEditOutline
                    onClick={(e) => updateProject(e, project._id)}
                    className='text-blue-400 hover:scale-110 cursor-pointer text-xl transition'
                  />
                </div>
              )}

              <div>
                <h3 className='text-2xl font-bold mb-2'>
                  {project.projectName}
                </h3>

                <p className='text-sm opacity-90 line-clamp-3'>
                  {project.projectDescription}
                </p>
              </div>

              {/* Tags */}
              <Row className='gap-2 flex-wrap mt-4'>
                {project.projectTags && project.projectTags.map((tag, i) => (
                  <div
                    key={i}
                    className='bg-white/20 backdrop-blur-sm 
                               px-3 py-1 rounded-full 
                               text-xs font-semibold'>
                    {tag}
                  </div>
                ))}
              </Row>

              {/* Visit Button */}
              <Link
                to={project.projectUrl}
                target="_blank"
                className='mt-4 inline-flex items-center gap-2 
                           text-primary bg-white px-4 py-2 
                           rounded-lg font-semibold 
                           hover:scale-105 transition'>
                <LiaExternalLinkAltSolid />
                Visit Site
              </Link>

            </Col>
          </Col>

        ))}

      </Row>

      {user && (
        <div
          onClick={() => setAddProject(true)}
          className="absolute right-8 bottom-6 
                     bg-primary text-white 
                     px-5 py-3 rounded-xl 
                     shadow-lg cursor-pointer 
                     hover:scale-105 transition">
          + Add Project
        </div>
      )}

    </Col>
  )
}