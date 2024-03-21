import React, { useState } from 'react'
import './Home.scss'
import { MdAdd } from "react-icons/md";
import { FaFolder } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdFamilyRestroom } from "react-icons/md";
import { Link } from 'react-router-dom';
import Model1 from '../Model 1/Model1';

const Home = () => {

  const [show, setShow] = useState(false)
  
  const handleShow =()=>{
    setShow(true)
  }
  
  const handleClose =()=>{
    setShow(false)
  }

  return (
    <div>
      <div className="main_Home">
        <div className="left_Home">
            <div className="up_btns">

            <button onClick={handleShow}> <MdAdd /> Create a new tree</button>
            
            <button> <FaFolder /></button>
            </div>

            <div className='search'>
            <CiSearch/>
            <input  type="text" name="" id="search" placeholder='  Search'/>
            </div>

            <div className="profile">
            <CgProfile/>
            <p>Profile</p>
            </div>
        </div>

        <div className="right_Home">
                <h1><MdFamilyRestroom /></h1>
                <h1>Welcome to Family Tree App</h1>
                <br />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, saepe!</p>
                <br />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, saepe!</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda quae magni at nemo harum? Commodi facere corporis quis, repellendus cupiditate voluptas tenetur distinctio cum voluptatibus non quia, sint impedit! Cum est rerum molestias adipisci atque tenetur aliquid dolorem cumque ducimus.</p>
                
        </div>
      </div>
      {show && <Model1 handleClose={handleClose} show={show}  />}
    </div>
  )
}

export default Home
