import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './studentPages.css';
import appSetting from '../../appSetting';


function Company() {

    function listOfCompanies() {

        axios.post(`${appSetting.serverBaseUrl}/user/company-list`, { category: 'company' })
            .then(success => {
                // alert('Company List Found Successfull')
                setCompanyDetails(success.data.companiesList)
            })
            .catch(err => {
                // alert('Company list cannot be found')
            })

    }


    let [companyDetails, setCompanyDetails] = useState([])

    useEffect(() => {
        listOfCompanies()
    }, [])


    let serialNo = 1;
    return <>
        <h1 className='tableHeading'>Registered Companies</h1>
        <table className="table companyList">
            <thead className="thead-dark">
                <tr>
                    <th scope="col" >#</th>
                    <th scope="col">Company Name</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>

                {
                    companyDetails.map(company => {
                        return <>
                            <tr>
                                <th scope="row" style={{ color: 'black' }}>{serialNo++}</th>
                                <td>{company.firstName + '' + company.lastName}</td>
                                <td>{company.emailId}</td>
                            </tr>
                        </>
                    })
                }
                

            </tbody>
        </table>
    </>
}

export default Company;