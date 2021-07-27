import React,{ useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import './adminPages.css';
import appSetting from '../../appSetting';

function CompaniesList() {

    function getCompaniesList() {
        axios.post(`${appSetting.serverBaseUrl}/user/company-list`, { category: 'company' })
            .then(success => {
                setCompanyDetails(success.data.companiesList)
            })
            .catch(err => {
                alert('Company list cannot be found')
            })
    }

    function sendRequestToDeleteCompany(id) {
        axios.delete(`${appSetting.serverBaseUrl}/user/remove-company/${id}`)
            .then(success => {
                console.log(success)
                getCompaniesList()

            })
            .catch(err => {
                console.log(err)
            })
        axios.delete(`${appSetting.serverBaseUrl}/student/delete-applied-user/${id}`)
            .then(success => {
                console.log(success)
            })
            .catch(err => {
                console.log(err)
            })

    }

    let [companyDetails, setCompanyDetails] = useState([])

    useEffect(() => {
        getCompaniesList()
    }, [])


    let serialNo = 1;

    return <>
        <h1>Registered Companies</h1>
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col" >#</th>
                    <th scope="col">Company Name</th>
                    <th scope="col">Email Id</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    companyDetails.map(company => {
                        return <>
                            <tr>
                                <th scope="row" style={{ color: 'black' }}>{serialNo++}</th>
                                <td>{company.firstName + ' ' + company.lastName} </td>
                                <td>{company.emailId}</td>
                                <td>
                                    <Button onClick={() => { sendRequestToDeleteCompany(company._id) }}>Delete</Button>
                                </td>
                            </tr>
                        </>
                    })
                }

            </tbody>
        </table>
    </>
}

export default CompaniesList;