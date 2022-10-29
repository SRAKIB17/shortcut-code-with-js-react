import React from 'react'
import LeftSidebar from './LeftSidebar'
import MainBody from './MainBody'
import './dashboard.style.css'
import { useState } from 'react'

const buttonMenu = [
    {
        html: 'New Blog',
        value: 'new_blog'
    },
    {
        html: 'All User',
        value: 'all_user'
    },
    {
        html: 'Blogs',
        value: "blogs"
    }
]

const Dashboard = () => {
    const [menuSelect, setMenuSelect] = useState('')

    return (
        <main className='dashboard' id='dashboard'>
            <LeftSidebar props={{ menuSelect, setMenuSelect, buttonMenu }} />
            <MainBody props={{ menuSelect, setMenuSelect }} />
        </main>
    )
}

export default Dashboard