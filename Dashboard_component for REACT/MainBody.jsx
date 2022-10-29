import React from 'react';
import BlogCollection from '../BlogCollection/BlogCollection';
import EmailCollection from '../EmailCollection/EmailCollection';
import NewBlog from '../NewBlog/NewBlog';
import DashboardHeader from './DashboardHeader';

const MainBody = ({ props: { menuSelect, setMenuSelect } }) => {
 
    return (
        <div id="mainDashboard">
            <DashboardHeader />
            <div id='dashboard_content'>

                {
                    menuSelect == 'new_blog' &&
                    <NewBlog />
                }
                {
                    menuSelect == 'all_user' &&
                    <EmailCollection />
                }
                {
                    menuSelect == 'blogs' &&
                    <BlogCollection />
                }
            </div>
        </div>
    );
};

export default MainBody;