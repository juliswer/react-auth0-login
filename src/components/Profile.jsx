import React, {useEffect} from 'react'
import {useAuth0} from '@auth0/auth0-react';
import LoginButton from './LoginButton';

const Profile = () => {

    const {user} = useAuth0();

    useEffect(() => {
        if(!user) return <LoginButton />
    }, []);

  return (
    <div>
        {user && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <pre>
                    {JSON.stringify(user)}
                </pre>
            </div>
        )}
    </div>
  )
}

export default Profile