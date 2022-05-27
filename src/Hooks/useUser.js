import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.init';

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
    const res = await axios.put(`https://quiet-basin-59724.herokuapp.com/update-user/${user?.email}`, userData);
    // console.log(res);
};

export default useUser;