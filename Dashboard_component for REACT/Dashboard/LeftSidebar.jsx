import React from 'react';
import { useEffect } from 'react';
import UserEmail from './SVG/UserEmail';

const LeftSidebar = ({ props: { menuSelect, setMenuSelect, buttonMenu } }) => {


    return (
        <div id="sidenavDashboard">
            <div className='dashboardNavSideHeader'>
                <a href='/' className='logo' style={{ gap: '10px' }}>
                    <img src="/favLogoDark.svg" alt="brand logo" id='logo' />
                    <img src="/logo_dark.svg" alt="brand logo" id='full_logo' />
                </a>
            </div>
            <div id='menuList'>
                {
                    buttonMenu?.map((r, index) => {
                        return (
                            <EachButton menuSelect={menuSelect} setMenuSelect={setMenuSelect} menu={r} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default LeftSidebar;

const EachButton = ({ setMenuSelect, menuSelect, menu }) => {

    useEffect(() => {
        const menuList = document.getElementById("dashboardMenuButton_" + menu.value);
        if (menu?.value === menuSelect?.value) {
            menuList.classList.add('active')
        }
        else {
            menuList.classList.remove('active')
        }
    }, [menuSelect, menu])

    return (
        <button className='onlyIcon' onClick={() => setMenuSelect(menu)} id={"dashboardMenuButton_" + menu.value}>
            <span className='dashboardMenu'>
                {
                    menu?.icon
                }
            </span>
            <span id='buttonTitle'>
                {
                    menu?.html
                }
            </span>
        </button>

    )
}