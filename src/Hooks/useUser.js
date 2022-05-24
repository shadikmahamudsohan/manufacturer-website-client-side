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
    const res = await axios.put(`http://localhost:5000/update-user/${user?.email}`, (userData));

};

export default useUser;