import React, { useState } from "react";
import { Grid, Button, TextField } from "@mui/material";
import Register from "./Register";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    debugger
    const getData= JSON.parse(localStorage.getItem("user"))
    const findData=getData?.find((item)=>item.username.toUpperCase().includes(username?.toUpperCase()))
    if (findData){
      if (findData.username == username && findData.password==password){
        sessionStorage.setItem('isloggedIn',true)
      }else{
        setError("please enter correct password")
      }
    }else{
      setError("please enter correct username")
    }
  };

  const handleNavigate = () => {
    navigate("/ragistration");
  };
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <div>
          <img
            src="https://econtrolsystems.com/application/files/8515/8017/5472/what-can-temperatur-monitoring-do-for-your-lab.jpg"
            height="650px"
            width="700px"
          />
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            {" "}
          </Grid>
          <Grid item xs={6} sx={{ position: "relative", right: "45px" }}>
            <img
              src="https://mms.businesswire.com/media/20200721005966/en/807201/22/ShipcomLogo.jpg"
              alt="logo"
              height="200px"
              width="350px"
            />{" "}
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={5}>
            {" "}
          </Grid>
          <Grid
            item
            xs={4}
            textAlign="center"
            sx={{ position: "relative", bottom: "110px", right: "15px" }}
          >
            <h1>Welcome</h1>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={4}>
            {" "}
          </Grid>
          <Grid
            item
            xs={5}
            textAlign="center"
            sx={{ position: "relative", bottom: "160px", left: "5px" }}
          >
            <h5>Login to Labs Monitoring System</h5>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid
            item
            xs={8}
            sx={{ position: "relative", bottom: "130px", marginLeft: "150px" }}
          >
            <TextField
              variant="outlined"
              label="User Name"
              value={username}
              onChange={(event) => setUsername(event.target.value) & setError('')}
              fullWidth
            />
            <br />
            <br />
            <TextField
              variant="outlined"
              label="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value) & setError('')}
              fullWidth
            />
            <br />
            <br />

            <h4 style={{color:"red"}}>{error && error}</h4>
            <Button variant="contained" onClick={handleSubmit} fullWidth>
              Login
            </Button>
          </Grid>
          <Grid item xs={8}></Grid>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{ position: "relative", bottom: "170px", left: "435px" }}
        >
          <Link to="/ragistration">
            <h4>Ragister Account ?</h4>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
