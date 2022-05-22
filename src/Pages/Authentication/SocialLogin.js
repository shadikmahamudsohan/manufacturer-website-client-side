import React from 'react';
import auth from '../../firebase/firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleLogin = () => {
        signInWithGoogle();
    };

    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <LoadingSpinner />;
    }
    return (
        <div>
            <div class="divider my-3">OR</div>
            <div className="btn btn-base w-full flex justify-center items-center" onClick={handleLogin}>
                <FcGoogle size={30} />
                <p>Sign In With Google</p>
            </div>
            {error && <div class="alert alert-error shadow-lg mt-5">
                <span>{error.message}</span></div>}
        </div>
    );
};

export default SocialLogin;