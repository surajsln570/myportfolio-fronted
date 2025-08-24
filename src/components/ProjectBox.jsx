import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext.jsx'
import { useContext } from 'react'

export default function ProjectBox({ project, index, deleteProject, updateProject }) {
  const { isLoggedIn, user } = useContext(AuthContext);
  return (
    <div className='m-0 p-2 relative rounded-md shadow-[0_0_10px_purple] h-[400px] md:w-[300px] w-full text-center' key={index}>
      <img className='h-[50%] md:w-[300px] w-full' src={`http://localhost:3000/${project.projectImage}`} alt="" />
      <h1 className="m-0 p-1 text-2xl font-bold text-purple-700">{project.projectName}</h1>
      <p className="text-xs text-teal-600">{project.projectDescription}</p>
      <a className="m-0 p-1 absolute bottom-0 right-[67px] text-lg text-red-400, hover:underline" href={`${project.projectUrl}`}>{project.projectUrl}</a>
      {
        (isLoggedIn)
        ?
        <div>
          <button id={project._id} type="submit" className="m-2 p-2 bg-red-500 hover:bg-red-600 rounded-md text-white cursor-pointer" onClick={deleteProject}>Delete</button>
          <Link to={`/add-project/${project._id}`} id={project._id} type="submit" className="m-2 p-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white cursor-pointer">Update</Link>
        </div>
        :
        ''
      }
      

    </div>
  )
}