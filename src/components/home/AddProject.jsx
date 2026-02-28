import { useContext, useEffect, useState } from 'react'
import { fetchOneProject, serviceAddProjects, updateProjectServer } from '../../services/services.jsx'
import { IoCloseSharp } from "react-icons/io5";
import { AuthContext } from '../../context/AuthContext.jsx';
import Button from '../UI/Button.jsx'
import Row from '../Row.jsx'

export default function AddProject({ setAddProject }) {

  const { id, setId, getUser } = useContext(AuthContext);
  let [form, setForm] = useState({
    projectName: '',
    projectDescription: '',
    projectUrl: '',
    projectImage: null,
    projectTags: [],
    projectStatus: '',
    projectDate: '',
    projectType: ''
  });
  const [tags, setTags] = useState([])

  const fet = async () => {
    const pro = await fetchOneProject(id)
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
  }

  useEffect(() => {
    if (id) {
      fet();
    }
  }, [])
  const AddTag = (e) => {
    e.preventDefault();
    setForm({ ...form, projectTags: [...form.projectTags, tags] })
    setTags('')
  }

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
        if (key == 'projectTags') {
          formData.append('projectTags', JSON.stringify(form.projectTags))
        } else {
          formData.append(key, form[key]);
        }
      }
      const result = await updateProjectServer(formData, id)
      setId(null)
      setAddProject(false)
    } else {
      const formData = new FormData();//don't use JSON.stringify for FormData and set headers
      for (const key in form) {
        if (key == 'projectTags') {
          formData.append('projectTags', JSON.stringify(form.projectTags))
        } else {
          formData.append(key, form[key]);
        }
      }
      const result = await serviceAddProjects(formData);
      await getUser();
      setAddProject(false)
    }
  }
  const handleClick = () => {
    setAddProject(false)
    setId(null)
  }
  const delTag = (e, tag) => {
    e.preventDefault();
    const newTag = form.projectTags.filter((p) => p != tag)
    setForm({ ...form, projectTags: newTag })
  }

  return (
    <div>
      <div onClick={handleClick} className='bg-black/50 fixed h-screen w-screen z-40'></div>
      <form
        action={'/admin/add-projects'}
        method='POST'
        className='flex flex-col z-50 fixed left-1/2 bg-background -translate-x-1/2 md:mt-[3%] mt-[10%] items-center justify-center p-8 pt-5 rounded-lg shadow-[0_0_10px_purple] w-full md:w-[50vw]'
        onSubmit={handleSubmit}
        encType='multipart/form-data'
      >
        <IoCloseSharp onClick={handleClick} className='absolute right-2 top-2 text-2xl cursor-pointer' />
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
        <div className='flex flex-col space-y-2 w-full relative'>
          <label className='font-bold' htmlFor="tags">Project Tags:</label>
          <Row className='w-full relative bg-blue-100 h-[40px] rounded'>
            <Row className={'relative -left-4'}>
              {
                form.projectTags && form.projectTags.map((tag, i) => {
                  return <Row className='bg-background2 p-2 rounded-2xl' key={i}><span>{tag}</span><IoCloseSharp onClick={(e) => delTag(e, tag)} className='cursor-pointer' /> </Row>
                })
              }
            </Row>
            <input
              className='w-full outline-none rounded'
              type="text"
              id="tags"
              name="tags"
              placeholder="e.g., React, Node.js"
              onChange={(e) => setTags(e.target.value)}
              value={tags} />
            <Button onClick={(e) => AddTag(e)} className='absolute right-0 top-1/2 -translate-y-1/2' variant={'primary'}>Add</Button>
          </Row>
        </div>
        <div className='flex flex-col space-y-2 w-full '>
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
        <div className='flex space-y-2 w-full justify-between'>
          <div className='flex flex-col w-[30%]'>
            <label className='font-bold' htmlFor="projectImage">Project Image</label>
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
  )
}