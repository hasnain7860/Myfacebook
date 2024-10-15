import React from 'react'
import Avatar from 'react-avatar';
import { CiImageOn } from "react-icons/ci";
import { useState } from "react";
const CreatePost = () => {

 const [Addtext, setAddtext] = useState()


  return (
    <div>
    <div className="flex mt-3 pb-2 justify-between w-[90%] mx-auto  ">
      
           <div>
        <Avatar round="50%" src="https://i.pravatar.cc/150?img=2" size="40" />
      </div>
      
      <div>
        <input className="border border-gray-400 rounded px-1 py-2 text-black    w-full"    type="text"  placeholder="What's on your mind?"  name="post" id="post" value={Addtext} onChange={(e)=>{setAddtext(e.target.value)}}   />
      </div>
      <div>
        <CiImageOn  size="40" />
      </div>
    </div>
    </div>
  )
}

export default CreatePost