import React from 'react';
import "./TicektsStats.css"
import PopChart from '../PopChart/PopChart';
import DateBox from '../DateBox/DateBox';
import AllTicketsBox from '../AllTickestBox/AllTicketsBox';
import TicketState from '../Ticketstate/TicketState';

const TicektsStats = () => {
  return (
    <div className='Ticets-stats' style={{padding:"20px",backgroundColor:"white",borderRadius:"10px"}}>
      <DateBox></DateBox>
      <div className='borderLineBottom'>
        <PopChart></PopChart>
      </div>
      <AllTicketsBox></AllTicketsBox> 
      <TicketState></TicketState>
    </div>
  );
}

export default TicektsStats;
