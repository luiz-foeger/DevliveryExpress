import './App.css';
import Header from './componentes/Header';
import Nav from './componentes/Nav';
import Footer from './componentes/Footer';
import ListagemItens from './componentes/listagemItem';


function App() {
  return (
    <>
      <Header />
      <Nav />
      <ListagemItens/>
      <Footer autor="Luiz Felipe"></Footer>
    </>
  );
}

export default App;
