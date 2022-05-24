import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.init';

const useAdmin = () => {
    const [user] = useAuthState(auth);
    const [isAdmin, setIsAdmin] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/get-user/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setIsLoading(false);
                setIsAdmin(data?.admin);
            });
    }, [user?.email]);
    return [isAdmin, setIsAdmin, isLoading];
};

export default useAdmin;