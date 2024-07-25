import React from 'react';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const Create = () => {

  const [name,setName] = useState("");
  const [email,setEmail]=useState("");
  const [Age,setAge]=useState(0);
  const [error,seterror]=useState("");
  const navigate = useNavigate();
  console.log(name,email,Age);


  //fetch: Sends a GET request to the backend server at http://localhost:5000.


  const handleSubmit = async (e)=>{
    e.preventDefault();
    const addUser = {name,email,Age}
    const response = await fetch("http://localhost:5000",{
      method:"POST",
      body:JSON.stringify(addUser),
      headers: {
        "content-Type":"application/json",
      },
    });
    const result = await response.json();
    if(!response.ok){
      console.log(result.error);
      seterror(result.error)
    }
    if(response.ok){
      console.log(result);
      seterror("");
      setName("");
      setEmail("");
      setAge(0);
      navigate("/all");
    }
  }


  return (
    <div classNameName="container my-2">
      {error && <div class="alert alert-danger">{error}</div> }
      <h2 classNameName="text-center">Enter the data</h2>
      <form onSubmit={handleSubmit}>

  <div className="mb-3">
    <label  className="form-label">Name</label>
    <input 
    type="text" 
    className="form-control" 
    value={name} 
    onChange={(e) =>setName(e.target.value)}  />
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" 
    className="form-control" 
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label  className="form-label">Age</label>
    <input type="number" 
    className="form-control" 
    value={Age}
    onChange={(e) => setAge(e.target.value)}
    />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
