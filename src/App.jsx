
import React, { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
// import { useOnline } from './Components/Context/OnlineContext.jsx';
import { SearchProvider } from './Components/Context/SearchContext.jsx';
import PrivateRoutes from './Components/Routes/PrivateRoutes.jsx';

import { Header, Login, PageNotFound } from './Components/index.js';

import useNetworkStatus from './Components/Hooks/useNetworkStatus.js';
import { AboutPath, ContactPath, HomePath, LoginPath } from './constants.js';

const ImagePage = React.lazy(() => import('./Components/Pages/ImagePage.jsx'));
const About = React.lazy(() => import('./Components/Pages/About.jsx'));
const Contact = React.lazy(() => import('./Components/Pages/Contact.jsx'));



function App() {
  // const isOnline = useOnline();
  const networkStatus = useNetworkStatus();
  console.log("App", networkStatus)
  const location = useLocation();
  const path = location.pathname;

  const routes = [
    {path: HomePath, element: <ImagePage />},
    {path: AboutPath, element: <About />},
    {path: ContactPath, element: <Contact />}
  ]

  return (
    <div>
      <SearchProvider>
          {path === LoginPath ? null :  <Header isOnline={networkStatus}/>} 
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route exact path={LoginPath} element={<Login/>} />
              <Route exact path='/' element={<PrivateRoutes />}>
                { routes.map((route, index) => (
                  <Route key={index} path={route.path} element={route.element} />
                ))}
              </Route>  
              <Route path="*" element={<PageNotFound/>}/>
            </Routes>
          </Suspense>  
      </SearchProvider>
    </div>
  );
}

export default App;