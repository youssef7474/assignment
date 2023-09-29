import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import DetailsAllTickets from '../../components/DetailsAllTickets/DetailsAllTickets';
import MoreDetails from '../../components/MoreDetails/MoreDetails';
import TicketDetailsCompo from '../../components/TicketDetails/TicketDetailsCompo';
import "./TicketDetail.css"
import { useSelector } from 'react-redux';
import LoadingCompo from '../../components/LoadingCompo/LoadingCompo';


const TicketDetail = () => {


  const AllTicketsDetails = useSelector((state)=>state.Tickets.records)
  const loading = useSelector((state)=>state.Tickets.loading)
  const error = useSelector((state)=>state.Tickets.error)
  const TicketDetails = useSelector((state)=>state.Tickets.TicketDetails)


  return (
    <div className='page '>
    {
      loading?(
        <div className='containerloading'>
            <LoadingCompo></LoadingCompo>
          </div>
      ):error?(
         <div className='containerloading'>
          <h1>{error}</h1>
        </div>
      ):(
        <>
        <NavBar></NavBar>
        <div className='ticketDetailMobile' style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <DetailsAllTickets AllTicketsDetails={AllTicketsDetails}></DetailsAllTickets>
          <TicketDetailsCompo TicketDetails={TicketDetails}></TicketDetailsCompo>
          <MoreDetails TicketDetails={TicketDetails}></MoreDetails>
        </div>
        </>
      )
    }
  
    </div>
  );
}

export default TicketDetail;
