import React from 'react';
import ElementBody from './ElementBody';
import ModalTitle from './ModalTitle';
import FolderIcon from '@mui/icons-material/Folder';
import Button from '@mui/material/Button';
import '../Modal.css'
import CreateIcon from '@mui/icons-material/Create';
import LayersIcon from '@mui/icons-material/Layers';
import RoomIcon from '@mui/icons-material/Room';
import StarIcon from '@mui/icons-material/Star';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LanguageIcon from '@mui/icons-material/Language';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EmailIcon from '@mui/icons-material/Email';
import { Switch } from '@mui/material';

const ModalBody = () => {
    const elementList = [
        {
            icon: <LayersIcon />,
            title: "ব্রেইন স্টেশন-২৩ লিমিটেড ",
            subtitle: "Business Unit (BN)"
        },
        {
            icon: <RoomIcon />,
            title: "উত্তম মীর শওকত সড়ক, গুলশান লিংক রোড, ঢাকা। ",
            subtitle: "Address (BN)"
        },
        {
            icon: <StarIcon />,
            title: <Switch  defaultChecked color="success" />,
            subtitle: "Activation"
        },
        {
            icon: <LightbulbIcon />,
            title: "AFBL",
            subtitle: "Code"
        },
        {
            icon: <LanguageIcon />,
            title: "English",
            subtitle: "Language"
        },
        {
            icon: <MonetizationOnIcon />,
            title: "BSDT",
            subtitle: "Base Currency"
        },
        {
            icon: <EmailIcon />,
            title: "Contact@bs23l.com",
            subtitle: "Email"
        }

    ]
    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header shadow">
                        <h5 class="modal-title" id="exampleModalLabel">Business Unit Details</h5>
                        <button type="button" class="btn-close closeBTN" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-4">
                        <ModalTitle></ModalTitle>
                        {
                            elementList.map(element => <ElementBody key={element.title} element={element}></ElementBody>)
                        }

                    </div>
                    <div class="modal-footer d-flex justify-content-between">
                        <Button startIcon={<CreateIcon />} sx={{
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '14px',
                            lineHeight: '19px',
                            letterSpacing: '0.15px',
                            color: 'rgba(0, 0, 0, 0.7)'
                        }}>
                            Edit
                        </Button>
                        <Button sx={{
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '14px',
                            lineHeight: '19px',
                            letterSpacing: '0.15px',
                            color: 'rgba(0, 0, 0, 0.7)'
                        }}>Close</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalBody;