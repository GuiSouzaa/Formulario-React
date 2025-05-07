// src/App.jsx
import React, { useEffect } from 'react';
import './App.css';
import './pages/Formulario.css'; 
import Formulario from './pages/Formulario.jsx';
import { db } from './firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

function App() {
  useEffect(() => {
    const docRef = doc(db, "users", "IvduJfKvGUyuzKIc4OL1");

    const getData = async () => {
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data());
    };

    getData();
  }, []);

  return (
    <div className="App">
      <Formulario />
    </div>
  );
}

export default App;
