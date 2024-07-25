import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Read = () => {
  const [data,setData]=useState([]);
  const [error,setError]=useState("");
  async function GetData(){
    const response = await fetch("http://localhost:5000");
    const result = await response.json();

    if(!response.ok){
      console.log(result.error);
      setError(result.error);
    }
    if(response.ok){
      setData(result);
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/${id}`, { // Use backticks for template literals
        method: "DELETE",
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        console.log(result.error);
        setError(result.error);
      } else {
        setError("Deleted Successfully");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while deleting.");
    }
  };
  

  useEffect(() =>{
    GetData();
  },[])


  return (
    <div className="container my-2">
    {error && <div class="alert alert-danger">{error}</div> }
      <h2 className="text-center">All Data</h2>

      <div className="row">
        {data?.map((ele) => (
          <div key={ele._id} className="col-3">
            <div className="card" >
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <p className="card-subtitle mb-2 text-muted">{ele.email}</p>
                <h6 className="text-muted">{ele.age}</h6>
                <a href="#" className="card-link" onClick={()=>handleDelete(ele._id)}>Delete</a>
                <Link to={`/${ele._id}`} className="card-link">Edit Link</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
