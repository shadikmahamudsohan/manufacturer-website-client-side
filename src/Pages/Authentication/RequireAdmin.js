import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const { pathname } = useLocation();
    const [isAdmin, setIsAdmin] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(`https://quiet-basin-59724.herokuapp.com/get-user/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setIsLoading(false);
                setIsAdmin(data);
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