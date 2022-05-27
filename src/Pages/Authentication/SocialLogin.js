import React, { useEffect } from 'react';
import auth from '../../firebase/firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    const location = localStorage.getItem('location');
    const [token] = useToken(user);

    const handleLogin = () => {
        signInWithGoogle();
    };

    useEffect(() => {
        if (token) {
            navigate(location);
        }
    }, [token, navigate, location]);

    if (loading) {
        return <LoadingSpinner />;
    }
    return (
        <div>
            <div className="divider my-3">OR</div>
            <div className="btn btn-base w-full flex justify-center items-center" onClick={handleLogin}>
                <FcGoogle size={30} />
                <p>Sign In With Google</p>
            </div>
            {error && <div className="alert alert-error shadow-lg mt-5">
                <span>{error.message}</span></div>}
        </div>
    );
};

export default SocialLogin;