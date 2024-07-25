import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");
  const { id } = useParams();
  const Navigate=useNavigate();


  const getSingleUser = async () => {
    try {
      console.log(`Fetching user with ID: ${id}`); // Log the ID
      const response = await fetch(`http://localhost:5000/${id}`);
      
      const result = await response.json();

      if (!response.ok) {
        console.log('Response not OK:', result.error);
        setError(result.error);
      } else {
        setError("");
        setName(result.name);
        setEmail(result.email);
        setAge(result.age);
      }
    } catch (error) {
      // console.error("Error fetching the user:", error);
      // setError("An error occurred while fetching the user.");
    }
  };

  //send updated data to backend
  const handelUpdate = async(e) =>{
    e.preventDefault();
    const updatedUser = {name,email,age}
    const response = await fetch(`http://localhost:5000/${id}`,{
      method:"PATCH",
      body:JSON.stringify(updatedUser),
      headers: {
        "content-Type":"application/json",
      },
    });
    const result = await response.json();
    if(!response.ok){
      console.log(result.error);
      setError(result.error)
    }
    if(response.ok){
      setError("");
      Navigate("/all");
    }
  }


  useEffect(() => {
    getSingleUser();
  }, [id]); // Add id as a dependency

  return (
    <div className="container my-2">
      {error && <div className="alert alert-danger">{error}</div>}
      <h2 className="text-center">Edit</h2>
      <form onSubmit={handelUpdate}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
