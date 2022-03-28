import React from 'react';
import { withRouter } from 'react-router';
import file from '../../assets/resume.pdf';
import './Resume.scss';

const ResumePage = () => (
    <div className = "resume">
        <object data={file} type="application/pdf">
        </object>
    </div>
);
 
export default withRouter(ResumePage);