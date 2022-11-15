import React, { useState } from 'react';
import DropDownCountry from './DropDownCountry';

const PhoneNumber = () => {

    const [selectCountry, setSelectCountry] = useState({});
    const inputNumberHandle = (event) => {
        const phoneWithDialCodeCheck = document.getElementById('phoneWithDialCodeCheck')
        const value = event.target.value;
        const phLength = selectCountry?.phLength
        console.log(phLength)
        if (value.value == '') {
            phoneWithDialCodeCheck.style.border = '1.5px solid red'
            alert('please select a country')
        }
        else {

            if (/\D/g.test(value) || value == '') {
                phoneWithDialCodeCheck.style.border = '1.5px solid red'
            }
            else {
                if (phLength > value?.length || phLength < value?.length) {
                    phoneWithDialCodeCheck.style.border = '1.5px solid red'
                }
                else {
                    phoneWithDialCodeCheck.style.border = '1.5px solid green'
                }

            }
        }

    }

    return (
        <div className='flex items-center'>

            <div className='relative'>
                <DropDownCountry setSelectCountry={setSelectCountry} selectCountry={selectCountry} />
            </div>
            <div id='phoneWithDialCodeCheck' className='flex items-center input input-sm md:input-md rounded-sm border border-gray-300 focus:outline-[#98CBFF] focus:outline-3 w-full' >
                <span>
                    {selectCountry?.dial_code}
                </span>
                <input
                    type="text"
                    placeholder='Phone Number'
                    onInput={inputNumberHandle}
                    name='phone'
                    className='input md:input-sm  border-none outline-none focus:outline-none p-0 rounded-sm pl-2 input-xs text-[13px] w-full'
                />
            </div>

        </div>
    );
};

export default PhoneNumber;