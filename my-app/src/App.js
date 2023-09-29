import React, { useEffect } from 'react';
import SideBar from "./components/SideBar/SideBar.jsx"
import NavBar from './components/NavBar/NavBar.jsx';
import TicektsStats from './components/TicetsStats/TicektsStats.jsx';
import SearchBarCompo from './components/SearchBarCompo/SearchBarCompo.jsx';
import AllTickets from './components/AllTickets/AllTickets.jsx';
import LoadingCompo from "./components/LoadingCompo/LoadingCompo.jsx"
import { useDispatch,useSelector } from 'react-redux';
import { fetchTickets } from './State/TicketsSlice.js';
import "./App.css"
const App = () => {


  const dispatch = useDispatch()

  const AllTicketsDetails = useSelector((state)=>state.Tickets.records)
  const loading = useSelector((state)=>state.Tickets.loading)
  const error = useSelector((state)=>state.Tickets.error)

  useEffect(()=>{
    dispatch(fetchTickets())
  },[dispatch])


  

  

  return (
    <div>
    {loading?
      (   <div className='containerloading'>
            <LoadingCompo></LoadingCompo>
          </div>
      ):error?(
        <div className='containerloading'>
          <h1>{error}</h1>
        </div>
    )
   
    :
    (
    <div className='page d-flex'>
        <SideBar></SideBar>

        <div className="content w-full">
          <NavBar></NavBar>
          
          <div className='tickets-compo' style={{display:"flex", margin:"20px",gap:"20px"}}>
          
            <TicektsStats  ></TicektsStats>

            <div style={{display:"flex",gap:"20px",flexDirection:"column",width:"100%"}}>

              <SearchBarCompo></SearchBarCompo>
              <AllTickets AllTicketsDetails={AllTicketsDetails}></AllTickets>

            </div>

          </div>

        </div>

  
      </div>
      )
  }
      
    </div>
  );
}

export default App;
