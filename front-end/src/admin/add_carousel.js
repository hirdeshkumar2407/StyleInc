/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState,Component } from "react";
import './admin_dasboard.css';
import Navbar from './navbar';
import Sidebar from './sidebar';
import axios from "axios"

import './add_mensCloths.css'

function add_admins()  {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");

   
const onFormSubmit =()=>{

  const formData =new FormData()
  formData.append('name',name)
  formData.append('image',image)
const url='http://localhost:5000/api/carousel/addCarousel'
axios.post(url,formData,{})
.then((res) =>{
  console.log(res.statusText)
})
setName("");
setImage("");

};

const onInputNameChange = (e)=>{
  setName(e.target.value)
}

const onInputImageChange =(e)=>{

  setImage(e.target.files[0])
}

	
		return (
			<>
				<Navbar />
				<div id='layoutSidenav'>
					<Sidebar />

					<div id='layoutSidenav_content'>
						<div>
							<main>
                            <div className="containerr">
        <h1>Add Carousel</h1>
        <form>
          <label>Name</label>
          <input
            className="inputtextt"
            type="text"
            name="name"
            onChange={onInputNameChange}
        
          />
         <label>Upload a the Image</label>
          <input
                 className="inputtextt2"
          type="file"
          name="image"
          onChange={onInputImageChange}
          />
          <button className="sumbitbutton" onClick={onFormSubmit} type="submit">Submit</button>
        

        </form>
      </div>
							</main>
							<footer className='py-4 bg-light mt-auto' />
						</div>
					</div>
				</div>
			</>
		);
	}


export default add_admins;
