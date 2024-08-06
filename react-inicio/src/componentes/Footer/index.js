import { Icon } from '@iconify/react';
import estilos from './Footer.module.css'

function Footer(props) {
    return (
        <footer>
            <span>Página desenvolvida por {props.autor}</span>       
            <div>
                <Icon className={estilos.icones} icon="mdi:github" />
                <Icon className={estilos.icones} icon="bi:linkedin" />            
            </div>        
    </footer>
    )
  }
  
  export default Footer;