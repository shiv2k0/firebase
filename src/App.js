import { useState } from "react";
import { app } from "./firebaseConfig";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";

function App() {
  let auth = getAuth(app);
  const [data, setData] = useState({});
  const handleChange = (event) => {
    const newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput });
  };
  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        console.log(response.user);
        alert("New User Added")
      })
      .catch((err) => {
        alert(err.message);
      });
    
  };
  const handleLogin=()=>{
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        console.log(response.user);
        alert("Login Successful")
      })
      .catch((err) => {
        alert(err.message);
      });
  }
  return (
    <div className="App">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" onChange={handleChange} />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={handleChange}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
