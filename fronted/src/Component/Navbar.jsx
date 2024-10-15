import React from 'react'
import { useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import Avatar from 'react-avatar';
import Header from "./Header.jsx";
import { Link } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  return (
    <div>
    {location.pathname === '/' ?
   <Header/> : "" }
    <div className="flex w-full justify-between px-3 mt-4 border border-gray-300 border-none" style={{borderBottom: 'solid'}} >
      <div>

      <Link to="/" >
     <FaHome size='35'/>   
</Link>
      </div>
      <div>
 <Link to="/friends" >
       <FaUserFriends size='35'/> 
</Link>
      </div>
      <div>
       <Link to="/notification" >
     <IoIosNotifications size='35'/>   
     </Link>
      </div>
      <div>
        <Link to="/setting" >
        <Avatar round="50%" src="https://i.pravatar.cc/150?img=2" size="35" />
        </Link>
      </div>
      
    </div>
    
    
    </div>
  )
}

export default Navbar