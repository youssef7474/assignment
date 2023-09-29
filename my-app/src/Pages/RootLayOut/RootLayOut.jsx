import React from 'react';
import { Outlet } from 'react-router-dom';
//import App from '../../App';

const RootLayOut = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
}

export default RootLayOut;
