import React from 'react'
import { MdCancel } from "react-icons/md";
import Avatar from 'react-avatar';
import { FaEarthAsia } from "react-icons/fa6";
import { AiTwotoneLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";

const Post = ({name,text,date,like,comments,shares,imageUrl,profileImage}) => {
  return (
    <div>
      <div className=" border border-gray-400 border-4" style={{ borderLeftStyle: 'none', borderRightStyle: 'none'}} >
        
          <div className="flex justify-between w-[95%] mx-auto my-1 ">
    <div className="flex">
      <div className="mr-1">
                <Avatar  src={profileImage} round="50%"  size="40" />
      </div>
      
      <div >
        <h1 className="font-bold ">{name}</h1>
        <p>{date}.<FaEarthAsia style={{"display" : "inline"}}  /></p>
      </div>
      
    </div>
    <div>
     <MdCancel size="30"   /> 
    </div>
  </div>
 {/* orginal post */}
 <div class="w-[95%] mx-auto">
     <p >{text}</p>
{imageUrl!==""? <img  src={imageUrl} alt="" /> : '' }
{/* like detail */}
 </div>


<div class="flex justify-between w-[95%] mx-auto my-2">
  <div class=" ">
    <p class="font-light text-sm" ><AiTwotoneLike style={{"display" : "inline","background":"blue"}}   />{like}</p>

  </div>
  <div>
    <p class="font-light text-sm">{comments} comments {shares} shares</p>
  </div>
  
</div>
{/* like , comment and share btn */}
<div class="flex justify-around my-2">
  <div >
   <AiTwotoneLike size="30"   style={{"display" : "inline"}}   />  like
  </div>
  <div>
       <FaRegComment size="30"   style={{"display" : "inline"}}   />  Comments
  </div>
  <div>
       <IoIosShareAlt size="30"   style={{"display" : "inline"}}   />  Share
  </div>
</div>

  
  
      </div>

    
    </div>
  )
}

export default Post