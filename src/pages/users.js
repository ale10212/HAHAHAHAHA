import Footer from './components/footer'
import Topbar from './components/topbar'
import React from 'react';
import styles from '/src/styles/users.module.css';
import Link from 'next/link';
function Users({ users }) {
    
    return (
        <>
        <Topbar></Topbar>
        <div className= {styles.users}>
            <h2> Lista de Usuários </h2>
            {users.map((user, index) => (
                <Link href='/profile/[id]' as={`/profile/${index}`} class= "blau">
                    <div key={user.id}> {user.nome} </div>
                </Link>
            ))}
        </div>
        <Footer></Footer>
        </>
    )
}
export const getStaticProps = ( async (context) => {
        const res = await fetch('https://www.bocaweb.com.br/apibocaweb')
        const repo = await res.json()
        const users = await repo;
        return {
            props: { users }
        }
}
)
export default Users;