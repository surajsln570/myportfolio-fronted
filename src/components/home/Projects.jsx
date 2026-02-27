import { useContext, useEffect, useState } from 'react'
import Row from '../Row'
import Col from '../Col'
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { deleteServerProject, serviceGetProjects } from '../../services/services';
import { IoCloseSharp } from 'react-icons/io5';
import { MdModeEditOutline } from "react-icons/md";


export default function Projects({ setAddProject, addProject }) {
  const { user,setId} = useContext(AuthContext)

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await serviceGetProjects();
      setProjects(data.projects)
    }
    getData();
  }, [])

  const deleteProject = (e, id) => {
    e.preventDefault();
    const deletedId = async () => {
      const response = await deleteServerProject(id)
      const updatedProjects = projects.filter((project) => project._id !== response.id)
      setProjects(updatedProjects);
    }
    deletedId()
  }

  const updateProject = async (e, id) => {
    e.preventDefault();
    setId(id)
    setAddProject(true)
  }

  return (
    <Col  id='projects' className={'items-center relative bg-gradient-to-b from-background1 to-yellow-100 mt-10'}>
      <h1 className='text-3xl font-bold'>Latest Projects</h1>
      <Row className='gap-10 w-full md:flex-row flex-col p-10'>
        {
          projects && projects.slice(0, 2).map((project, i) => {
            return <Col  style={{ backgroundImage: `url(${project.projectImage})` }} key={i} className='w-full bg-cover bg-center min-h-[200px] relative bg-white rounded-lg shadow shadow-black'>
              <div className='absolute inset-0 z-10 bg-white/80'></div>
              <div className='z-20'>
                {
                user && <div className='z-20'>
                  <IoCloseSharp onClick={(e) => deleteProject(e, project._id)} className='absolute transition-all hover:scale-105 text-[red] right-2 top-2 text-2xl cursor-pointer' />
              <MdModeEditOutline onClick={(e) => updateProject(e,project._id)} className='absolute transition-all hover:scale-105 text-[blue] right-8 top-2 text-xl cursor-pointer' />
                </div>
              }
              <h3 className='text-3xl font-bold'>{project.projectName}</h3>
              <p className='text-mute max-h-[50px] overflow-hidden'>{project.projectDescription}</p>
              <Row className='gap-10 flex-wrap pl-10'>
                {
                project.projectTags && project.projectTags.map((tag, i)=>{
                  return <div key={i} className='bg-background1 font-semibold text-primary p-1 rounded-lg'>{tag}</div>
                })
               }
              </Row>
              <Link className='text-lg text-primary' to={project.projectUrl}>
                <Row>
                  <LiaExternalLinkAltSolid />
                  <span>Visit Site</span>
                </Row>
              </Link>
              </div>
            </Col>
          })
        }
      </Row>
      {(user) ? <div onClick={() => setAddProject(true)} className=" flex cursor-pointer absolute right-5 bottom-2 items-center ">
        <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        <span className='md:text-xl text-xl font-bold'>Add Project</span>
      </div> : ''}
    </Col>
  )
}
