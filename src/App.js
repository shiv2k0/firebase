import { useState } from "react";
import { app } from "./firebaseConfig";
import { getAuth, GoogleAuthProvider ,signInWithPopup  } from "firebase/auth";


function App() {
  let auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const [data, setData] = useState({});
  const handleChange = (event) => {
    const newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput });
  };
  const handleSubmit = () => {
    signInWithPopup(auth,googleProvider)
      .then((response) => {
        console.log(response.user);
        alert("New User Added")
      })
      .catch((err) => {
        alert(err.message);
      });
  };
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
      <button onClick={handleSubmit}>Continue with google</button>
    </div>
  );
}

export default App;
