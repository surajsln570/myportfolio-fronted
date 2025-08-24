import React from 'react'
import Navigation from '../components/Navigation'
import { Link } from 'react-router-dom'
import ProjectBox from '../components/ProjectBox.jsx'
import { useEffect, useState } from 'react'
import { deleteServerProject, updateServerProject, serviceGetProjects } from "../services/services.jsx";
import { useNavigate } from 'react-router-dom'
import {AuthContext} from '../context/AuthContext.jsx'
import { useContext } from 'react'

export function Projects() {

  const {isLoggedIn, user} = useContext(AuthContext);
  const navigate = useNavigate()
  const [projects, setProjects] = useState([]);
  const [proj, setproj] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await serviceGetProjects();
      setProjects(data.projects)
    }
    getData();
  }, [])

  const deleteProject = (e) => {
    e.preventDefault();
    const deletedId = async () => {
      const response = await deleteServerProject(e.target.id)
      console.log('response', response.id)
      const updatedProjects = projects.filter((project) => project._id !== response.id)
      setProjects(updatedProjects);
    }
    deletedId()
  }

  const updateProject = async (e) => {
    e.preventDefault();
    projects.map((project)=>{
      if(project._id==e.target.id){
        setproj(project);
      }
    })
    console.log(proj);
    navigate('/add-project');
    return proj
  }

  return (
    <div>
      <Navigation />
      {(isLoggedIn)?<Link to='/add-project' className=" flex absolute right-[5%] items-center md:mt-[-7%] mt-[-9%]">
        <svg className="h-9 w-9 text-blue-500 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        <span className='md:text-4xl text-2xl font-bold'>Add Project</span>
      </Link> : ''}
      
      <div className='m-0 p-3 mt-[25%] md:mt-[15%] flex flex-wrap justify-center gap-5'>
        {projects.map((project, i) => {
          return (
            <ProjectBox project={project} index={i} key={i} deleteProject={deleteProject} updateProject={updateProject} />
          )
        })}
      </div>
    </div>
  )
}




