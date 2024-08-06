import { Icon } from '@iconify/react';
import estilos from './Footer.module.css'

function Footer() {
    return (
        <footer className={estilos.footer}>
            <span>Página desenvolvida por Miltin</span>       
            <div>
            <Icon className={estilos.icones} icon="mdi:github" />
            <Icon className={estilos.icones} icon="bi:linkedin" />            
            </div>        
    </footer>
    )
  }
  
  export default Footer;