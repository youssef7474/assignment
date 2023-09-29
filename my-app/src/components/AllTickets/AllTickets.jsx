import React from 'react';
import NoTickets from '../NoTickets/NoTickets';
import TickestTable from '../TicketsTable/TickestTable';

const AllTickets = ({AllTicketsDetails}) => {
  return (
    
    <div className='AllTickestCompo' style={{padding:"20px",backgroundColor:"white",borderRadius:"10px"}}>
    {AllTicketsDetails!=null&& AllTicketsDetails.length!==0?
      (
        <TickestTable AllTicketsDetails={AllTicketsDetails}></TickestTable>
      
      ):(  <NoTickets></NoTickets> )
    }
    
    </div>
  );
}

export default AllTickets;
