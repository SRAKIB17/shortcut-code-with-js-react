import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { buttonMenu, buttonMenuComponent } from '../../hooks/buttonMenuAccessComponent'


const LeftSidebar = () => {
    const navigate = useNavigate();
    const { path } = useParams()
    useEffect(() => {
        const menuList = document.getElementById('menuList');
        const getMenuButton = menuList.querySelectorAll('button');
        const getComponent = buttonMenuComponent?.find(component => component?.path === (path ? path : 'home'));
        for (const iterator of getMenuButton) {
            if (iterator?.id === ("dashboardMenuButton_" + getComponent?.id)) {
                iterator.classList.add('active')
            }
            else {
                iterator.classList.remove('active')
            }
        }
    }, [path])
    return (
        <div id="sidenavDashboard">
            <div className='dashboardNavSideHeader border-b border-[#D9DADC] h-[70px] overflow-hidden'>
                <a href='/' className='logo' style={{ gap: '10px' }}>
                    <img src="/favLogoDark.svg" alt="brand logo" id='logo' className='w-10 h-8' />
                    <img src="/logo_dark.svg" alt="brand logo" id='full_logo' />
                </a>
            </div>

            <div id='menuList' className=' overflow-auto '>
                {/**************************************** Button Dashboard *************************************** */}
                {
                    buttonMenu?.map((menu, index) => {
                        return (
                            menu?.dropdownComponent ?
                                <>
                                    {
                                        menu?.dropdownComponent
                                    }
                                </>
                                :
                                <button
                                    className='onlyIcon'
                                    onClick={() => navigate('/' + menu?.path)}
                                    id={"dashboardMenuButton_" + menu?.id}
                                >
                                    <span className='dashboardMenu'>
                                        {
                                            menu?.icon
                                        }
                                    </span>
                                    <span id='buttonTitle '>
                                        {
                                            menu?.html
                                        }
                                    </span>
                                </button>
                        )
                    })
                }

            </div>
            {/**************************************** Button Dashboard *************************************** */}

            {/* <button className='onlyIcon' onClick={() => setMenu("all_user")} id="dashboardMenuButton_all_user">
                    <span className='dashboardMenu'>
                        <Android_original size='18' />
                    </span>
                    <span id='buttonTitle'>
                        {
                            "menu?.html"
                        }
                    </span>
                </button> */}
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