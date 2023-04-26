import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context =useContext(noteContext);
  const {addNote} = context;

  const [note,setNote] = useState({title:"", description:"",tag:"",date:""})
  const handClick=(e)=>{
    e.preventDefault();
    addNote(note.title,note.description,note.tag);
  }
  const onChange=(e)=>{
    setNote({...note, [e.target.name]:e.target.value })
  }
  return (
    <div className="flex flex-col items-center justify-center">
        <h1 className="mt-24 mb-8 text-2xl">Add Note</h1>

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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={onChange}
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={onChange}
            />
          </div>
        
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handClick}
          >
            Submit
          </button>
        </form>
      </div>

  )
}

export default AddNote