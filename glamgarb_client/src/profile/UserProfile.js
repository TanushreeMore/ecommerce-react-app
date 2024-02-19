import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../State/Auth/authAction';


const UserProfile = () => {
  const dispatch = useDispatch();
  const { user, isLoading, error } = useSelector(state => state.auth);

  useEffect(() => {
    // Dispatch the action to fetch user data when the component mounts
    dispatch(getUser(localStorage.getItem('jwt')));
  }, [dispatch]);

  return (

    <div className='container card shadow-lg p-5 m-5 text-center'>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {user && (
        <div>
          <h1 className='mb-5'>User Profile</h1>
          <h4 className='mb-2'>Name: {user.firstName} {user.lastName}</h4>
          <h6>Email: {user.email}</h6>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
