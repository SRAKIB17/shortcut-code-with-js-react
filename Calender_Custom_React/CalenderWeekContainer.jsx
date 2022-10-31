import React from 'react';
import { weekArray } from './constant';

const CalenderWeekContainer = () => {
    return (
        <>
            {
                weekArray.map((data, i) =>
                    <div className='m-1 border h-6 text-center bg-amber-100' key={i
                    }>
                        {data}
                    </div>
                )
            }
        </>

    );
};

export default CalenderWeekContainer;