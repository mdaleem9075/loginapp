import React from 'react'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import Login from '../Login'
import Register from '../Register'

export const PublicRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/ragistration' element={<Register/>}/>
        </Routes>
    </div>
  )
}
