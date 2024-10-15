import React from 'react'
import { FaUserFriends } from "react-icons/fa";
import Avatar from 'react-avatar';

const Request = ({addfriend ,Name,profileImageUrl,mutualFriends}) => {
  
  const mutualFriendsLength = mutualFriends ? mutualFriends.length : 0;
  console.log(mutualFriendsLength)
  
  
  return (
    <div>
    <div class="  py-2 px-3 flex ">
  <div class="w-[30%]  ">
    
            <Avatar className="border border-gray-500 " round="50%" src={profileImageUrl} size="100" />
            
  </div>
  <div class="w-[70%] pl-2 pt-1">
    <strong>{Name}</strong>
    
    
    { mutualFriendsLength!=="0" ? <span>
    { mutualFriendsLength>="2" ?
    <p class="text-sm font-light relative ">   
    
    <Avatar className="z-10" round="50%" src={mutualFriends[0].profileImageUrl} size="20" 
   / > <Avatar className="absolute top-0 left-2" round="50%" src={mutualFriends[1].profileImageUrl} size="20" /> 
   
  <span class="pl-5">{mutualFriendsLength} mutual friends . </span>  
  {addfriend!=="true"? <span> 2d </span> : '' }</p>
 : "" } </span>  : "" }
  
  {addfriend!=="true"?
  <div>
  
  <button  class="bg-blue-500 text-white px-4 py-1 text-lg font-semibold rounded-lg my-1 text-center w-[46%]" type="button">Confirm</button>
   <button class="bg-gray-300 my-1 mx-2 px-4 py-1 text-lg font-semibold rounded-lg text-center w-[46%]" type="button">Delete</button>
   </div>
  : <div>  <button  class="bg-blue-500 text-white px-4 py-1 text-lg font-semibold rounded-lg my-1 text-center w-[46%]" type="button">Add friend</button>
   <button class="bg-gray-300 my-1 mx-2 px-4 py-1 text-lg font-semibold rounded-lg text-center w-[46%]" type="button">Remove</button>
  </div>
  }
  
  
  </div>

</div>
    
    
    </div>
  )
}



export default Request