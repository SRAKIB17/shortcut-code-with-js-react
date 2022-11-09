import React, { useState } from 'react';
import CalenderDateContainer from './CalenderDateContainer';
import CalenderWeekContainer from './CalenderWeekContainer';
import SelectYearMonth from './SelectYearMonth';
const Calender = () => {
    const [selectYear, setSelectYear] = useState('2022');
    const [selectMonth, setSelectMonth] = useState('0');
    const [date, setDate] = useState(1)
    return (
        <div className=''>

            <div className='m-4'>
                <SelectYearMonth
                    selectMonth={selectMonth}
                    selectYear={selectYear}
                    setSelectMonth={setSelectMonth}
                    setSelectYear={setSelectYear} />


                <div className='grid grid-cols-7 gap-2'>

                    <CalenderWeekContainer />
                    <CalenderDateContainer
                        month={selectMonth}
                        year={selectYear}
                        date={date}
                    />
                </div>
            </div>
        </div>
    );
};

export default Calender;