import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const { pathname } = useLocation();
    const [isAdmin, setIsAdmin] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(`https://quiet-basin-59724.herokuapp.com/get-user/${user?.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setIsLoading(false);
                setIsAdmin(data);
                if (data?.message === 'Forbidden access') {
                    signOut(auth);
                    toast.error('JWT expired or not found');
                    return;
                }
            });
    }, [user?.email]);

    if (loading || isLoading) {
        return <LoadingSpinner />;
    }

    if (!user || !isAdmin?.admin) {
        signOut(auth);
        localStorage.setItem('location', pathname);
    }

    return children;
};

export default RequireAdmin;