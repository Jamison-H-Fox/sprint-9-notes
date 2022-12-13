import React, {useState} from "react";

function App(){
  const [username, setUsername, handleUsername] = useInput('userName', '');
  const [password, setPassword, handlePassword] = useInput('password','');
  const [email, setEmail, handleEmail] = useInput('email', '');

  function resetValues(evt) {
    evt.preventDefault();
    setUsername('');
    setPassword('');
    setEmail('');
  };

  return(
    <div className="App">
      <form onSubmit={resetValues}>
        <input
          className="username-text"
          id="username"
          name="username"
          onChange={(evt) => handleUsername(evt.target.value)}
          placeholder="Username"
          type="text"
          value={username}
        />
        <input
          className="password-test"
          id="password"
          name="password"
          onChange={(evt) => handlePassword(evt.target.value)}
          placeholder="Password"
          type="password"
          value={password}
        />
        <input
          className="email-text"
          id="email"
          name="email"
          onChange={(evt) => handleEmail(evt.target.value)}
          placeholder="Email"
          type="text"
          value={email}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;

// custom hooks below:

function useInput(key, initialValue) {
  const [value, setValue] = useLocalStorage(key, initialValue);
  function handleChanges(updatedValue) {
    setValue(updatedValue);
  };
  
  return [value, setValue, handleChanges];
};

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) :initialValue;
  });

  function setValue(value) {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}