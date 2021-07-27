import './user.css';
import SignUp from './singup'
import SignIn from './signin'
import Footer from '../footer/footer';
import { Route, Switch } from 'react-router-dom'
import React from 'react'


export default function User() {
    return <>
        <div className='formHeader' >
            <h1 className='formHeading1' > CAMPUS MANAGEMENT SYSTEM </h1>
        </div >

        <div className='loginBody'>
            <Switch>
                <Route path='/signup' exact>
                    <SignUp />
                </Route>
                <Route path='/' >
                    <SignIn />
                </Route>
            </Switch>
        </div>
        <Footer />

    </>
}