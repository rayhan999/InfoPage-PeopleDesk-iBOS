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
        "Email": "bill.sanders@example.com",
        "National ID": "199990245612",
        "RF ID": "-N/A-",
        "Marital Status": "Single",
        "Nationality": "Bangladeshi",
        "Religion": "Islam",
    }
    const GItableBodyCol2 =
    {
        "Mobile Number": "+8801234556812",
        "Passport No.": "199024561241",
        "Date of Birth": "Dec 20, 1997",
        "Gender": "Male",
        "Blood Group": "A+(ve)"
    }
    const GIHeader =
    {
        "avatar": "http://",
        "name": "Shakil Al Kabir",
        "position": "HR Manager"
    }
    const FItableBodyCol1 =
    {
        "Account Number": "123 4567 4568",
        "Bank Name": "Basic Bank ",
        "Branch Name": "Mohammadpur Branch",
        "District": "Dhaka",
        "Swift Code": "01234"
    }
    const FItableBodyCol2 =
    {
        "Account Type": "Savings Account",
        "Account Number": "123 4567 4568"
    }
    const ADtableBodyCol1 =
    {
        "House": "402",
        "Road": "Sher-E-Bangla Road",
        "City": "Dhaka",
        "District": "Dhaka",
        "Division": "Dhaka",
        "Country": "Bangladesh"
    }
    const ADtableBodyCol2 =
    {
        "House": "402",
        "Road": "Sher-E-Bangla Road",
        "City": "Dhaka",
        "District": "Dhaka",
        "Division": "Dhaka",
        "Country": "Bangladesh"
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
        "Employment Status": "Full-Time",
        "Department": "Development",
        "Designation": "Front-End Developer",
        "Rank": "-----------",
        "Job Level": "Junior"
    }
    const PrItableBodyCol2 =
    {
        "Source of Hire": "Social Media",
        "Work Phone": "+8801952430158",
        "Appointment Date": "Oct 05, 2021",
        "Joining Date": "Oct 05, 2021",
        "Supervisor": "Sayed Ahmed",
        "Line Manager": "Al Amin Hossain"
    }
    const AItableBodyCol1 =
    {
        "Payroll Group": "-----------",
        "Configure Type": "-----------",
        "Calender Name": "-----------",
        "Organization Structure": "-----------",
        "remuneration Type": "-----------"
    }
    const AItableBodyCol2 =
    {
        "Training Title": "-----------",
        "Issuing Organization": "iBOS ltd.",
        "Training Year": "2021",
        "Duration(Days)": "90 Days",
        "Expiration Date": "Dec 2026",
        "Training Covered On": "Dec 2021"
    }
    const ExptableBodyCol1 =
    {
        "Institution Name": "ABC Technology",
        "Degree": "HR Manager",
        "Field (of) Study": "Dictum viverra eu, urna, ut morbi ultrices in eget quis. Massa... ",
        "Year of Education": "10 Jan 2019",
        "Grade/GPA/CGPA": "30 Aug 2020"
    }
    const ExptableBodyCol2 =
    {
        "Company Name": "Dhaka University",
        "Job Title": "M.A.",
        "Job Description": "HR Management",
        "From Date": "2018",
        "To Date": "3.90"
    }
    
    return (
        <div>
            {/* <MenuNavbar></MenuNavbar> */}
            <div>
                {/* <Topbar></Topbar> */}
                <Container maxWidth="xl" className="mb-5">
                
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