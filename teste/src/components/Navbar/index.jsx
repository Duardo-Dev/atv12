import React,{useState, useEffect} from 'react';
import style from '../Navbar/styles.module.css'

 function lista(){
    const [tenis, setTenis] = useState([]);
    useEffect(() =>{

      async function carregartenis(){
       let response = await fetch('https://api-store-do1w.onrender.com/shoes')
       let data = response.json();
       setTenis(data);

      }
      carregartenis();
    },[])


    return (
     <>
    
      <ul>
        {tenis.map(tenis =>(
            <li>
            <img src={tenis.imagem_url} alt='tenis'></img>
            </li>
        ))}
        
      </ul>


     </>
    );
  
  }
  export default lista;