import React from 'react';
import {GoHome} from "react-icons/go"
import {BsPerson} from "react-icons/bs"
import {CiSettings} from "react-icons/ci"
import "./SideBar.css"
const SideBar = () => {
  return (
    <div className='sidebar bg-sidebar p-20 p-relative'>

      <h3 className='p-relative ' style={{textAlign:"center", marginTop:"0"}}>logo</h3>

      <ul>

        <li  style={{backgroundColor:"#FFFFFF",textAlign:"center",marginBottom:"45px",marginTop:"66px"}} className='active'>
            <div style={{display:"flex",alignItems:"center",fontWeight:"400",gap:"16px",margin:"10px"}}>
                <GoHome style={{fontSize:"25px"}}></GoHome>
                <span>Home</span>
            </div>
        </li>

        <li style={{marginBottom:"45px"}}  className='active2' >
          <div style={{display:"flex",alignItems:"center",color:"#FFFFFF",gap:"16px",margin:"10px"}}>
            <BsPerson style={{fontSize:"25px"}}></BsPerson>
            <span >Profile</span>
          </div>
        </li>


        <li style={{marginBottom:"45px"}}  className='active2' >
          <div style={{display:"flex",alignItems:"center",color:"#FFFFFF",gap:"16px",margin:"10px"}}>
            <CiSettings style={{fontSize:"25px"}}></CiSettings>
            <span >Settings</span>
          </div>
        </li>

       

      </ul>

    </div>
  );
}

export default SideBar;