import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSlider from './DashboardSlider';

const Dashboard = () => {
    return (
        <div>
            <DashboardSlider>
                <Outlet />
            </DashboardSlider>
        </div>
    );
};

export default Dashboard;