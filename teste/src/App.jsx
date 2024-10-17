import Header from './components/Header'
import Lista from './components/Navbar'
import Saudacao from '../src/components/saudacao/Saudacao';
import './App.css'
import Botao from '../src/components/BotaoDinamico/BotaoDinamico'

function App() {
 
function deletar(){
  alert('Deletado com sucesso');
}
function deletar(){
  alert('Deletado com sucesso');
}
  return (
    <>
    <Header/>
     <Saudacao nome='Fulano'saldo='10'/>
     <Botao cor='black' children='Clique aqui!' click = {deletar}/>
     <Botao cor='blue' children='Clique aqui!' click = {deletar}/> 
     
     
    </>
  )
}

export default App
