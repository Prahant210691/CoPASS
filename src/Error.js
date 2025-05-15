import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

export default function Error() {

    const location = useLocation();
    const hideNavbarPages = ['/login', '/register']; // pages where Navbar should be hidden

    const removeheaderFooter = {
        color: 'blue',
        backgroundColor: 'lightgray',
        padding: '20px',
        borderRadius: '8px'
      };

  return (
    <>
        <Navbar visible={false} /> 
      Page Not found
    </>
  )
}
