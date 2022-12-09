import React from 'react';
import DashboardHeader from './DashboardHeader';

const MainBody = ({ children }) => {
    return (
        <div id="mainDashboard">
            <DashboardHeader />
            <div id='dashboard_content'>
                {children}
            </div>
        </div>
    );
};

export default MainBody;