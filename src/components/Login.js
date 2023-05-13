import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

const Login = () => {
  let history=useHistory();
  const [credentials,setCredentials] =useState({email:"", password:""});
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST", 
      
      headers: {
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify({email:credentials.email, password:credentials.password})
    });
    const json=  await response.json();
    console.log(json);
    if(json.success==true){
      localStorage.setItem('token',json.authtoken);
      history.push("/");
    }
    else{
      alert("Invalid credentials");
    }
}

  const onChange=(e)=>{
    setCredentials({...credentials, [e.target.name]:e.target.value})
  } 
  return (
    <div className='flex'>
      <div >
        <img src="./assets/Untitled design(1).gif" className="h-1/3 mt-44 ml-44 " alt="TinyNotes Logo"/>
      </div>
      <div className='mt-36 absolute right-60'>

        <img src="./assets/welcome.gif" className="h-20 mx-auto" alt="TinyNotes Logo"/>
        <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={credentials.email}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:outline-none focus:border-lime-600 block w-[20vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={onChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-lime-600 block w-[20vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={onChange}
              />
            </div>
           
          
            <button
              type="submit"
              className=" text-white font-source tracking-wider bg-[rgb(2555,0,68)] btn-transition btn-box-shadown hover:text-black btn-box-shadown-hover  sm:w-auto w-full font-medium text-sm  px-5 py-2 text-center"
              
            >
              CONTINUE
            </button>
          </form>
      </div>
    </div>
  )
}

export default Login

