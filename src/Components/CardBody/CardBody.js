import { Avatar, Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import './CardBody.css';

const CardBody = (props) => {

    const { title, GIHeader, FIHeader, row1, row2, row1Title, row2Title, FISocial } = props;
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [checked, setChecked] = React.useState(true);
    const handleChange1 = (event) => {
        setChecked(!checked);
    };
    // console.log("gi", props);
    return (
        <div className="card shadow rounded mt-3 infoCard" >
            <div className="card-header d-flex justify-content-between">
                <h5 className="overTitle">{title}</h5>
                <PrintOutlinedIcon />
            </div>
            <div className="card-body ps-4">
                {GIHeader &&
                    <div class="d-flex">
                        <div class="flex-shrink-0">
                            <Avatar alt="Remy Sharp" src={GIHeader.avatar} sx={{ width: 70, height: 70 }} />
                        </div>
                        <div class="flex-grow-1 ms-3">
                            <h5 className="card-title GIHeader-name">{GIHeader.name}</h5>
                            <h6 className="card-subtitle mb-2 GIHeader-position">{GIHeader.position}</h6>
                        </div>
                    </div>
                }

                <div class="row gx-5 mt-3 ">
                    <div class="col">
                        {
                            row1Title && <h2 className="rowHeader">{row1Title}</h2>
                        }
                        <table class="table table-borderless tableData">

                            <tbody>
                                {FIHeader &&
                                    <> <h5>{FIHeader.title}</h5>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0">
                                                <Avatar alt="Remy Sharp" src={FIHeader.avatar} sx={{ width: 88, height: 88 }} />
                                            </div>
                                            <div class="flex-grow-1 ms-3">

                                                <div class="d-flex justify-content-start align-items-center">
                                                    <Checkbox {...label} defaultChecked color="default" />
                                                    <span>Emergency Contact</span>
                                                </div>
                                                <div class="d-flex justify-content-start align-items-center">
                                                    <Checkbox {...label} defaultChecked color="default" />
                                                    <span>Emergency Contact</span>
                                                </div>
                                                <div class="d-flex justify-content-start align-items-center">

                                                    <Checkbox defaultChecked color="default"
                                                        indeterminate={checked}
                                                        onChange={handleChange1}
                                                    />
                                                    <span>Emergency Contact</span>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                }
                                {row1 && Object.entries(row1).map(([key, value]) => {
                                    return (
                                        <tr>
                                            <td>{key}</td>
                                            <td>:</td>
                                            <td>{value}</td>
                                        </tr>
                                    );
                                })}


                            </tbody>
                        </table>
                    </div>
                    <div class="col">
                        {
                            row2Title && <h2 className="rowHeader">{row2Title}</h2>
                        }
                        <table class="table table-borderless tableData">

                            <tbody>
                                {row2 && Object.entries(row2).map(([key, value]) => {
                                    return (
                                        <tr>
                                            <td>{key}</td>
                                            <td>:</td>
                                            <td>{value}</td>
                                        </tr>
                                    );
                                })}


                            </tbody>
                        </table>
                        {
                            FISocial &&
                            <div>
                                <h4 className="rowHeader">Social Media</h4>
                                {Object.entries(FISocial).map(([key, value]) => {
                                    return (
                                        <table class="table table-borderless tableData">

                                            <tbody>
                                                <tr>
                                                    <td>{key}</td>
                                                    <td>:</td>
                                                    <td style={{ overflowWrap: 'anywhere' }}><a href={value}>{value}</a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    );
                                })}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardBody;