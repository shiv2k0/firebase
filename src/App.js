import { useState } from "react";
import { app, database } from "./firebaseConfig";
import { collection, doc, updateDoc } from "firebase/firestore";

function App() {
  const [data, setData] = useState({});
  // const collectionRef = collection(database, "user");
  // const handleChange = (event) => {
  //   const newInput = { [event.target.name]: event.target.value };
  //   setData({ ...data, ...newInput });
  // };
  
  const updateData =() =>{
     const docToUpdate = doc(database,"user","a9OR8Kqugv7RqtQmNV6A")
     updateDoc(docToUpdate,{
      // one or more than one field can be updated.
      email: "shivavns00@gmail.com"
     }).then(()=>{
      alert("Updated Successfully")
     }).catch(err=>{
      alert(err.message)
     })
  }
  const handleSubmit = () => {
    updateData()
  };
  return (
    <div className="App">

      {/* <label htmlFor="email">Email</label>
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
      <label htmlFor="comment">Comment</label>
      <br />
      <textarea
        name="comment"
        id="comment"
        cols="30"
        rows="5"
        onChange={handleChange}
      ></textarea>
      <br /> */}

      <button onClick={handleSubmit}>Update Data</button>
    </div>
  );
}

export default App;
