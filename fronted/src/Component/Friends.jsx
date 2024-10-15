import React from 'react'
import { IoIosSearch } from "react-icons/io";
import UnderSearch from "./UnderSearch.jsx";
import Requests from "./Requests.jsx";
import Request from "./Request.jsx";
import { useState } from "react";

const Friends = () => {
  

// Function to generate random profile links and avatars
const getRandomProfileUrl = () => `https://www.example.com/profile/${Math.floor(Math.random() * 10000)}`;
const getRandomAvatarUrl = (id) => `https://i.pravatar.cc/150?img=${id}`;
const getRandomName = () => {
  const names = ["Tariq", "Ali", "Jawed", "Sara", "Bilal", "Ayesha", "Ahmed", "Zainab", "Hassan", "Fatima"];
  return names[Math.floor(Math.random() * names.length)];
};

const generateMutualFriends = () => {
  let mutualFriends = [];
  for (let i = 0; i < Math.floor(Math.random() * 3) + 1; i++) {
    mutualFriends.push({
      Name: getRandomName(),
      profileImageUrl: getRandomAvatarUrl(Math.floor(Math.random() * 70) + 1)
    });
  }
  return mutualFriends;
};

const [FriendsData, setFriendsData] = useState(
  Array.from({ length: 10 }).map(() => ({
    ProfileUrl: getRandomProfileUrl(),
    profileImageUrl: getRandomAvatarUrl(Math.floor(Math.random() * 70) + 1),
    Name: getRandomName(),
    mutualFriends: generateMutualFriends(),
  }))
);

// Sample output for debugging
console.log(FriendsData);
  
  return (
    <div>
     <UnderSearch title="Friends"   />

    
    
    <div class="mb-4">
      <button class="px-3 py-1 text-bold text-lg mx-1 bg-gray-300 rounded-2xl" type="button">Suggestion</button>
      <button class="px-3 py-1 text-bold text-lg mx-1 bg-gray-300 rounded-2xl"  type="button">Your friends</button>
    </div>
    <hr  />


<Requests/>

<hr  />

<p class="mt-3 font-bold text-xl px-3 ">People you may know</p>


{FriendsData.map((friend)=>{
  return(
    <Request   Name={friend.Name}     profileImageUrl={friend.profileImageUrl}   mutualFriends={friend.mutualFriends}  addfriend='true' />
    )
})
}





    
    </div>
  )
}

export default Friends