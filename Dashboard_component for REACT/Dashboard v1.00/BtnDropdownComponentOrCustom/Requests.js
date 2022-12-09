import React from 'react';
import { HiVideoCamera } from 'react-icons/hi';

const Requests = () => {
    return (
        <>
            <button
                className='onlyIcon relative'
                // onClick={dropdownHandle}

                id={"dashboardMenuButton_test"}
                title="Request"
            >
                <span className='dashboardMenu'>
                    <HiVideoCamera size={20} />
                </span>
                <span id='buttonTitle '>
                    Requests
                </span>
                <span className="bg-red-600 absolute right-3 text-xs w-fit p-[3px] pt-[1px] pb-[1px] rounded-full flex items-center justify-center text-[white]">
                    01
                </span>
            </button>
        </>
    );
};

export default Requests;