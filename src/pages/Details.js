import { Container } from '@mui/material';
import React from 'react';
import CardBody from '../Components/CardBody/CardBody';
import CardTitle from '../Components/CardTitle/CardTitle';
import FlashImg from '../Components/FlashImg/FlashImg';
import MenuNavbar from '../Components/MenuNavbar/MenuNavbar';
import TitleHeader from '../Components/TitleHeader/TitleHeader';
import Topbar from '../Components/Topbar/Topbar';

const Details = () => {
    const GItableBodyCol1 =
    {
        "Email": "title000000000Header000",
        "National ID": "123",
        "RF ID": 123,
        "Marital Status": 123,
        "Nationality": 123,
        "Religion": 123,
    }
    const GItableBodyCol2 =
    {
        "Mobile Number": "title Header",
        "Passport No.": "123",
        "Date of Birth": 123,
        "Gender": 123,
        "Blood Group": 123
    }
    const GIHeader =
    {
        "avatar": "http://",
        "name": "GIT",
        "position": "left"
    }
    const FItableBodyCol1 =
    {
        "Account Number": "title Header",
        "Bank Name": "123",
        "Branch Name": 123,
        "District": 123,
        "Swift Code": 123
    }
    const FItableBodyCol2 =
    {
        "Account Type": "title Header",
        "Account Number": "123"
    }
    const ADtableBodyCol1 =
    {
        "House": "title Header",
        "Road": "123",
        "City": 123,
        "District": 123,
        "Division": 123,
        "Country": 123
    }
    const ADtableBodyCol2 =
    {
        "House": "title Header",
        "Road": "123",
        "City": 123,
        "District": 123,
        "Division": 123,
        "Country": 123
    }
    const FIHeader =
    {
        "avatar": "http://"
    }
    const FISocial =
    {
        "Facebook": "http://www.facebook.com",
        "Instagram": "http://www.instagram.com"
    }
    const PrItableBodyCol1 =
    {
        "Employment Status": "title Header",
        "Department": "123",
        "Designation": 123,
        "Rank": 123,
        "Job Level": 123
    }
    const PrItableBodyCol2 =
    {
        "Source of Hire": "title Header",
        "Work Phone": "123",
        "Appointment Date": 123,
        "Joining Date": 123,
        "Supervisor": 123,
        "Line Manager": 123
    }
    const AItableBodyCol1 =
    {
        "Payroll Group": "title Header",
        "Configure Type": "123",
        "Calender Name": 123,
        "Organization Structure": 123,
        "remuneration Type": 123
    }
    const AItableBodyCol2 =
    {
        "Training Title": "title Header",
        "Issuing Organization": "123",
        "Training Year": 123,
        "Duration(Days)": 123,
        "Expiration Date": 123,
        "Training Covered On": 123
    }
    const ExptableBodyCol1 =
    {
        "Company Name": "title Header",
        "Job Title": "123",
        "Job Description": 123,
        "From Date": 123,
        "To Date": 123
    }
    const ExptableBodyCol2 =
    {
        "Institution Name": "title Header",
        "Degree": "123",
        "Field (of) Study": 123,
        "Year of Education": 123,
        "Grade/GPA/CGPA": 123
    }
    return (
        <div>
            {/* <MenuNavbar></MenuNavbar> */}
            <div>
                {/* <Topbar></Topbar> */}
                <Container maxWidth="xl">
                
                            <TitleHeader></TitleHeader>
                            <CardTitle title={'Basic Information'}></CardTitle>
                            <CardBody
                                title={'General Information'}
                                GIHeader={GIHeader}
                                row1={GItableBodyCol1}
                                row2={GItableBodyCol2}
                            ></CardBody>
                            <CardBody
                                title={'Financial Information'}
                                row1={FItableBodyCol1}
                                row2={FItableBodyCol2}
                                row1Title={"Bank Information"}
                                row2Title={"Mobile Banking"}
                            ></CardBody>
                            <CardTitle title={'Personal Information'}></CardTitle>
                            <CardBody
                                title={'Address'}
                                row1={ADtableBodyCol1}
                                row2={ADtableBodyCol2}
                                row1Title={"Present Address"}
                                row2Title={"Permanent Address"}
                            ></CardBody>
                            <CardBody
                                title={'Family Information'}
                                FIHeader={FIHeader}
                                row2={ADtableBodyCol2}
                                row1Title={"Family Information"}
                                FISocial={FISocial}
                            ></CardBody>
                            <CardTitle title={'Professional Information'}></CardTitle>
                            <CardBody
                                title={'Job Description '}
                                row1={PrItableBodyCol1}
                                row2={PrItableBodyCol2}
                                row2Title={"Managerial Information"}
                            ></CardBody>
                            <CardBody
                                title={'Administrative Information '}
                                row1={AItableBodyCol1}
                                row2={AItableBodyCol2}
                                row2Title={"Training Development"}
                            ></CardBody>
                             <CardTitle title={'Experience'}></CardTitle>
                            <CardBody
                                title={'Job Experience '}
                                row1={ExptableBodyCol1}
                                row2={ExptableBodyCol2}
                                row2Title={"Education"}
                            ></CardBody>
                     
                </Container>
            </div>
        </div>
    );
};

export default Details;