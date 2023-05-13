import React, { useContext, useEffect,useState, useRef } from 'react'
import noteContext from "../context/notes/noteContext";
import NoteItem from './NoteItem';
import AddNote from "./AddNote";


const Notes = () => {
  const [showModal, setShowModal] = useState(false);
  const context =useContext(noteContext);
  const {notes, getNotes,editNote} = context;

  useEffect(()=>{
    getNotes()
  },[])
  const ref =useRef(null)
  const refClose=useRef(null)
  const [note,setNote] = useState({id:"", title:"", edescription:"",etag:""})
  const updateNote=(currentNote)=>{
    ref.current.click();
    setNote({id:currentNote._id, etitle:currentNote.title, edescription:currentNote.description, etag:currentNote.tag})
  }
  const handleClick=(e)=>{
    e.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag)
    refClose.current.click();    
    
  }
  const onChange=(e)=>{
    setNote({...note, [e.target.name]:e.target.value })
  }
 
  return (
    <div className='flex'>
      <AddNote />
      
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hidden"
        type="button"
        onClick={() => setShowModal(true)}
        ref={ref}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold font-source text-[rgb(255,0,68)]">
                      UPDATE
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form className='px-10'>
                  <div className="mb-6">
                    <label
                      htmlFor="title"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      id="etitle"
                      name="etitle"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-lime-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={onChange}
                      value={note.etitle}
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
                      id="edescription"
                      name="edescription"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-lime-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={onChange}
                      value={note.edescription}
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
                      id="etag"
                      name="etag"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-lime-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={onChange}
                      value={note.etag}
                    />
                  </div>
        
          
                </form>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-lime-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                    ref={refClose}
                  >
                    Close
                  </button>
                  <button
                    className="font-source tracking-wider bg-[rgb(2555,0,68)] btn-transition btn-box-shadown text-white hover:text-black btn-box-shadown-hover font-bold uppercase text-sm px-6 py-3 e mr-1 mb-1 "
                    type="button"
                    onClick={handleClick}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <div className='mt-28 rounded-md shadow-2xl ml-8'>
        <h1 className="mt-10 flex ml-36  mb-10  text-2xl">Your Notes <i class="ml-2 ri-sticky-note-line"></i></h1>
        
        <div className="flex flex-col  lg:mx-32 lg:grid lg:grid-cols-3 items-center justify-center">
            {notes.map((note)=>{
            return <div  key={note._id}>
              <NoteItem  updateNote={updateNote} note={note}/>
              </div>
            })}
      </div>
    </div>
  </div>
  )
}

export default Notes
