import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {RouterProvider}from "react-router-dom";
import router from './components/Routes/Routs'
import AuthProvider from './components/Provider/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <div className='lg:px-12 px-6'>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </div>
)
