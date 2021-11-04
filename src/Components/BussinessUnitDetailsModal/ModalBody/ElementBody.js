
import { Avatar } from '@mui/material';
import React from 'react';

const ElementBody = (props) => {
    const {icon , title , subtitle} = props.element;
    return (
        <div class="row align-items-center gy-xs-3 border-top pt-2 pb-2 element-body">
            <div class="col-md-1 col-sm-12 col-xs-12">
                <Avatar sx={{ width: '40px' , height: '40px', color:'#616163'}}>
                   {icon}
                </Avatar>
            </div>
            <div class="col-md-11 col-sm-12 col-xs-12">
                <h5 className="card-title element-title">{title}</h5>
                <h6 className="card-subtitle mb-2 element-subtitle">{subtitle}</h6>
            </div>
        </div>
    );
};

export default ElementBody;