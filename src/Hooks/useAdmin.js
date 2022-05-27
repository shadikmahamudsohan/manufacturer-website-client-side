import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase/firebase.init';

const useAdmin = () => {
    const [user] = useAuthState(auth);
    const [admin, setAdmin] = useState({});
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
                setAdmin(data?.admin);
                if (data?.message === 'Forbidden access') {
                    signOut(auth);
                    toast.error('JWT expired or not found');
                    return;
                }
            });
    }, [user?.email]);
    return [admin, setAdmin, isLoading];
};

export default useAdmin;