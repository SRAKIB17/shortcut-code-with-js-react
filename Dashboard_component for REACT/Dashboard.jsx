import React, { useEffect } from 'react'
import LeftSidebar from './LeftSidebar'
import MainBody from './MainBody'
import './dashboard.style.css'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Admin from '../ComponentEachRoute/Admin/Admin'
import Android_original from './icon/Android_original'

const buttonMenu = [
    {
        html: 'Home',
        value: 'home',
        component: <Admin />,
        icon: <Android_original size='30' />
    },
    {
        html: 'All User',
        value: 'all_user',
        component: <Admin />,
        icon: <Android_original size='30' />
    },
    {
        html: 'Blogs',
        value: "blogs",
        component: <Admin />,
        icon: <Android_original size='30' />
    }
]

const Dashboard = () => {
    const { path } = useParams()
    const [menuSelect, setMenuSelect] = useState('');
    useEffect(() => {
        if (path) {
            setMenuSelect(path)
        }
        else {
            setMenuSelect(buttonMenu[0])
        }
    }, [path])


    return (
        <main className='dashboard' id='dashboard'>
            <LeftSidebar props={{ menuSelect, setMenuSelect, buttonMenu }} />
            <MainBody props={{ menuSelect, setMenuSelect, buttonMenu }} >
                {
                    Boolean(menuSelect?.component) ?
                        menuSelect?.component
                        :
                        <>
                            NOT found
                        </>
                }
            </MainBody>
        </main>
    )
}

export default Dashboard