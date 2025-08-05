import React from 'react';

const LoginToggle = ({ loggedIn, setLoggedIn }) => {
  return (
    <div>
      {loggedIn ? (
        <button onClick={() => setLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default LoginToggle;
