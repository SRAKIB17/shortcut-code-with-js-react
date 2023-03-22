import React from 'react';
import { useEffect } from 'react';
import Menu from './SVG/Menu';

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