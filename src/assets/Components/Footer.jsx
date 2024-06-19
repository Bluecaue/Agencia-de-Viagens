import styles from './footer.module.css'
import instagram from '../imagens/instagram.png'
import facebook from '../imagens/facebook.svg'
import whatsapp from '../imagens/zap.svg'
import tiktok from '../imagens/tiktok.svg'

function Footer() {
    return (
        <footer>
            <h4>Nossas redes sociais</h4>
            <div className={styles.social_media}>
                <img src={instagram} alt="" />
                <img src={facebook} alt="" />
                <img src={tiktok} alt="" />
                <img src={whatsapp} alt="" />
            </div>
            <h4>Telefone de contato: (11) 0000-0000</h4>

        </footer>
    )
}

export default Footer