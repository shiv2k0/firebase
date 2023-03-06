import { useState } from "react";
import { app, database } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

// Make sure to enable Cloud firestore on firebase to store data

function App() {
  const [data, setData] = useState({});
  const collectionRef = collection(database, "user");
  const handleChange = (event) => {
    const newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput });
  };
  const handleSubmit = () => {
    addDoc(collectionRef, {
      email: data.email,
      password: data.password,
      comment: data.comment
    }).then(()=>{
      alert("Data added successfully")
    }).catch(err=>{
      alert(err.message)
    })
    console.log("Clicked")
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
      <label htmlFor="comment" >Comment</label>
      <br />
      <textarea
        name="comment"
        id="comment"
        cols="30"
        rows="5"
        onChange={handleChange}
      ></textarea>

      <br />
      <button onClick={handleSubmit}>Add Data</button>
    </div>
  );
}

export default App;
