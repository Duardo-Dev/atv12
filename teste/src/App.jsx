import Header from './components/Header';
// import Lista from './components/Navbar';
// import Saudacao from '../src/components/saudacao/Saudacao';
import Login from './Pages/Login';
import './App.css';
// import Botao from '../src/components/BotaoDinamico/BotaoDinamico';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom'
import Home from './Pages/Home';
import Lista from './components/Navbar';
// import{Link} from 'react-router-dom'
 
function App() {
 
// function deletar(){
//   alert('Deletado com sucesso');
// }
// function deletar(){
//   alert('Deletado com sucesso');
// }
  return (
    <>
{/* 
   <Lista/> */}
    {/* <Header/> */}
   <Router>
      <div>
        <Header/>
       
          <Routes>
            <Route path='/home ' element= {<Home/>}/>
            <Route path='/login' element= {<Login/>}/>
            <Route path='/lista' element= {<Lista/>}/>
            <Route path='*' element={<Home/>}/>
          </Routes>
    
      </div>
     
   </Router>

   {/* <Lista/> */}
     {/* <Saudacao nome='Fulano'saldo='10'/>
     <Botao cor='black' children='Clique aqui!' click = {deletar}/>
     <Botao cor='blue' children='Clique aqui!' click = {deletar}/> 
      */}
     
    </>
  )
}

export default App
