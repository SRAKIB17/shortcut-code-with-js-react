import React, { useEffect, useState } from 'react';
import Arrow from '../../../Shared/Navbar/Arrow.jsx';
import { country } from './constant/country.js'

const DropDownCountry = ({ setSelectCountry, selectCountry }) => {

    const [filterCountry, setFilterCountry] = useState(country)

    const showDropdownDatalistHandle = () => {
        const getDropdownById = document.getElementById('dropDownDataCountry')
        getDropdownById.classList.add('active')

        const selectSpecific = document.getElementById('selectSpecific')
        selectSpecific.classList.add('selectSpecific')

        const ShowwithInputCountryList = document.getElementById('withInputCountryList');
        ShowwithInputCountryList.style.display = 'block'

    }


    // *******************************************************************************

    const selectSpecificHandle = value => {
        setSelectCountry(value);


        const getDropdownById = document.getElementById('dropDownDataCountry')
        getDropdownById.classList.remove('active')

        const selectSpecific = document.getElementById('selectSpecific')
        selectSpecific.classList.remove('selectSpecific')

        const ShowwithInputCountryList = document.getElementById('withInputCountryList');
        ShowwithInputCountryList.style.display = 'none'
    }


    // *******************************************************************************
    const setSearchTimeZoneHandle = async (e) => {

        const value = e.target.value;

        const filter = country?.filter(country => {
            return country?.country?.toLowerCase().includes(value?.toLowerCase())
        })
        if (value == '') {

            setFilterCountry([...country])
        }
        else {
            setFilterCountry([...filter])
        }
    }
    // *******************************************************************************
    useEffect(() => {
        window.onclick = (event) => {
            const getDataDropdown = event.target.getAttribute('data-dropdown')
            if (!getDataDropdown) {
                const getDropdownById = document.getElementById('dropDownDataCountry')
                getDropdownById.classList.remove('active')

                const selectSpecific = document.getElementById('selectSpecific')
                selectSpecific.classList.remove('selectSpecific')

                const ShowwithInputCountryList = document.getElementById('withInputCountryList');
                ShowwithInputCountryList.style.display = 'none'
            }

        }
    }, [])
    return (
        <>

            <span
                className='btn btn-sm md:btn-md btn-ghost rounded-sm border border-gray-300 focus:outline-[#98CBFF] focus:outline-3 w-20' id='selectSpecific'
                onClick={() => showDropdownDatalistHandle()}
                data-dropdown='true'>
                <span className='pr-1' data-dropdown='true'>
                    <img src={'./assets/img/country/png/' + selectCountry?.code?.toLowerCase() + '.png'} alt={country?.emoji} className="w-5 h-3 " data-dropdown='true' />
                </span>
                <span style={{ transform: 'rotate(90deg)' }} data-dropdown='true'>
                    <Arrow size='10' />
                </span>
            </span>
            {/*  */}
            <div id='withInputCountryList' data-dropdown='true' style={{ display: 'none' }} >

                <input
                    placeholder='Search'
                    type="text"
                    className='input input-sm md:input-md rounded-sm border border-gray-300 focus:outline-[#98CBFF] focus:outline-3 w-20 md:w-32'
                    autoComplete="off"
                    data-dropdown='true'
                    onInput={setSearchTimeZoneHandle}
                />

                <div className=' hideScrollBar dropdownDatalist border-2 top-[40px] md:top-[55px]' id='dropDownDataCountry' data-dropdown='true'>

                    {
                        filterCountry?.map((country, index) => {

                            return (
                                <span key={country?.id} className='flex flex-col gap-y-5' style={{ fontFamily: 'NeueMontreal' }} data-dropdown='true'>

                                    <span
                                        key={index}
                                        className={(index % 2 != 0 ? ' bg-base-100 ' : 'bg-base-200 ') +
                                            ' cursor-pointer  p-1 btn-ghost capitalize btn rounded-none font-normal flex items-center justify-start'}
                                        onClick={() => selectSpecificHandle(country)}
                                        data-dropdown='true'
                                    >
                                        <span className='pr-1' data-dropdown='true'>
                                            <img src={'./assets/img/country/png/' + country?.code?.toLowerCase() + '.png'} data-dropdown='true' alt={country?.emoji} className="w-4" />
                                        </span>
                                        <span data-dropdown='true' className=' p-1 text-[16px]'>
                                            {
                                                country.country + ' ' + country?.dial_code
                                            }
                                        </span>
                                    </span>
                                </span>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default DropDownCountry;