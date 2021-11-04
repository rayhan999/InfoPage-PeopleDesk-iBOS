import { Avatar } from '@mui/material';
import React from 'react';
import TelegramIcon from '@mui/icons-material/Telegram';

const ModalTitle = () => {
    return (
        <div class=" row align-items-center gy-3 mb-4 modal-body-title">
            <div class=" col-md-2 col-sm-12 col-xs-12">
                <Avatar sx={{ width: 89, height: 89, background: 'linear-gradient(180deg, #2AABEE 0%, #229ED9 99.26%)' }} ><TelegramIcon sx={{ width: 68, height: 63}}/></Avatar>
            </div>
            <div class="col-md-10 col-sm-12 col-xs-12">
                <h5 className="card-title title mb-4">Bran Station 23 Limited (BS23L)</h5>
                <h6 className="card-subtitle mb-2 website">branstation-23.com</h6>
                <h6 className="card-subtitle mb-2 address">Uttam Mir Shawkat Sarak, Gulshan Link Road, Dhaka.</h6>
            </div>
        </div>
    );
};

export default ModalTitle;