
import { useEffect,useState } from "react";
import { app, database } from "./firebaseConfig";
import { addDoc, collection, getDocs } from "firebase/firestore";

function App() {
  const [data, setData] = useState({});
  const handleInput = (event)=>{
    let newInput = {[event.target.name]: event.target.value }
    setData({...data,...newInput })
  }
  const collectionRef = collection(database,"users")
  const handleSubmit = () => {
    addDoc(collectionRef,{
      name: data.name,
      email: data.email
   }).then(()=>{
    alert("Data Added")
   }).catch((err)=>{
    alert(err.message)
   })
  };
  const getData =()=>{
    getDocs(collectionRef).then((data)=>{
      console.log(data.docs.map((item)=>{
        return item.data()
      }))
    })
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="App">
      <div>
      <input type="text" name="name" id="name" placeholder="Name" onChange={handleInput} />
      <input type="text" name="email" id="email" placeholder="Email" onChange={handleInput} />
      </div>
      <div>
      <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default App;
