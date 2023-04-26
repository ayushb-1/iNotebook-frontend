import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState=(props)=>{
     const noteInitial=[
     {
       "_id": "643cb8b5425fd917379e0b6d",
       "user": "641a6cac08534300e7e52774",
       "title": "my title",
       "description": "have to pull request",
       "tag": "personal",
       "date": "2023-04-17T03:10:45.251Z",
       "__v": 0
     },
     {
       "_id": "643cb8b5425fd917379e0b6e",
       "user": "641a6cac08534300e7e52774",
       "title": "my title",
       "description": "have to pull request",
       "tag": "personal",
       "date": "2023-04-17T03:10:45.251Z",
       "__v": 0
     },
    ]
    const [notes,setNotes] = useState(noteInitial)

    const addNote=(title,description,tag)=>{
        const note={
          "_id": "643cb8b5425fd917379e0b6f",
          "user": "641a6cac08534300e7e52774",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2023-04-17T03:10:45.251Z",
          "__v": 0
        }
        setNotes(notes.concat(note));
    }
    return (
        <NoteContext.Provider value={{notes,addNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;