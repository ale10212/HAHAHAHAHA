import Footer from './components/footer'
import Topbar from './components/topbar'
import styles from '/src/styles/Home.module.css'
export default function Home() {
  return (
    <div>
      <Topbar></Topbar>
        
      <title> Projeto SSG </title>
      <div className={styles.home}>
        <div id= "hsa"></div>
        <div class= "ash">
        <a href="\users"  id="blau"> Abrir Todos os títulos inscritos </a>
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}
