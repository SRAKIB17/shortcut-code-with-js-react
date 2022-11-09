import React, { useState } from 'react';
import { gridArray, month as monthArr } from './constant';
import Plus_increase_zoom_add_new from './Plus_increase_zoom_add_new';

const CalenderDateContainer = ({ year, month }) => {
    const getFullDate = new Date(year, month, 1);
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const startIndex = getFullDate.getDay();

    const getLastValue = monthArr[month]
    const endIndex = new Date(year, getLastValue?.last_index, 0)?.getDate() + startIndex
    return (
        <>
            {
                gridArray.map((date, i) =>
                    i >= startIndex && i < endIndex ?
                        <SpecificNote
                            date={date}
                            month={month}
                            year={year}
                            startIndex={startIndex}
                        />
                        :
                        <div className=''>

                        </div>
                )
            }
        </>
    );
};


const SpecificNote = ({ date, month, year, startIndex }) => {

    const taskFor = date + month + year

    return (
        <div
            className='CalenderDateDayContainerActive  cursor-pointer'
        >

            <div className='bg-amber-100 relative'>
                {date - startIndex + 1}
                <div className='absolute top-1 right-1'>
                    <Plus_increase_zoom_add_new size='10' strokeColor='red' strokeWidth='10' />
                </div>
            </div>
            {/* <div className='hover:absolute hover:z-50 min-h-[200px] max-w-[200px] w-full hover:rounded-md hover:p-1 bg-blue-50'>
               
            </div> */}
        </div>
    )
}
export default CalenderDateContainer;