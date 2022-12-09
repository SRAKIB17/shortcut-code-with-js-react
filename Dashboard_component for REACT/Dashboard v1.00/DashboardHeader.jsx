import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { CgSearch } from 'react-icons/cg';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import Notification from './SVG/Notification';
import Search from './SVG/Search';

const DashboardHeader = () => {
    const showSideNaveBarHandle = (resizeCheck, event) => {
        //MAIN DASHBOARD PARENT
        const dashboard = document.getElementById('dashboard');
        dashboard.style.height = window.innerHeight + 'px';

        //MAIN DASHBOARD CONTENT
        const mainDashboard = document.getElementById('mainDashboard');
        const dashboard_content = document.getElementById('dashboard_content');


        const innerWidthWindow = window.innerWidth;

        dashboard_content.style.top = ((innerWidthWindow > 990) ? 70 : (event?.type === 'resize') ? 70 : 0) + 'px';

        const dashboardHeader = document.getElementById('dashboardHeader');
        dashboardHeader.style.marginLeft = '0px';
        dashboardHeader.style.width = innerWidthWindow - 70 + 'px';

        //SIDENAV
        const sidenavDashboard = document.getElementById('sidenavDashboard');
        // sidenavDashboard.style.position = 'fixed'
        sidenavDashboard.style.maxWidth = '70px'

        // *********************FOR LOGO******************
        const full_logo = document.getElementById('full_logo')

        //**************FOR BUTTON AND TEXT ICON SHOW HIDE************** */
        const menuList = document.getElementById('menuList');

        menuList.style.height = window.innerHeight - 100 + 'px';

        const getMenuButton = menuList.querySelectorAll('button');
        menuList.style.display = 'block';

        if ((mainDashboard.style.margin === '70px' || !mainDashboard.style.margin) && !resizeCheck && innerWidthWindow > 990) {
            mainDashboard.style.margin = '250px'
            mainDashboard.style.top = '0px'
            mainDashboard.style.width = (window.innerWidth - 271) + "px"

            //header width change
            dashboardHeader.style.width = innerWidthWindow - 250 + 'px'

            dashboard_content.style.top = '-170px';

            sidenavDashboard.style.maxWidth = '250px';
            sidenavDashboard.style.height = '100%';

            full_logo.style.display = 'block';

            //FOR LOGO
            for (const button of getMenuButton) {
                button.classList.remove('onlyIcon')
                button.classList.add('withText')
                const text = button.querySelectorAll('span')[1]
                text.style.display = 'block'
            }
        }
        else if (innerWidthWindow > 990) {

            full_logo.style.display = 'none'
            mainDashboard.style.margin = '70px';
            mainDashboard.style.top = '0px'
            sidenavDashboard.style.height = '100%'

            dashboard_content.style.top = '0px'

            sidenavDashboard.style.maxWidth = '70px'
            mainDashboard.style.width = (window.innerWidth - 90) + "px"

            for (const button of getMenuButton) {
                button.classList.add('onlyIcon')
                button.classList.remove('withText')
                const text = button.querySelectorAll('span')[1]
                text.style.display = 'none'
            }
        }
        else {
            mainDashboard.style.margin = '0px'

            mainDashboard.style.width = (window.innerWidth - 20) + "px"
            const dashboardSearchBox = document.getElementById('dashboardSearchBox')

            // for hide menu list//
            for (const button of getMenuButton) {
                button.classList.remove('onlyIcon')
                button.classList.add('withText')
                const text = button.querySelectorAll('span')[1]
                text.style.display = 'block'
            }
            if ((sidenavDashboard.style.height === '100%' || !sidenavDashboard.style.height) && !resizeCheck) {
                sidenavDashboard.style.height = '70px'
                menuList.style.display = 'none'
                sidenavDashboard.style.maxWidth = '70px'
                full_logo.style.display = 'none'
                dashboardHeader.style.marginLeft = '70px'

                dashboardSearchBox.style.display = innerWidthWindow > 640 ? 'flex' : 'none'
            }
            else if (!resizeCheck) {
                //auto change height
                dashboardHeader.style.width = innerWidthWindow + 'px'

                full_logo.style.display = 'block'
                // dashboardHeader.style.marginLeft = '250px'
                sidenavDashboard.style.height = '100%'

                // sidenavDashboard.style.position = 'fixed'
                sidenavDashboard.style.zIndex = 100
                menuList.style.display = 'block'
                sidenavDashboard.style.maxWidth = '250px'
                dashboardSearchBox.style.display = 'none'
            }
            else {
                // sidenavDashboard.style.position = 'fixed'
                full_logo.style.display = 'none'
                dashboardHeader.style.marginLeft = '70px'
                sidenavDashboard.style.height = '70px'
                menuList.style.display = 'none'

            }

        }
    }

    const showMobileSearchBoxHandle = (event) => {
        const dashboardSearchBoxForMobile = document.getElementById('dashboardSearchBoxForMobile')?.classList
        if (event?.type === 'resize') {
            dashboardSearchBoxForMobile?.add('hidden')
        }
        else {
            if (dashboardSearchBoxForMobile?.contains('hidden') && window?.innerWidth < 640) {
                dashboardSearchBoxForMobile?.remove('hidden')
            }
            else {
                dashboardSearchBoxForMobile?.add('hidden')
            }
        }
    }


    useEffect(() => {
        const width = window.innerWidth
        window.onresize = (event) => {
            showMobileSearchBoxHandle(event)
            showSideNaveBarHandle(true, event)
        }
        window.onclick = (event) => {
            const searchBoxHide = event.target.getAttribute('data-mobileSearchBox')
            if (!searchBoxHide) {
                const dashboardSearchBoxForMobile = document.getElementById('dashboardSearchBoxForMobile')?.classList
                dashboardSearchBoxForMobile?.add('hidden')
            }
        }

        if (width > 990) {
            showSideNaveBarHandle(false, null)
        }
        else {
            showSideNaveBarHandle(true, null)
        }
    }, [])


    return (
        <div id='dashboardHeader' className='border-b border-[#D9DADC]'>
            <div className='header' >
                <button onClick={(event) => showSideNaveBarHandle(false, event)} data-sideMenu='true'>
                    <HiOutlineMenuAlt1 size='24' color='#343A40' />
                </button>

                {/*************************************** FOR LARGE DEVICE**************************************************** */}

                <form className=' items-center relative hidden sm:flex' id='dashboardSearchBox'>
                    <input
                        type="text"
                        placeholder='Search...'
                        className=' input rounded-sm h-10 border border-gray-300 bg-[#E8E8E8] focus:outline-[#98CBFF] focus:outline-3 md:w-60 xl:w-80'
                        name='firstName'
                    />
                    <button type="submit" className='absolute right-2 text-[#9B9B9B] text-lg md:text-xl'>
                        <CgSearch />
                    </button>
                </form>


                {/* ****************************************************************************************************** */}
                <div className='flex items-center gap-4 lg:gap-7 '>

                    {/* **************************************FOR SMALL DEVICE**************************** X */}

                    <form
                        action=""
                        className='absolute left-14 hidden  sm:hidden'
                        id='dashboardSearchBoxForMobile'
                        data-mobileSearchBox='true'
                    >
                        <input
                            data-mobileSearchBox='true'
                            type="text"
                            placeholder='Search...'
                            className=' input rounded-sm h-10 border border-gray-300 bg-[#E8E8E8] focus:outline-[#98CBFF] focus:outline-3'
                            name='firstName'
                        />
                        {/* <button type="submit" className='absolute right-2 text-[#9B9B9B] text-lg md:text-xl'>
                            <CgSearch />
                        </button> */}
                    </form>


                    <button onClick={showMobileSearchBoxHandle} className="block sm:hidden" data-mobileSearchBox='true'>
                        <Search size={20} color='#5A657C' />
                    </button>
                    {/* ***************************************************************************************************** */}
                    <button>
                        <Notification size='23' />
                    </button>
                    <div className='hidden lg:block lg:mr-4'>
                        <h1 className='text-[16px] font-normal'>
                            Richard Jade Mmekut
                        </h1>
                        <h4 className='text-[12px] font-light'>
                            SPRY Admin
                        </h4>
                    </div>

                    <div className="dropdown dropdown-bottom dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                            {
                                // user_details?.profile ?
                                <div className="rounded-full ring ring-[#F0F0F0] ring-offset-base-100 ring-offset-1">
                                    <img src='https://placeimg.com/192/192/people' alt={"user_details?.firstName + user_details?.lastName"} />
                                </div>
                                // :
                                // <div className="bg-neutral-focus relative text-neutral-content rounded-full w-10">
                                //     <span className="text-2xs absolute top-[30%] left-[35%]">
                                //         {
                                //             user_details?.firstName[0] + user_details?.lastName[0]
                                //         }
                                //     </span>
                                // </div>
                            }
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu menu-compact mt-3 shadow bg-base-100 rounded-sm  w-44">
                            <li>
                                <a>Item 1</a>
                            </li>
                            <li>
                                <a>Item 2</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DashboardHeader;