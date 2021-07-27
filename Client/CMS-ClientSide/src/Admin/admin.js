import React from "react";
import './admin.css';
import { Switch, Route, Link, useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import StudentsList from './AdminPages/studentsList'
import CompaniesList from './AdminPages/companiesList'
import JobsList from './AdminPages/jobsList'
import Footer from '../footer/footer'
import userIcon from '../images/userIconLogo.png'
import companyIcon from '../images/companyIcon.png'
import jobListIcon from '../images/jobListLogo.png'
import dashboardIcon from '../images/dashboardIcon.png'



export default function Admin() {

    let history = useHistory()

    function logOut() {
        localStorage.setItem('emailID', '')
        history.push('/')

    }

    return < >
        <div>
            <div className='adminHeaderPage' >
                <h1 className='adminHeaderPageHeading' > CAMPUS MANAGEMENT SYSTEM </h1>
                <Button className='logoutButton' onClick={logOut}>Logout</Button>
            </div>
            <div className='slideBar'>
                <div className='dashboard'>
                    <img src={dashboardIcon} alt='Dashboard Icon' width='50px' height='50px' />
                    <h3 className='dashboardHeading'>Dashboard</h3>
                </div>
                <div className='dashboardLinks'>
                    <Link to='/admin' className='linkColor'>
                        <img src={userIcon} alt='User Icon' />
                                Students List
                            </Link>
                    <Link to='/admin/companies-list' className='linkColor'>
                        <img src={companyIcon} alt='Company Icon' />
                                Companies List
                            </Link>
                    <Link to='/admin/jobs-list' className='linkColor'>
                        <img src={jobListIcon} width='20px' height='20px' alt='Job List Icon' />
                                Jobs List
                            </Link>
                </div>
            </div>
            <div className='body'>
                <div className='dashboardBody'>
                    <Switch>

                        <Route path='/admin' exact>
                            <StudentsList />
                        </Route>
                        <Route path='/admin/companies-list' exact>
                            <CompaniesList />
                        </Route>
                        <Route path='/admin/jobs-list' exact>
                            <JobsList />
                        </Route>

                    </Switch>
                </div>
                <Footer />
            </div>

        </div>
    </>
}