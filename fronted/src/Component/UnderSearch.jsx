import React from 'react'
import { IoIosSearch } from "react-icons/io";

const UnderSearch = ({title}) => {
  return (
    <div>
     <div className="mt-2 w-full h-10 flex justify-between px-3 items-center ">
       
      <div className=" font-bold text-3xl ">
<h1>{title}</h1>
      </div>
      <div>
<IoIosSearch size="30" />
      </div>

    </div>
    
    
    </div>
  )
}

export default UnderSearch