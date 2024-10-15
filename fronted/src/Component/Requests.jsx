import React from 'react'
import Request from "./Request.jsx";
const Requests = () => {
  return (
    <div>
     <div className="mt-2 w-full h-10 flex justify-between px-3 items-center ">
       
      <div className=" font-bold text-xl ">
<h1>Friend requests <strong class="text-red-600">2</strong></h1>
      </div>
      <div>
<h1 class="text-blue-500 text-bold text-xl">See all</h1>
      </div>
    </div>
    
<div class="mb-2">
    <Request/>
        <Request/>
    </div>
    
    
    
    </div>
  )
}

export default Requests