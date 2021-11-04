import React, { Profiler } from 'react';
import {useAuth0} from '@auth0/auth0-react';

const Profile = () =>{
    const {user, isAuthenticated} =useAuth0();

    return (
        isAuthenticated && 
        (<div>
            {JSON.stringify(user,null,2)}
            {user.name}
        </div>)
    )
}

export default Profile;