import React, {useContext} from 'react'
import NoteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
  const {note,updateNote} = props;
  const context  =useContext(NoteContext);
  const {deleteNote} = context;
  return (
    <div className="w-52 h-64 flex flex-col justify-between bg-red-300 rounded-lg border mx-3 mb-6 py-5 px-4">
    <div>
        <h4 className="text-gray-800 font-bold mb-3">{note.title}</h4>
        <p className="text-gray-800 text-sm">{note.description}</p>
    </div>
    <div>
        <div className="flex items-center justify-between text-gray-800">
            <p className="text-sm">March 28, 2020</p>
            <div className="w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center cursor-pointer" onClick={()=>{deleteNote(note._id)}}>
              <i className="ri-delete-bin-fill"></i>
            </div>
            <div className="w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center cursor-pointer">
              
                <i className="ri-pencil-fill" onClick={()=>{updateNote(note)}}></i>
            </div>
        </div>
    </div>
</div>
  )
}

export default NoteItem
