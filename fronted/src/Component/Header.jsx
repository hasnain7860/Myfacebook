import React from 'react'
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <div>
    
        <div className="mt-2 w-full h-10 flex justify-between px-3 items-center ">
       
      <div className="text-blue-500 font-bold text-4xl ">
<h1>Hello</h1>
      </div>
      <div>
<IoIosSearch size="40" />
      </div>
    </div>
    
    </div>
  )
}

export default Header