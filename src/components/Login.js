import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(event) {
    event.preventDefault();
    // Perform login logic here...
    // For simplicity, let's assume login is successful
    onLogin();
  }

  return (
    <div>
      <form className='login' onSubmit={handleLogin}>
        <h1>Login</h1>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;


// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom'; // Import useHistory hook
// import './Login.css';

// function Login({ onLogin }) {
//   const history = useHistory(); // Access history object
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   function handleLogin(event) {
//     event.preventDefault();
//     // Perform login logic here...
//     // For simplicity, let's assume login is successful
//     onLogin();
//     // Redirect to home route after successful login
//     history.push('/home');
//   }

//   return (
//     <div>
//       <form className='login' onSubmit={handleLogin}>
//         <h1>Login</h1>
//         <input
//           type='text'
//           placeholder='Username'
//           value={username}
//           onChange={event => setUsername(event.target.value)}
//         />
//         <input
//           type='password'
//           placeholder='Password'
//           value={password}
//           onChange={event => setPassword(event.target.value)}
//         />
//         <button type='submit'>Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;
