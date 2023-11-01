import React, { useEffect } from 'react';
import { useState } from 'react'
import { db } from './firebase';
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';


const AppForm = (props) => {

    const camposRegistro = { nombre:"", edad:"", genero:""}
    const [objeto, setObjeto] = useState(camposRegistro);
    //console.log(objeto);

    const handleSubmit = async (e) => {  //manejador de submit
        e.preventDefault();

        try {
            if(props.idActual === ""){
                if(validarForm()){
                    addDoc(collection(db, 'persona'), objeto);
                    console.log("Se guardo con exito");
                } else {
                    console.log("No se guardo");
                }
            }else{
                await updateDoc(doc(collection(db,'persona'),props.idActual),objeto);
                console.log("Se actualizo correctamente");
                props.setIdActual("");  
            }
            setObjeto(camposRegistro);
        } catch(error){
            console.log("Error en CREAR o UPDATE: ",error);
        }   
    }
    
    const handleStatusChange = (e) => {
        const{name,value} = e.target;
        setObjeto({...objeto, [name]:value});
        //console.log({name,value});
    }

    const validarForm = () => {
        if(objeto.nombre===''){
            alert("Escriba nombres...");
            return false;
        }
        return true;
    }

    useEffect(() => {
        if(props.idActual === ""){
            setObjeto({...camposRegistro});
        }else{
            obtenerDatosPorId(props.idActual);
        }
    }, [props.idActual]);

    const obtenerDatosPorId = async (xId) =>{
        const objPorId = doc(db, 'persona', xId);
        const docPorId = await getDoc(objPorId);
        if (docPorId.exists()) {
            setObjeto(docPorId.data());
        } else {
            alert("No hay doc... ");
        }
    }

    return (
        <div style={{background:"orange", padding:"10px", textAlign:"center"}}> 
            <form onSubmit={handleSubmit}>
                <h1>AppForm.js</h1>
                
                <input onChange={handleStatusChange}
                value={objeto.nombre} name = "nombre"
                type = 'text' placeholder = 'Nombre...' />

                <input onChange={handleStatusChange}
                value={objeto.edad} name= "edad"
                type = 'text' placeholder = 'Edad...' />

                <select onChange={handleStatusChange}
                name= "genero">
                    <option value ="">Seleccione Genero... </option>
                    <option value ="M">Masculino </option>
                    <option value ="F">Femenino </option>
                </select>
                <button>
                    {props.idActual==="" ? "Guardar":"Actualizar"}
                </button>
            </form>
        </div>
    )
}

export default AppForm