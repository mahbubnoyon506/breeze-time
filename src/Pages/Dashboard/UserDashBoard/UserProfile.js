import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const UserProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2 className="text-2xl my-5">User Profile</h2>
            <h2 className="text-lg my-5">{user.email}</h2>
        </div>
    );
};

export default UserProfile;