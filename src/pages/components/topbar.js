import styles from '/src/styles/topbar.module.css'
import Image from 'next/image'
import foda from ".//cat.png"

export default function Topbar() {
    return (

        <div className={styles.topbar}>
            <Image 
            src={foda}
            width={210}
            height={210}
            alt="Picture of the author"/>
            <h1> O Gatola da Cartola </h1>
            
            <h3>Que tem tudo na cachola!</h3>
            <ul>
            
                <li>
                    <a href='/'> Home </a>
                </li>
                <li>
                    <a href='/users'> Itens </a>
                </li>
            </ul>
        </div>
    )
}