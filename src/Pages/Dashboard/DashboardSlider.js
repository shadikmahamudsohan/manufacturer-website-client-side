import React from 'react';
import { NavLink } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
const DashboardSlider = ({ children }) => {
    const [admin] = useAdmin();
    return (
        <div class="drawer drawer-mobile mt-16 bg-accent">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li>
                        <NavLink to="/dashboard/">My Orders</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/add-reviews">Add Reviews</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/my-profile">My Profile</NavLink>
                    </li>
                    {
                        admin && <>
                            <li>
                                <NavLink to="/dashboard/make-admin">Make Admin</NavLink>
                            </li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default DashboardSlider;