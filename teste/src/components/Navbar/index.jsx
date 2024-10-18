import React,{useState, useEffect} from 'react';
import styles from '../Header/Header.module.css'

 function Lista(){
    const [tenis, setTenis] = useState([]);
    useEffect(() =>{

      async function carregartenis(){
       let response = await fetch('https://api-store-do1w.onrender.com/shoes')
       let data = await response.json();
       setTenis(data);

      }
      carregartenis();
    },[])


    return (
     <>
    
      <ul>
        {tenis.map(tenis =>(
            <li>
            <img  className = {styles.img} src={tenis.imagem_url} alt='tenis'></img>
            </li>
        ))}
        
      </ul>


     </>
    );
  
  }
  export default Lista;