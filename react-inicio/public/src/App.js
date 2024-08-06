import Footer from './componentes/Footer';
import Header from './componentes/Header';
import MenuNav from './componentes/MenuNav';
import Principal from './componentes/Principal';
import estilos from './App.module.css'
import ListagemItens from './componentes/ListagemItens';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Sobre from './paginas/Sobre';
import NaoEncontrada from './paginas/NaoEncontrada';
import ItemPage from './paginas/ItemPage';

function App() {
  return (
    <div className={estilos.container}>
      <BrowserRouter>
        <Header />
        <MenuNav />
        <Principal>
          <Routes>
            <Route path="/" element={<Inicio />}/>
            <Route path="/sobre" element={<Sobre />}/>
            <Route path="/item/:id" element={<ItemPage />}/>
            <Route path="*" element={<NaoEncontrada />}/>
          </Routes>
        </Principal>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

/*
<div className={estilos.container}>
      <Header />
      <MenuNav />
      <Principal>
        <ListagemItens />
      </Principal>
      <Footer />
    </div>
  */
export default App;
