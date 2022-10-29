import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserEmail from './SVG/UserEmail';

const LeftSidebar = ({ props: { menuSelect, setMenuSelect, buttonMenu } }) => {


    return (
        <div id="sidenavDashboard">
            <div className='dashboardNavSideHeader'>
                <Link to='/' className='logo' style={{ gap: '4px' }}>
                    <img src="/img/fav.png" alt="brand logo" id='logo' />
                    <img src="/img/dashboard_logo.svg" alt="brand logo" id='full_logo' />
                </Link>
            </div>
            <div id='menuList'>
                {
                    buttonMenu?.map((r, index) => {
                        return (
                            <EachButton menuSelect={menuSelect} setMenuSelect={setMenuSelect} r={r} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default LeftSidebar;

const EachButton = ({ setMenuSelect, menuSelect, r }) => {

    useEffect(() => {
        const menuList = document.getElementById("dashboardMenuButton" + r.value);
        if (r?.value === menuSelect) {
            menuList.classList.add('active')
        }
        else{
            menuList.classList.remove('active')
        }
    }, [menuSelect, r])

    return (
        <button className='onlyIcon' onClick={() => setMenuSelect(r.value)} id={"dashboardMenuButton" + r.value}>
            <span className='dashboardMenu'>
                <UserEmail size='20' />
            </span>
            <span id='buttonTitle'>
                {
                    r?.html
                }
            </span>
        </button>

    )
}