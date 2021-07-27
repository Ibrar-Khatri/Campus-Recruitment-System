import React,{ useState } from "react";
import "./user.css";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";
import { useHistory } from 'react-router-dom'
import appSetting from '../appSetting'

export default function SignUp() {

  let history = useHistory()

  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [emailId, setEmailId] = useState("");
  let [password, setPassword] = useState("");
  let [category, setCategory] = useState("");


  function signUp(e) {
    e.preventDefault()

    let userDetails = {
      firstName,
      lastName,
      emailId,
      password,
      category
    }
    // console.log(userDetails)

    axios.post(`${appSetting.serverBaseUrl}/user/signup`, userDetails)
      .then(success => {
        if (success.data.status) {
          // alert('Login Successfuly')
          localStorage.setItem('emailID', success.data.createdUser.emailId);

          if (success.data.createdUser.category === 'student') {
            history.push('/student')
          }
          else if (success.data.createdUser.category === 'company') {
            history.push('/company')
          }
          else if (success.data.createdUser.category === 'admin') {
            history.push('/admin')
          }
        }
      })

      .catch(err => {
        // alert('Unable to post user details')
        console.log('Unable to post user details')
      })
  }


  return (
    <>
      <div >
        <form onSubmit={signUp} className="signup">
          <h1>Sign Up</h1>
          <TextField
            id="standard-required"
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <TextField
            id="standard-required"
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <TextField
            id="standard-required"
            label="Email"
            type="email"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            required
          />
          <TextField
            id="standard-required"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />

          <FormControl className="FormControl">
            <InputLabel id="demo-simple-select-label">Sign Up As </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="company">Company</MenuItem>
            </Select>
          </FormControl>

          <div className="loginLink">
            Already a member? <Link to="/">Log In</Link>
          </div>
          <Button
            type="submit"
            variant="contained"
            style={{ backgroundColor: "#190061", color: "white" }}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </>
  );
}
