import React from 'react';
import {month} from './constant/index'
const SelectYearMonth = ({ selectMonth, setSelectMonth, selectYear, setSelectYear }) => {
   
    return (
        <div>
            <div className='flex gap-4 m-5'>
                {/* <label for="cars">Choose a car:</label> */}
                <select
                    onChange={(e) => setSelectYear(e.target.value)}
                    className="h-10 border-pink-500 border rounded-md p-2"
                >
                    {
                        [...Array(20).keys()].map((y, i) =>
                            <option value={2020 + y} key={i}>{2020 + y}</option>)
                    }

                </select>

                <select
                    onChange={(e) => setSelectMonth(e.target.value)}
                    className="h-10 border-pink-500 border rounded-md p-2"
                >
                    {
                        month.map((m, i) =>
                            <option value={m.start_index} key={i}>{m.month}</option>)
                    }

                </select>
            </div>
        </div>
    );
};

export default SelectYearMonth;