import styles from '../../styles/Home.module.css';
import Footer from '/src/pages/components/footer'
import Topbar from '/src/pages/components/topbar'
function Profile({ user = {} }) {
    return (

        <div>
            <Topbar></Topbar>
            <p></p>
            <p>Título: {user.nome}</p>
            <p>Escritor: {user.usuario}</p>
            <p>Revisor: {user.usuario_revisor}</p>
            <p>Editor: {user.usuario_editor}</p>
            <h2>Descrição: </h2>
            <p>{user.descricao}</p>
            <p>Data: {user.data_inclusao}</p>
            <p>Palavras chave: {user.palavras_chave}</p>
            <Footer></Footer>
        </div>
        // usuario_revisor usuario_editor descricao
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb')
    const repo = await res.json()
    const user = await repo[context.params.id];
    return {
        props: { user }
    }
})
export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb')
    const repo = await res.json()
    const users = await repo;
    const paths = users.map((user, index) => {
        return { params: { id: String(index) } };
    });
    return {
        paths,
        fallback: false,
    };

}
export default Profile;