import React from 'react'
import Home from './components/Home'
import BookTicket from './components/BookTicket'
import Summary from './components/Summary'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
           <Routes>           
              <Route path='/' element={<Home/>}/>
              <Route path='/summary' element={<Summary/>}/>
              <Route path='/bookticket' element={<BookTicket/>}/>
                
              </Routes>
              </BrowserRouter>
    </div>
  )
}

export default App
