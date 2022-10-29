import React from 'react';
import { useEffect } from 'react';
import Menu from './SVG/Menu';

const DashboardHeader = () => {


    const showSideNaveBarHandle = (resizeCheck) => {
        //MAIN DASHBOARD PARENT
        const dashboard = document.getElementById('dashboard')
        dashboard.style.height = window.innerHeight + 'px'

        //MAIN DASHBOARD CONTENT
        const mainDashboard = document.getElementById('mainDashboard')
        const dashboard_content = document.getElementById('dashboard_content');
        dashboard_content.style.height = window.innerHeight - 90 + 'px'
        /**
         * DASHBOARD THAT IS IN MAIN DASHBOARD
         */
        const dashboardHeader = document.getElementById('dashboardHeader')
        dashboardHeader.style.marginLeft = '0px'

        //SIDENAV
        const sidenavDashboard = document.getElementById('sidenavDashboard');


        // *********************FOR LOGO******************
        const full_logo = document.getElementById('full_logo')

        //**************FOR BUTTON AND TEXT ICON SHOW HIDE************** */
        const menuList = document.getElementById('menuList');
        const getMenuButton = menuList.querySelectorAll('button')
        menuList.style.display = 'block'

        const innerWidthWindow = window.innerWidth;

        if ((mainDashboard.style.margin === '70px' || !mainDashboard.style.margin) && !resizeCheck && innerWidthWindow > 990) {
            mainDashboard.style.margin = '250px'
            mainDashboard.style.top = '0px'
            mainDashboard.style.width = (window.innerWidth - 271) + "px"


            dashboard_content.style.top = '-170px'

            sidenavDashboard.style.maxWidth = '250px'
            sidenavDashboard.style.height = '100%'

            full_logo.style.display = 'block'

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

            dashboard_content.style.top = '10px'


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
            dashboard_content.style.top = 80 + 'px'
            mainDashboard.style.width = (window.innerWidth - 20) + "px"
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
            }
            else if (!resizeCheck) {
                full_logo.style.display = 'block'
                dashboardHeader.style.marginLeft = '250px'
                sidenavDashboard.style.height = '100%'
                menuList.style.display = 'block'
                sidenavDashboard.style.maxWidth = '250px'

            }
            else {
                full_logo.style.display = 'none'
                dashboardHeader.style.marginLeft = '70px'
                sidenavDashboard.style.height = '70px'
                menuList.style.display = 'none'
            }

        }
    }
    useEffect(() => {
        window.onresize = () => {
            showSideNaveBarHandle(true)
        }
        showSideNaveBarHandle(true)
    }, [])

    return (
        <div id='dashboardHeader'>
            <div className='header' >
                <button onClick={() => showSideNaveBarHandle(false)}>
                    <Menu size='24' color='#343A40' />
                </button>
            </div>
        </div>
    );
};

export default DashboardHeader;