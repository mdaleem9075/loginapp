import React from 'react'
import { Navigate, Route ,Routes} from 'react-router-dom'
import UserList from '../UserList'
export const PrivateRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<UserList/>}/>
            <Route path='*' element={<Navigate to="/" replace={true} />}/>
        </Routes>
    </div>
  )
}
