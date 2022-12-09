import React from 'react';
import LatestQueriesCandidates from './LatestQueriesCandidates/LatestQueriesCandidates';
import ProjectsWithClient from './ProjectsWithClientStatus/ProjectsWithClient';
import TotalAnalyticsDashboard from './TotalAnalyticsDashboard/TotalAnalyticsDashboard';

const DashboardHome = () => {
    return (
        <div className='p-4 lg:pl-12 lg:pt-8'>
            <div>
                <h1 className='font-bold text-2xl xl:text-3xl'>
                    Dashboard
                </h1>
            </div>
            <div className='pt-6'>
                <TotalAnalyticsDashboard />
            </div>
            <div>
                <LatestQueriesCandidates/>
            </div>
            <div>
                <ProjectsWithClient />
            </div>
        </div>
    );
};

export default DashboardHome;