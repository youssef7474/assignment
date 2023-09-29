import React from 'react';
import {IoMdNotificationsOutline} from "react-icons/io"
import {RiEnglishInput } from "react-icons/ri"
import "./NavBar.css"
import profilepic from "../../assets/avatar.png"


const NavBar = () => {
  return (
    <div>
      <div className='head ' style={{backgroundColor:"white",padding:"15px",display:"flex",alignItems:"center",justifyContent:'space-between'}} >

        <div className='search'>
            <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>Hello!</h1>
            <p style={{ fontSize: "14px", marginTop: "0" }}>Welcome Back</p>
        </div>

        <div className='icons ' style={{display:"flex",alignItems:"center",gap:"20px"}}>

            <span>
                <RiEnglishInput style={{fontSize:"22px",color:"#B9BCBC"}}></RiEnglishInput>
            </span>

            <span className='notification' style={{position:"relative"}}>
                <IoMdNotificationsOutline style={{fontSize:"22px",color:"#B9BCBC"}} ></IoMdNotificationsOutline>
            </span>

            <div className='imagename' style={{position:"relative"}}>
                <img src={profilepic} alt='p'></img>

            </div>

        </div>
      
      </div>
    </div>
  );
}

export default NavBar;
