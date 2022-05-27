import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.init';

const useAdmin = () => {
    const [user] = useAuthState(auth);
    const [admin, setAdmin] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(`https://quiet-basin-59724.herokuapp.com/get-user/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setIsLoading(false);
                setAdmin(data?.admin);
            });
    }, [user?.email]);
    return [admin, setAdmin, isLoading];
};

export default useAdmin;