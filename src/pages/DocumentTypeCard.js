import React from 'react';
import DocumentTypeCardBody from '../Components/DocumentTypeCard/DocumentTypeCardBody/DocumentTypeCardBody';

const DocumentTypeCard = () => {
    const dataList = [
        {
            title: "Confirmation Letter",
            activation: "Active"
        },
        {
            title: "Transfer",
            activation: "Active"
        },
        {
            title: "Graduation Certificate",
            activation: "Active"
        },
        {
            title: "NID",
            activation: "Active"
        },
        {
            title: "TIN",
            activation: "Active"
        },
        {
            title: "Passport",
            activation: "Inactive"
        },
    ]
    return (
        <div className="row p-4">
            {
                dataList.map(data=> <DocumentTypeCardBody key={data.title} data={data}></DocumentTypeCardBody>)
            }
            
        </div>
    );
};

export default DocumentTypeCard;