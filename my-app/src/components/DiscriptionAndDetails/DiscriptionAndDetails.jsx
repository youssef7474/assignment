import React from 'react';
import {AiOutlineClockCircle} from "react-icons/ai"
import {BsFillPinAngleFill} from  "react-icons/bs"
import imagepic from "../../assets/avatar.png"
const DiscriptionAndDetails = ({TicketDetails}) => {
  return (
    <div style={{marginTop:"15px"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{backgroundColor:"#eee", borderRadius:"16px",padding:"10px",color:"#1B6792"}}>Details</div>
        <AiOutlineClockCircle></AiOutlineClockCircle>
        <BsFillPinAngleFill></BsFillPinAngleFill>
      </div>

      <div style={{display:"flex",alignItems:"center",gap:"25px"}}>
        <p>Send by</p>
        <div style={{display:"flex",alignItems:"center",gap:"5px"}}>
            <img src={imagepic} alt='p' style={{width:"32px",height:"32px"}}></img>
            <p>Yara Ayad</p>
        </div>
      </div>

        <div style={{display:"flex",alignItems:"center",gap:"25px"}}>
            <p>Department</p>
            <p>{TicketDetails.from}</p>
        </div>


        <div style={{display:"flex",alignItems:"center",gap:"25px"}}>
            <p>Assigned to </p>
            <p>{TicketDetails.to}</p>
        </div>

        <div style={{display:"flex",alignItems:"center",gap:"25px"}}>
            <p>Status  </p>
            <p>{TicketDetails.status}</p>
        </div>

        
        <div style={{display:"flex",alignItems:"center",gap:"25px"}}>
            <p>Created time  </p>
            <p>05 Jul 2023, 08:30 AM</p>
        </div>

    </div>
  );
}

export default DiscriptionAndDetails;
