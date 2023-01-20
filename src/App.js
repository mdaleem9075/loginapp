import Login from "./components/Login";
import UserList from "./components/UserList";
import "./components/common.css"
import { PrivateRoute } from "./components/Route/PrivateRoute";
import { PublicRoute } from "./components/Route/PublicRoute";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  useEffect(()=>{
    setInterval(() => {
      const res=sessionStorage.getItem('isloggedIn')
      if (res){
        setIsLoggedIn(true)
      }else{
        setIsLoggedIn(false)
      }
    }, 1000);
  },[])
  return (
    <div className="App">
      {isLoggedIn == false ?
      <PublicRoute/>:
      <PrivateRoute/>}
    </div>
  );
}

export default App;
