import React from 'react';
import {AiOutlineArrowRight} from "react-icons/ai"
import "./TicketState.css"
const TicketState = () => {
  return (
    <div>

        <div className='borderLineBottom' >
            <div className='stateBox greendot' style={{position:"relative"}}>
                <h1 style={{fontSize:"12px",color:"##001011"}}>Solved
                    <span style={{fontSize:"10px",color:"#B9BCBC"}}>
                        (0)
                    </span>
                </h1>
                <div>
                    <AiOutlineArrowRight style={{color:"#B9BCBC"}}></AiOutlineArrowRight>
                </div>
            </div>
        </div>


        <div className='borderLineBottom' >
        <div className='stateBox yellowDot' style={{position:"relative"}} >
            <h1 style={{fontSize:"12px",color:"##001011"}}>Pending
                <span style={{fontSize:"10px",color:"#B9BCBC"}}>
                    (0)
                </span>
            </h1>
            <div>
                <AiOutlineArrowRight style={{color:"#B9BCBC"}}></AiOutlineArrowRight>
            </div>
        </div>
    </div>

    <div className='borderLineBottom' >
    <div className='stateBox blueDot' style={{position:"relative"}}>
        <h1 style={{fontSize:"12px",color:"##001011"}}>In progress
            <span style={{fontSize:"10px",color:"#B9BCBC"}}>
                (0)
            </span>
        </h1>
        <div>
            <AiOutlineArrowRight style={{color:"#B9BCBC"}}></AiOutlineArrowRight>
        </div>
    </div>
</div>

<div className='borderLineBottom' >
<div className='stateBox redDot' style={{position:"relative"}} >
    <h1 style={{fontSize:"12px",color:"##001011"}}>Canceled
        <span style={{fontSize:"10px",color:"#B9BCBC"}}>
            (0)
        </span>
    </h1>
    <div>
        <AiOutlineArrowRight style={{color:"#B9BCBC"}}></AiOutlineArrowRight>
    </div>
</div>
</div>

<div className='borderLineBottom' >
<div className='stateBox grayDot'  style={{position:"relative"}} >
    <h1 style={{fontSize:"12px",color:"##001011"}}>Closed
        <span style={{fontSize:"10px",color:"#B9BCBC"}}>
            (0)
        </span>
    </h1>
    <div>
        <AiOutlineArrowRight style={{color:"#B9BCBC"}}></AiOutlineArrowRight>
    </div>
</div>
</div>


    </div>
  );
}

export default TicketState;
