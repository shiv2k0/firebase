import { useState } from "react";
import { app, database } from "./firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

function App() {
  // const [data, setData] = useState({});
  const collectionRef = collection(database, "user");
  // const handleChange = (event) => {
  //   const newInput = { [event.target.name]: event.target.value };
  //   setData({ ...data, ...newInput });
  // };
  const getData = () => {
    getDocs(collectionRef)
      .then((response) => {
        console.log(
          response.docs.map((item) => {
            return item.data();
          })
        );
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const handleSubmit = () => {
    getData();
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

      <button onClick={handleSubmit}>Get Data</button>
    </div>
  );
}

export default App;
