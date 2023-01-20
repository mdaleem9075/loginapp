import React, { useState, useEffect } from "react";
import { Grid, Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);
  const navigate=useNavigate()
  const handleRagister = () => {
    if (username != "" && email != "" && password != "") {
      const userStoreData = JSON.parse(localStorage.getItem("user"));
      if (userStoreData) {
        userStoreData.push({
          username: username,
          email: email,
          password: password,
        });
        localStorage.setItem("user", JSON.stringify(user));
        setUser(userStoreData);
        setTimeout(()=>{

          navigate('/')
        },1000)
      } else {
        setUser([
          ...user,
          { username: username, email: email, password: password },
        ]);
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  console.log("user", user);
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
              onChange={(event) => setUsername(event.target.value)}
              fullWidth
            />
            <br />
            <br />
            <TextField
              variant="outlined"
              label="Email ID"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              fullWidth
            />
            <br />
            <br />

            <TextField
              variant="outlined"
              label="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              fullWidth
            />
            <br />
            <br />
            <Button variant="contained" onClick={handleRagister} fullWidth>
              Ragister
            </Button>
          </Grid>
          <Grid item xs={8}></Grid>
        </Grid>
      </Grid>
      <Grid
          item
          xs={4}
          sx={{ position: "absolute", bottom: "15px",right:'80px' }}
        >
          <Link to="/">
            <h4>Login Account ?</h4>
          </Link>
        </Grid>
    </Grid>
  );
};

export default Register;
