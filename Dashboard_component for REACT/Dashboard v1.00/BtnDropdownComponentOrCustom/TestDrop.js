import React from 'react';
import { useState } from 'react';
import { HiFastForward } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { TfiAngleDown } from 'react-icons/tfi'

const TestDrop = () => {
    const navigate = useNavigate();
    const dropdownHandle = () => {
        const test = document.getElementById('test');
        const angleMenuDropDown = document.getElementById('angleMenuDropDown')

        if (test.style.height === '100px') {
            test.style.height = '0px'
            angleMenuDropDown.style.transform='rotate(0deg)'
        }
        else {
            test.style.height = '100px';
            angleMenuDropDown.style.transform='rotate(180deg)'
        }
    }

    return (
        <>
            <button
                className='onlyIcon'
                onClick={dropdownHandle}

                id={"dashboardMenuButton_test"}
            >
                <span className='dashboardMenu'>
                    <HiFastForward />
                </span>
                <span id='buttonTitle '>
                    Test
                </span>
                <span className='ml-1 angleMenuDropDown' id='angleMenuDropDown'>
                    <TfiAngleDown size={10} strokeWidth='2'/>
                </span>
            </button>

            <ul className="dropdownMenuComponent border-l-2 rounded-b-xl ml-3" id='test'>
                <li>
                    <button
                        className='onlyIcon'
                    >
                        <span className='dashboardMenu'>
                            <HiFastForward />
                        </span>
                        <span id='buttonTitle '>
                            Test
                        </span>
                    </button>
                </li>

                <li>
                    <button
                        className='onlyIcon'
                    >
                        <span className='dashboardMenu'>
                            <HiFastForward />
                        </span>
                        <span id='buttonTitle '>
                            Test
                        </span>
                    </button>
                </li>

            </ul>
        </>
    );
};

export default TestDrop;