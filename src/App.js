//import logo from './logo.svg';
//import './App.css';
import { useState } from 'react';
import AppForm from './componente/AppForm';
import { collection, doc, onSnapshot, query } from 'firebase/firestore';
import { db } from './componente/firebase';
//import C01Componente from './pagina/C01Componente';

function App() {

  /////Read-lectura////
  const [docBD,setDocBD]= useState([]);
  const fnRead =() => {
    try {
      const xColeccionnConQuery = query(collection(db,'persona'));
      const unsubscribe = onSnapshot(xColeccionnConQuery, (xDatosBD) => {
        const xDoc = [];
        xDatosBD.forEach ((doc) => {
          xDoc.push({id: doc.id, ...doc.data()});
        });
        setDocBD(xDoc);
      });
    } catch (error) {
      console.error(error);
    }
  }

  fnRead();

  ///Eliminar///
  const [idActual,setIdActual]= useState("");
  const fnDelete =(xId) => {
    }

  return (
    <div style={{width:"350px", background:"greenyellow", padding:"10px"}}>
        <AppForm {...{idActual,setIdActual,fnRead}} />
        {
          docBD.map((p) => 
            <p key={p.id}>
              No. {p.nombre}
              <span onClick={() => fnDelete(p.id)}> x </span>
              <span onClick={() => setIdActual(p.id)}> A </span>
            </p>
          )
        }

    </div>
  );
}

export default App;
