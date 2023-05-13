import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context =useContext(noteContext);
  const {addNote} = context;

  const [note,setNote] = useState({title:"", description:"",tag:""})
  const handleClick=(e)=>{
    e.preventDefault();
    addNote(note.title,note.description,note.tag);
    setNote({title:"",description:"",tag:""})
  }
  const onChange=(e)=>{
    setNote({...note, [e.target.name]:e.target.value })
  }
  return (
    <div className="flex flex-col ml-14 mt-10">
        <h1 className="mt-24 mb-8 text-2xl font-source">ADD NOTE</h1>

        <form>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:outline-none focus:border-lime-600 block w-[20vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={onChange}
              value={note.title}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-lime-600 block w-[20vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={onChange}
              value={note.description}
            />
          </div>
          <div className="mb-6">
                    <label
                      htmlFor="tag"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Tag
                    </label>
                    <input
                      type="text"
                      id="tag"
                      name="tag"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-smf focus:outline-none focus:border-lime-600  block w-[20vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
                      onChange={onChange}
                      value={note.tag}
                    />
                  </div>
        
          <button
            type="submit"
            className=" text-white font-source tracking-wider bg-[rgb(2555,0,68)] btn-transition btn-box-shadown hover:text-black btn-box-shadown-hover  sm:w-auto w-full font-medium text-sm  px-5 py-2 text-center"
            onClick={handleClick}
          >
            ADD
          </button>
        </form>
      </div>

  )
}

export default AddNote
