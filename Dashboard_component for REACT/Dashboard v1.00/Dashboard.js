import React, { useEffect } from 'react'
import LeftSidebar from './LeftSidebar'
import MainBody from './MainBody'
import './dashboard.style.css'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { buttonMenuComponent } from '../../hooks/buttonMenuAccessComponent'


const Dashboard = () => {
    const { path } = useParams()


    const [selectComponentByPath, setSelectComponentByPath] = useState({})
    useEffect(() => {
        try {
            const findMenu = buttonMenuComponent?.find(m => m?.path === (path ? path : 'home'))
            setSelectComponentByPath(findMenu);
        }
        catch (err) {
            // setMenuSelect(buttonMenu[0])
        }
    }, [path]);

    return (
        <main className='dashboard' id='dashboard' >
            <LeftSidebar />
            <MainBody >
                {
                    Boolean(selectComponentByPath?.component) ?
                        selectComponentByPath?.component
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