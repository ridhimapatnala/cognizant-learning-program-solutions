import React, { useState } from 'react';

// Guest Greeting Component
function GuestGreeting() {
  return (
    <div>
      <h1>Please sign up.</h1>
      <p>You can browse flight details here.</p>
    </div>
  );
}

// User Greeting Component
function UserGreeting() {
  return (
    <div>
      <h1>Welcome back!</h1>
      <p>You can now book tickets.</p>
    </div>
  );
}

// Login Button Component 
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

// Logout Button Component 
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

// Greeting Component (Conditional Rendering) 
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

  const handleLoginClick = () => {
    setIsLoggedIn(true); // Once the user is logged in the User page should be displayed. 
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false); // When the user clicks on Logout, the Guest page should be displayed. 
  };

  let button; // Element variable for conditional button rendering 
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />; // The Login and Logout buttons should accordingly display different pages. 
  } else {
    button = <LoginButton onClick={handleLoginClick} />; // The Login and Logout buttons should accordingly display different pages. 
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}

export default App;