// src/components/auth/UserProfileComponent.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import LogoutButton from "./LogoutButton";
import { fetchProfile } from "../redux/features/user/userSlice";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { user, accessToken, isLoading, error } = useSelector(
    (state) => state.user
  );
  console.log('User Profile : ',user)

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchProfile(accessToken));
    }
  }, [accessToken, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mt-20">
      {user ? (
        <div>
          <h1>Welcome, {user.username}</h1>
          <p>Email: {user.email}</p>
          <p>User Id: {user.id}</p>
          <p>Username: {user.username}</p>
          {/* Add more user details as needed */}
        </div>
      ) : (
        <div>Please log in to see your profile.</div>
      )}
      {/* <LogoutButton /> */}
    </div>
  );
};

export default UserProfile;
