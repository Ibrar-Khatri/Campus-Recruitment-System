import React,{ useState } from 'react';
import './user.css';
import { Link, useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import axios from 'axios';
import appSetting from '../appSetting';


export default function SignIn() {

    let history = useHistory()

    let [emailId, setEmailId] = useState('')
    let [password, setPassword] = useState('')


    function signIn(e) {
        e.preventDefault()



        let userDetail = {
            emailId,
            password
        }

        axios.post(`${appSetting.serverBaseUrl}/user/signin`, userDetail)
            .then(success => {
                if (success.data.status) {
                    // alert('Login Successfuly')
                    localStorage.setItem('emailID', success.data.userInfo.emailId);
                    
                    if (success.data.userInfo.category === 'student') {
                        history.push('/student')
                    }
                    else if (success.data.userInfo.category === 'company') {
                        history.push('/company')
                    }
                    else if (success.data.userInfo.category === 'admin') {
                        history.push('/admin')
                    }

                }

                else {
                    // alert('Login Failed' + success.data.errMessage)
                    console.log('Login Failed' + success.data.errMessage)
                }
            })
            .catch(err => {
                // alert('Uable to Login')
                console.log('Unable to post Data ', err)
            })
    }






    return <>
        <div>
            <form onSubmit={signIn} className='signup'>
                <h1>Log In</h1>
                <TextField label='Email' type='email' onChange={e => setEmailId(e.target.value)} required />
                <TextField label='Password' type="password" onChange={e => setPassword(e.target.value)} required />
                <div className='signupLink'>
                    <Button type='submit' variant="contained" color="primary" style={{ backgroundColor: '#190061', color: 'white' }}>Log In</Button>
                </div>
                <div className='signupLink'>
                    Don'nt have any account? <Link to='/signup'>Create one now</Link>
                </div>
            </form>

        </div>


    </>
}








