import React from 'react';
import profileimg from "../../assets/avatar.png"
import "./TicketsTable.css"
import { useNavigate } from 'react-router-dom';
import { TicketDetails } from '../../State/TicketsSlice';
import { useDispatch } from 'react-redux';
const TickestTable = ({AllTicketsDetails}) => {

    

    const navigate = useNavigate()
    const dipatch=useDispatch()
    const TicketDetailNav=(el)=>{
       navigate(`${el.id}/Details`)
       dipatch(TicketDetails(el))
    }



    const Data= AllTicketsDetails.map((el)=>{
        return(
            <tr style={{cursor:"pointer"}} onClick={()=>TicketDetailNav(el)} key={el.id}>
                <td style={{display:"flex",alignItems:"center",gap:"4px"}}>
                    <img src={profileimg} alt='p' style={{width:"25px",height:"25px"}}></img>
                    <span className='tabeltext'>Company Name</span>
                </td>
                <td className='tabeltext'>{el.from}</td>
                <td className='tabeltext'>{el.to}</td>
                <td className='tabeltext'>Internal</td>
                <td className='tabeltext'>27 Jon 2023</td>
                <td>
                    <span className='label  ' style={{color:"white"}}>{el.status}</span>
                </td>
            </tr>
        )
    })
    
  return (
    <div>
        <div className='resboniveTable'>
            <table style={{fontSize:"15",width:"100%"}}>
                <thead>
                    <tr>
                        <td>Company Name</td>
                        <td>From</td>
                        <td>To</td>
                        <td>Type</td>
                        <td>Date</td>
                        <td>Statues</td>
                    </tr>
                </thead>
                <tbody>
                   
                    {Data}
                </tbody>
            </table>
        </div>
    </div>
  );
}

export default TickestTable;
