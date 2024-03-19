// backspace key press remove 
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Offline, OfflineColor, Online, OnlineColor, about, contact, home } from '../../../String';
import { AboutPath, ContactPath, HomePath, LoginPath } from '../../../constants';
import Buttons from '../../Atoms/Button/Buttons';
import InputBox from '../../Atoms/Input/InputBox';
import Notify from '../../Atoms/Notification/Notify';
import { useSearch } from '../../Context/SearchContext';
import { RemoveToken, ScrollToTop } from '../../Utils/Utils';

const Navbar = ({networkStatus}) => {
  console.log("Header",networkStatus)
  
  const {searchText,setSearch} = useSearch()

  const navigate = useNavigate();
  
  const handleLogout = () => {
    RemoveToken('token')
    navigate(LoginPath);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className='p-0 m-0'>
      <nav className='fixed pb-[20px] bg-slate-800 w-full h-[70px] flex justify-between items-center z-[1] pt-3'>
        <span className='text-white text-l font-semibold cursor-pointer pl-[20px] ' onClick={ScrollToTop}><i>3rd Part API</i></span>
          <ul className='flex items-center p-[20px] list-none'>
            <li className='p-2'>
              <InputBox
                type="text" 
                placeHolder="Search" 
                id="searchBar" 
                value={searchText}
                onChnage={handleSearchChange}
                className={`bg-transparent focus: outline-none focus: border-0 text-white pl-3`}
                clearBtnReq={true}
                isSearchBar={true}
                handleClearBtn={()=>setSearch('')}
              />
            </li> 
            <li><Link to={HomePath} className='text-white pr-[20px] hover:text-orange-500 hover:no-underline'>{home}</Link></li>
            <li><Link to={AboutPath} className='text-white pr-[20px] hover:text-orange-500 hover:no-underline'>{about}</Link></li>
            <li><Link to={ContactPath} className='text-white pr-[20px] hover:text-orange-500 hover:no-underline'>{contact}</Link></li>
            <li><Buttons onClick={handleLogout} name="Logout" /></li>
          </ul>
        </nav>
      {networkStatus ? (<Notify text={Offline} color={OfflineColor} />):(<Notify text={Online} color={OnlineColor}/>)} 
    </div>
  );
};

export default Navbar;