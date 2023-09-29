import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import TicketDetail from './Pages/TicketDetails/TicketDetail';
import RootLayOut from './Pages/RootLayOut/RootLayOut.jsx';
import { Provider } from 'react-redux';
import store from './State/Index';

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<RootLayOut></RootLayOut>
      ,
      children:[
        {
          path:"/",
          element:<App></App>
        }
        ,
        {
          path:":id/Details",
          element:<TicketDetail></TicketDetail>
        }
      ]
    }
  ]
  )



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

