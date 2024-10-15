import { useState } from 'react'
import Home from './Component/Home.jsx'

import Friends from './Component/Friends.jsx'
import Notification from "./Component/Notification.jsx";
import Setting from "./Component/Setting.jsx";
import Changer from "./Component/Changer.jsx";
import SignUp from "./Component/SignUp.jsx";
import { BrowserRouter as Router} from 'react-router-dom'
import { Route, Routes} from 'react-router-dom'
function App() {
  return (
  <>
          
   <Router>
      <Routes>

        <Route exact path="/"  element={<Changer><Home/></Changer>} />
        <Route exact path="/login"  element={<Changer><Home/></Changer>} />
        <Route exact path="/signup"  element={<Changer><SignUp/></Changer>} />
        <Route exact path="/friends"  element={<Changer><Friends/></Changer> } />
        <Route exact path="/notification"  element={ <Changer><Notification/></Changer>} />
        <Route exact path="/setting"  element={ <Changer><Setting/></Changer>} />
        
        
        
      </Routes>
    </Router>

    </>


  
  )
}

export default App
