import { useState } from "react";
import { app, storage } from "./firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function App() {
  const [data, setData] = useState({});
  console.log(data)
  const handleSubmit = () => {
    const storageRef = ref(storage, `images/${data.name}`);
    const uploadTask = uploadBytesResumable(storageRef, data);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        alert("File uploaded")
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at ", downloadURL);
        });
      }
    );
  };
  return (
    <div className="App">
      <input type="file" onChange={(event) => setData(event.target.files[0])} />
      <br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
