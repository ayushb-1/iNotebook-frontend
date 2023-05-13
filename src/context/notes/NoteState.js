import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState=(props)=>{
    const host = "http://localhost:5000"
    const noteInitial=[]
    const [notes,setNotes] = useState(noteInitial)

    const getNotes = async()=>{
      const response = await fetch(`${host}/api/notes/fetchallNotes`, {
        method: "GET", 
        
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxYTZjYWMwODUzNDMwMGU3ZTUyNzc0In0sImlhdCI6MTY4MDA1NzQxOH0.aQR2VLREBpmPplWXYmlroVLH8v5tSjaKVUECgnB10SU",
        }
       
      });
      const json = await response.json() 
      setNotes(json);
    }

    const addNote= async(title,description,tag)=>{
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST", 
        
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxYTZjYWMwODUzNDMwMGU3ZTUyNzc0In0sImlhdCI6MTY4MDA1NzQxOH0.aQR2VLREBpmPplWXYmlroVLH8v5tSjaKVUECgnB10SU",
        },
       body: JSON.stringify({title,description,tag}) 
      });
      const note= await response.json();
      setNotes(notes.concat(note));
    }

    // deleting note
    const deleteNote=async(id)=>{
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE", 
        
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxYTZjYWMwODUzNDMwMGU3ZTUyNzc0In0sImlhdCI6MTY4MDA1NzQxOH0.aQR2VLREBpmPplWXYmlroVLH8v5tSjaKVUECgnB10SU",
        },
        
      });
      const newNotes = notes.filter((note) => {return note._id!==id} )
      setNotes(newNotes)

    }
    // editing note 
    const editNote=async(id, title, description,tag)=>{
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT", 
        
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxYTZjYWMwODUzNDMwMGU3ZTUyNzc0In0sImlhdCI6MTY4MDA1NzQxOH0.aQR2VLREBpmPplWXYmlroVLH8v5tSjaKVUECgnB10SU",
        },
        body: JSON.stringify({title, description, tag})
      });
      const json = await response.json();
      const newNotes = JSON.parse(JSON.stringify(notes))
      for(let index=0;index<newNotes.length;index++){
        const element = newNotes[index];
        if(element._id===id){
          newNotes[index].title=title;
          newNotes[index].description=description;
          newNotes[index].tag=tag;
          break;
        }
      }
      setNotes(newNotes)
    }


    return (
        <NoteContext.Provider value={{notes,getNotes,addNote, deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;