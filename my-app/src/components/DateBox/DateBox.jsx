import React from 'react';
import {AiOutlineArrowDown} from "react-icons/ai"
import {BsCalendar3} from "react-icons/bs"
import "./DateBox.css"
const DateBox = () => {
  return (
    <div className='date-contanier' >
        <div>
            <BsCalendar3 className='DateIcons'></BsCalendar3>
        </div>

        <div className='Todaytext'>Today</div>

        <div>
            <AiOutlineArrowDown className='DateIcons'></AiOutlineArrowDown>
        </div>
    </div>
  );
}

export default DateBox;
