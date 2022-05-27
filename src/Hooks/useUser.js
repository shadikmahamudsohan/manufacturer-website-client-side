import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.init';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';

const useUser = async () => {
    const [user] = useAuthState(auth);
    const userData = {
        name: user?.displayName,
        email: user?.email,
        role: "user",
    };
    if (!user?.email || !user?.displayName) {
        return;
    }
    const res = await axios.put(`https://quiet-basin-59724.herokuapp.com/update-user/${user?.email}`, userData, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    });

    if (res?.message === 'Forbidden access') {
        signOut(auth);
        toast.error('JWT expired or not found');
        return;
    }
    // console.log(res);
};

export default useUser;