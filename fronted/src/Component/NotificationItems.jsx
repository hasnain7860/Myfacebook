import React from 'react'
import Avatar from 'react-avatar';
import { FaUserFriends } from "react-icons/fa";


const NotificationItems = () => {
  return (
    <div>
    
    <div class=" bg-blue-100 py-2 px-3 flex ">
  <div class="w-[20%] relative ">
    
            <Avatar className="border border-gray-500 " round="50%" src="https://i.pravatar.cc/150?img=2" size="70" />
            <FaUserFriends class="absolute bottom-0 right-[-5px] bg-green-600 text-white rounded-full p-1" size='32'/> 
              
            
  </div>
  <div class="w-[90%] pl-2 pt-1">
    <p><strong>Queen</strong> followed you</p>
    <p class="text-sm font-light">2d</p>
  </div>
  <div class="w-[10%] flex ">
    <p class="text-2xl">...</p>
  </div>
</div>
    
    
    
    </div>
  )
}

export default NotificationItems