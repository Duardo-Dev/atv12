import styles from './Header.module.css'
import img from  '../Header/img/logo-header.svg'
import cart from '../Header/img/mini-cart.svg'


function Header(){
    return (
      <header className={styles.header}>
           
            <div className={styles.h11}>
           
              <img src ={img} alt='IMG'></img>
              <input type='text'></input>
                <label className={styles.headerbutton}>Cadastrar</label>
                <label className={styles.headerbutton2}>Entrar</label >
                <div className={styles.div_cart}>
                <img  src={cart}  className={styles.cart}  alt='carrinho'></img>
                </div>
           
            </div>
            <div className={styles.h22}>
              <nav>
            <a href=''>Home</a>
            <a href=''>Produtos</a>
            <a href=''>Categorias</a>
            <a href=''>Meus Pedidos</a>
            </nav>
            </div>
      </header>
    )
}
export default Header