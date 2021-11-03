import React from 'react';
import './TitleHeader.css';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import CreateIcon from '@mui/icons-material/Create';
import SaveIcon from '@mui/icons-material/Save';

const TitleHeader = () => {
    return (
        // <div className="row">
            <div className=" row mt-3">
                <div className=" profile titleHeader col-lg-7 col-md-5 col-sm-12">
                    Employee Profile
                </div>
                <div className=" buttonList col-lg-5 col-md-7 col-xs-12 align-self-end row">
                    <button type="button" class="btn col-lg-4 col-md-4 d-flex justify-content-end  mb-3"><CreateIcon /> Edit Profile</button>
                    <button type="button" class="btn col-lg-4 col-md-4  d-flex justify-content-end mb-3"><PrintOutlinedIcon />  Print</button>
                    <button type="button" class="btn col-lg-4 col-md-4 d-flex justify-content-end  mb-3"><SaveIcon /> Save as PDF</button>
                    
                </div>
            </div>
        // </div>
    );
};

export default TitleHeader;