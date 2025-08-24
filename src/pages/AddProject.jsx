import { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import { serviceAddProjects, updateProjectServer } from '../services/services.jsx'
import { useNavigate, useParams } from 'react-router-dom';


export default function AddProject() {

  const navigate = useNavigate()
  const { id } = useParams();
  let [form, setForm] = useState({
    projectName: '',
    projectDescription: '',
    projectUrl: '',
    projectImage: null,
    projectTags: '',
    projectStatus: '',
    projectDate: '',
    projectType: ''
  });

  useEffect(() => {
    fetch(`https://myportfolio-backend-zxqb.onrender.com/admin/project/${id}`)
      .then((res) => res.json())
      .then((pro) => {
        setForm({
          projectName: pro.projectName,
          projectDescription: pro.projectDescription,
          projectUrl: pro.projectUrl,
          projectImage: null,
          projectTags: pro.projectTags,
          projectStatus: pro.projectStatus,
          projectDate: '',
          projectType: pro.projectType
        })
      })
  }, [])

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value, files } = e.target;
    if (name === 'projectImage') {
      setForm({ ...form, projectImage: files[0] });
      return;
    } else {
      setForm({ ...form, [name]: value });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      const formData = new FormData();//don't use JSON.stringify for FormData and set headers
      for (const key in form) {
        formData.append(key, form[key]);
      }
      console.log('form:',form)
      const result = await updateProjectServer(formData, id)
      navigate('/projects');
      console.log('Project Updated from addProject')
    } else {
      const formData = new FormData();//don't use JSON.stringify for FormData and set headers
      for (const key in form) {
        formData.append(key, form[key]);
      }
      const result = await serviceAddProjects(formData);
      navigate('/projects');
      console.log('result from addProject', result);
    }

  }

  return (
    <div>
      <Navigation />
      <div className='flex justify-center items-center'>
        <form
          action={'/admin/add-projects'}
          method='POST'
          className='flex flex-col md:mt-[7%] mt-[10%] items-center justify-center p-8 pt-5 rounded-lg shadow-[0_0_10px_purple] w-full md:w-[50vw]'
          onSubmit={handleSubmit}
          encType='multipart/form-data'
        >
          <h1 className='font-bold text-3xl mb-3'>Add new project</h1>
          <div className='flex  space-y-2 w-full justify-between '>
            <div className='flex flex-col w-[39%]'>
              <label className='font-bold' htmlFor="projectName">Project Name:</label>
              <input
                className='w-full outline-none bg-blue-100 rounded m-0 p-2'
                type="text" id="projectName"
                name="projectName"
                placeholder="Enter project name"
                onChange={handleChange}
                value={form.projectName}
                required />
            </div>
            <div className='flex flex-col w-[59%]'>
              <label className='font-bold' htmlFor="">Project Type</label>
              <input
                className='w-full outline-none bg-blue-100 rounded m-0 p-2'
                type='text'
                name='projectType'
                value={form.projectType}
                onChange={handleChange}
                placeholder='e.g., Personal, Open Source, Freelance'
              />
            </div>
          </div>
          <div className='flex flex-col space-y-2 w-full '>
            <label className='font-bold' htmlFor="projectDescription">Project Description:</label>
            <textarea
              className='w-full outline-none bg-blue-100 rounded m-0 p-2'
              id="projectDescription"
              name="projectDescription"
              placeholder="Describe your project"
              onChange={handleChange}
              value={form.projectDescription}
              required />
          </div>
          <div className='flex  space-y-2 w-full justify-between'>
            <div className='flex flex-col space-y-2 w-[49%] '>
              <label className='font-bold' htmlFor="projectUrl">Project Link:</label>
              <input
                className='w-full outline-none bg-blue-100 rounded m-0 p-2'
                type="url"
                id="projectUrl"
                name="projectUrl"
                placeholder="Enter project link"
                onChange={handleChange}
                value={form.projectUrl}
                required />
            </div>
            <div className='flex flex-col space-y-2 w-[49%] '>
              <label className='font-bold' htmlFor="projectTags">Project Tags:</label>
              <input
                className='w-full outline-none bg-blue-100 rounded m-0 p-2'
                type="text"
                id="projectTags"
                name="projectTags"
                placeholder="e.g., React, Node.js"
                onChange={handleChange}
                value={form.projectTags}
                required />
            </div>
          </div>
          <div className='flex space-y-2 w-full justify-between'>
            <div className='flex flex-col w-[30%]'>
              <label className='font-bold' htmlFor="projectImage">Project Image URL:</label>
              <input
                className='w-full outline-none bg-blue-100 rounded m-0 p-2'
                type="file"
                id="projectImage"
                name="projectImage"
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col w-[30%]'>
              <label className='font-bold' htmlFor="projectStatus">Project Status:</label>
              <select className='bg-blue-100 p-2 text-md' id="projectStatus"
                name="projectStatus"
                value={form.projectStatus}
                onChange={handleChange}
                required>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
                <option value="archived">Archived</option>
              </select>
            </div>
            <div className='flex flex-col w-[30%]'>
              <label className='font-bold' htmlFor="projectDate">Project Date:</label>
              <input
                className='w-full outline-none bg-blue-100 rounded m-0 p-2'
                type="date"
                id="projectDate"
                name="projectDate"
                onChange={handleChange}
                value={form.projectDate}
                required />
            </div>
          </div>
          <button type='submit' className='m-2 p-2 bg-green-400 hover:bg-green-600 rounded-md cursor-pointer'>{(id) ? "Update" : "Add Project"}</button>
        </form>
      </div>
    </div>
  )
}