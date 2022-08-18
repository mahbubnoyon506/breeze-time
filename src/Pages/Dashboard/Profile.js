import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2 className="text-2xl my-5">Admin Profile</h2>
            <h2 className="text-lg my-5">{user.email}</h2>
        </div>
    );
};

export default Profile;