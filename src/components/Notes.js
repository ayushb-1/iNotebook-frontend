import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext";
import NoteItem from './NoteItem';
import AddNote from "./AddNote";


const Notes = () => {
const context =useContext(noteContext);
  const {notes,addNote} = context;
  return (
    <>
      <AddNote/>
      <div>
        <h1 className="mt-10 flex justify-center  mb-10 f text-2xl">Your Notes</h1>
        <div className="flex flex-col lg:mx-32 lg:grid lg:grid-cols-3 items-center justify-center">
            {notes.map((note)=>{
            return <div  key={note._id}>
              <NoteItem note={note}/>
              </div>
            })}
      </div>
    </div>
  </>
  )
}

export default Notes
