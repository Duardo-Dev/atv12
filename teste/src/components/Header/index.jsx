import styles from './Header.module.css'
import img from  '../Header/img/logo-header.svg'
import cart from '../Header/img/mini-cart.svg'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function Header(){
    return (
      <header className={styles.header}>
           
            <div className={styles.hea_1}>
             
              <img src ={img}  className={styles.header_img}  alt='IMG'></img>  
              <input type='text' placeholder='Pesquisar produto...'></input>
                <label className={styles.headerbutton}>Cadastra-se</label>
                <Link to ='/login' className={styles.headerbutton2}>Entrar</Link >
                <div className={styles.div_cart}>
                <img  src={cart}  className={styles.cart}  alt='carrinho'></img>
                </div>
           
            </div>
            <div className={styles.hea_2}>
              
            <Link to ='/home'>Home</Link>
            <a href='/'>Produtos</a>
            <a href=''>Categorias</a>
            <a href=''>Meus Pedidos</a>
            
            </div>
      </header>
    )
}
export default Header