import axios from 'axios';
import React, { useEffect, useState } from 'react';
import appSetting from '../../appSetting';
import './companyPages.css'

function Users() {


    function appliedUsersList() {

        axios.post(`${appSetting.serverBaseUrl}/student/applied-user`, { companyEmailId: localStorage.getItem('emailID') })
            .then(success => {
                // alert('Applied Users Found')
                setAppliedUsers(success.data.appliedJob)
                console.log(appliedUsers)
            })
            .catch(err => {
                // alert('Jobs Cannot Found')
                console.log(err)
            })
    }

    useEffect(() => {
        appliedUsersList()
    }, [])


    let [appliedUsers, setAppliedUsers] = useState([])
    let serialNo = 1;
    return <>
        <h1>Applied Users List  </h1>
        <table className="table jobList">
            <thead className="thead-dark">
                <tr>
                    <th scope="col" >#</th>
                    <th scope="col">Email</th>
                    <th scope="col">Applied In</th>
                </tr>
            </thead>
            <tbody>

                {
                    Array.isArray(appliedUsers) && appliedUsers.map(appliedUser => {
                        return <>
                            <tr>
                                <th scope="row" style={{ color: 'black' }}>{serialNo++}</th>
                                <td>{appliedUser.emailId}</td>
                                <td>{appliedUser.title}</td>
                            </tr>
                        </>
                    })
                }

                {/* <tr>
                    <th scope="row" style={{ color: 'black' }}>1</th>
                    <td>Abc</td>
                    <td>abc@gmail.com</td>
                    <td>Web designer</td>
                </tr>
                <tr>
                    <th scope="row" style={{ color: 'black' }}>2</th>
                    <td>Def</td>
                    <td>def@gmail.com</td>
                    <td>Web developer</td>
                </tr>
                <tr>
                    <th scope="row" style={{ color: 'black' }}>3</th>
                    <td>Ghi</td>
                    <td>ghi@gmail.com</td>
                    <td>Graphic designer</td>
                </tr>
                <tr>
                    <th scope="row" style={{ color: 'black' }}>4</th>
                    <td>Ijk</td>
                    <td>ijk@gmail.com</td>
                    <td>Mern Stack Developer</td>
                </tr> */}
            </tbody>
        </table>
    </>
}

export default Users;