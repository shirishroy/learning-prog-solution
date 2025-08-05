import React, { useState } from 'react';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';
import LoginToggle from './components/LoginToggle';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <h1>✈️ Ticket Booking App</h1>
      <LoginToggle loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <hr />
      {loggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
}

export default App;
