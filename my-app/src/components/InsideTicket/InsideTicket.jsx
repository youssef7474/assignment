import React from 'react';
import pdfimage from "../../assets/PDF_file_icon.svg.png"
const InsideTicket = ({TicketDetails}) => {
  return (
    <div>
      <h1 style={{fontSize:"20px",fontWeight:"500",color:"#001011"}}>Issue Subject </h1>
      <p style={{fontSize:"16px",fontWeight:"400",lineHeight:"20px", color:"#616363"}}>
        {TicketDetails.description}
      </p>
        <h1 style={{fontSize:"16px", fontWeight:"500",color:"#001011"}}>
            Attachments:
            <span style={{color:"#B9BCBC",fontSize:"16px"}}>(3)</span>
        </h1>
        <p style={{fontSize:"14px",fontWeight:"500", color:"#616363"}}>Images:</p>

        <div style={{display:"flex" ,alignItems:"center" ,gap:"20px"}}>
        
            <div style={{display:"flex",alignItems:"center" ,gap:"8px",border:"1px solid #eee ", borderRadius:"8px",width:"fit-content",padding:"10px"}}>
                <img src={pdfimage} alt='p' style={{height:"48px",width:"51px"}}></img>
                <div>
                    <p style={{fontSize:"12px",color:"#616363"}}>FileName.Pdf</p>
                    <p style={{fontSize:"12px",color:"#B9BCBC"}}>23.09 MB</p>
                </div>
            </div>

                <div style={{display:"flex",alignItems:"center" ,gap:"8px",border:"1px solid #eee ", borderRadius:"8px",width:"fit-content",padding:"10px"}}>
                    <img src={pdfimage} alt='p' style={{height:"48px",width:"51px"}}></img>
                    <div>
                        <p style={{fontSize:"12px",color:"#616363"}}>FileName.Pdf</p>
                        <p style={{fontSize:"12px",color:"#B9BCBC"}}>23.09 MB</p>
                    </div>
                </div>
        
        </div>
     
        <p style={{fontSize:"14px",fontWeight:"500", color:"#616363"}}>Files:</p>

                <div style={{display:"flex",alignItems:"center" ,gap:"8px",border:"1px solid #eee ", borderRadius:"8px",width:"fit-content",padding:"10px"}}>
                <img src={pdfimage} alt='p' style={{height:"48px",width:"51px"}}></img>
                <div>
                    <p style={{fontSize:"12px",color:"#616363"}}>FileName.Pdf</p>
                    <p style={{fontSize:"12px",color:"#B9BCBC"}}>23.09 MB</p>
                </div>
            </div>
        
    </div>
  );
}

export default InsideTicket;
