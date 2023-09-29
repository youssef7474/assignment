import React from 'react';
import {AiOutlineArrowLeft} from "react-icons/ai"
import {BiSolidDownArrow} from "react-icons/bi"
import imgpic from "../../assets/avatar.png"
import { useNavigate } from 'react-router-dom';

const DetailsAllTickets = ({AllTicketsDetails}) => {
  const navigate = useNavigate()



  const backnavigate =()=>{
    navigate("/")
  }


  const data = AllTicketsDetails.map((el)=>{
    return(
      <div className='bigone' style={{padding:"15px",borderLeft:"2px solid #5FD971"}}>

      <div className='inside' style={{display:"flex" ,flexDirection:"column",gap:"25px"}}>

        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <h1 style={{fontSize:"14px",fontWeight:"400"}}>User Name</h1>
          <span className='label  ' style={{color:"white"}}>{el.status}</span>
        </div>

        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}} >
         
          <div>
          
            <div  style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <h1 style={{fontSize:"12px",fontWeight:"400",color:"#616363"}}>27 Jon 2023</h1>
              <h1 style={{fontSize:"12px",fontWeight:"400",color:"#616363"}}>From: {el.from}</h1>
            </div>

            <div>
              <h1 style={{fontSize:"12px",fontWeight:"400",color:"#616363"}}>To: {el.to}</h1>
              <h1 style={{fontSize:"12px",fontWeight:"400",color:"#616363"}}>Branch</h1>
            </div>
          
          </div>

          <img style={{width:"32px",height:"32px"}} src={imgpic} alt='p'></img>

        </div>

      
      </div>


    </div>
    )
  })


  return (
    <div style={{padding:"20px",backgroundColor:"white",borderRadius:"10px",margin:"20px",minWidth:"310px"}}>
      


      

        <div style={{display:"flex",alignItems:"center",gap:"25px"}}>
          <AiOutlineArrowLeft onClick={backnavigate} style={{fontSize:"15px",backgroundColor:"#F7F6F6",borderRadius:"4px" ,padding:"2px",color:"#B9BCBC"}}></AiOutlineArrowLeft>
          <h5 style={{fontSize:"16px",fontWeight:"500",color:"#001011"}}>All Tickets</h5>
          <BiSolidDownArrow style={{color:"#B9BCBC",fontSize:"15px"}} ></BiSolidDownArrow>
        </div>
      
        <div className='bigone' style={{backgroundColor:"#eee",padding:"15px",borderLeft:"2px solid #FFD360"}}>

          <div className='inside' style={{display:"flex" ,flexDirection:"column",gap:"25px"}}>
         
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <h1 style={{fontSize:"14px",fontWeight:"400"}}>User Name</h1>
              <span className='label  ' style={{color:"white"}}>Solved</span>
            </div>

            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}} >
             
              <div>
              
                <div  style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                  <h1 style={{fontSize:"12px",fontWeight:"400",color:"#616363"}}>27 Jon 2023</h1>
                  <h1 style={{fontSize:"12px",fontWeight:"400",color:"#616363"}}>From: Department</h1>
                </div>

                <div>
                  <h1 style={{fontSize:"12px",fontWeight:"400",color:"#616363"}}>To: Department</h1>
                  <h1 style={{fontSize:"12px",fontWeight:"400",color:"#616363"}}>Branch</h1>
                </div>
              
              </div>

              <img style={{width:"32px",height:"32px"}} src={imgpic} alt='p'></img>

            </div>

          
          </div>

 
        </div>

     
      
          {data}




    </div>
  );
}

export default DetailsAllTickets;
