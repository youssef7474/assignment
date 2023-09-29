import React from 'react';
import { BiSolidDownArrow } from 'react-icons/bi';
import "./MoreDetials.css"
import DiscriptionAndDetails from '../DiscriptionAndDetails/DiscriptionAndDetails';
const MoreDetails = ({TicketDetails}) => {
  return (
    <div style={{padding:"20px",backgroundColor:"white",borderRadius:"10px",margin:"20px"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"#1B6792",width:"360px",height:"44px",padding:"15px",paddingLeft:"25px"}}>
        <div className='statedetails ' style={{position:"relative"}}>
          <h5 style={{fontSize:"16px",fontWeight:"500",color:"white"}}  >{TicketDetails.status}</h5>
        </div>
        <BiSolidDownArrow style={{color:"#FFFFFF",fontSize:"12px"}}></BiSolidDownArrow>
      </div>
      <DiscriptionAndDetails TicketDetails={TicketDetails} ></DiscriptionAndDetails>
    </div>
  );
}

export default MoreDetails;
