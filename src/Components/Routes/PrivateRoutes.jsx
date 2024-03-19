import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { LoginPath } from '../../constants';
import { GetToken } from '../Utils/Utils';
const ImagePage = React.lazy(() => import('../Pages/ImagePage.jsx'));
const About = React.lazy(() => import('../Pages/About.jsx'));
const Contact = React.lazy(() => import('../Pages/Contact.jsx'));

const PrivateRoutes = () => {
  const token = GetToken('token')  
  return (
    token ? <Outlet /> : <Navigate to={LoginPath} />
  )
}

export default PrivateRoutes