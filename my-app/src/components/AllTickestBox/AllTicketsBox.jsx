import React from 'react';
import {AiOutlineArrowRight} from "react-icons/ai"
import "./AllTicketsBox.css"
const AllTicketsBox = () => {
  return (
    <div className='borderLineBottom'>
    

    <div className='allticketsbox '>
    <h1 style={{fontSize:"12px",color:"##001011"}}>All Tickets
      <span style={{fontSize:"10px",color:"#B9BCBC"}}>
          (0)
      </span>
    </h1>
    <div>
      <AiOutlineArrowRight style={{color:"#B9BCBC"}}></AiOutlineArrowRight>
    </div>
  </div>


    </div>
  );
}

export default AllTicketsBox;
