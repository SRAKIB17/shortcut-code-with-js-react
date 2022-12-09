import React from 'react';
import Candidates from './Candidates';
import LatestQueries from './LatestQueries';

const LatestQueriesCandidates = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-12 md:gap-4 xl:gap-10'>
            <div className=' md:col-start-1 md:col-end-6  xl:col-end-5'>
                <LatestQueries/>
            </div>
            <div className='md:col-start-6 md:col-end-13 xl:col-start-5 '>
                <Candidates/>
            </div>
        </div>
    );
};

export default LatestQueriesCandidates;