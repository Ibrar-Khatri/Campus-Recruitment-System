import React from "react";
import '../Company/company.css';
import { BrowserRouter, Switch, Route, Link, useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import AddNewJob from './compayPages/addNewJob'
import JobsList from './compayPages/jobList';
import Users from './compayPages/user';
import Footer from '../footer/footer'
import jobLog from '../images/jobLogo.png'
import jobListLog from '../images/jobListLogo.png'
import userIconLogo from '../images/userIconLogo.png'
import companyDashboardIcon from '../images/companyDashboardIcon.png'


export default function Company() {

    let history = useHistory()

    function logOut() {
        localStorage.setItem('emailID', '')
        history.push('/')

    }


    return < >
        <BrowserRouter>
            <div className='companyHeaderPage' >
                <h1 className='companyHeaderPageHeading' > CAMPUS MANAGEMENT SYSTEM </h1>
                <Button className='logoutButton' onClick={logOut}>Logout</Button>
            </div>


            <div className='slideBar'>
                <div className='companyName'>
                    <img src={companyDashboardIcon} width='100px' height='100px' alt='Company Dashboard Icon'/>
                    <h4>Company Dashboard</h4>
                </div>
                <div className='links'>
                    <Link to='/company' className='linkColor'><img src={jobLog} width='30px' height='30px' alt='Job Icon' />Add New Job</Link>
                    <Link to='/company/job-list' className='linkColor'><img src={jobListLog} width='20px' height='20px' alt='Job List Icon' />Jobs List</Link>
                    <Link to='/company/applied-users' className='linkColor'><img src={userIconLogo} width='20px' height='20px' alt='User Icon' />Users</Link>
                </div>
            </div>


            <div className='body' >
                <div className='companyBody'>
                    <Switch>
                        <Route path='/company' exact>
                            <AddNewJob />
                        </Route>
                        <Route path='/company/job-list'>
                            <JobsList />
                        </Route>
                        <Route path='/company/applied-users'>
                            <Users />
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </div>

        </BrowserRouter>
    </>
}