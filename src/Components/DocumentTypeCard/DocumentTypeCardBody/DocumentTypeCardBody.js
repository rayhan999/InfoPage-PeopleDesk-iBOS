import { IconButton } from '@mui/material';
import React from 'react';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import Button from '@mui/material/Button';
import '../DocumentTypeCardBody.css';

const DocumentTypeCardBody = (props) => {
    const { title, activation } = props.data;
    return (
        <div class="card col-md-4 col-sm-6 col-xs-12 p-2 border-0 " >
            <div class="card-body border rounded docuTypeCard">
                <h5 class="card-title titleCard">{title}</h5>
                <div className="d-flex justify-content-between align-items-center">
                
                    <Button variant="text" sx={{
                        background: `${activation === 'Active' ? "#E4F8DD" : "#FFE2E1"}`,
                        borderRadius: '8px',
                        textTransform: 'capitalize',
                        fontWeight: 'bold',
                        color: `${activation === 'Active' ? "#229A16" : "#BD3044"}`,
                        fontSize: '12px',
                    }}>{activation}</Button>
                    <IconButton aria-label="delete" className="iconButton" sx={{
                        background: '#FFFFFF',
                        border: '1px solid rgba(166, 159, 161, 0.5)',
                        boxSizing: 'border-box',
                        boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.25)', opacity: '0'
                    }}>
                        <CreateOutlinedIcon />
                    </IconButton>
                </div>

            </div>
        </div>
    );
};

export default DocumentTypeCardBody;