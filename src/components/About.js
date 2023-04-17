import React from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'

const About = () => {
  const a =useContext(NoteContext)
  return (
    <div>
      <h1 className='py-20'>this is about {a.name}</h1>  
    </div>
  )
}

export default About;
