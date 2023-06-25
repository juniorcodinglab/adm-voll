import './App.css';
import { Container } from './components/Container';
import { Footer } from './components/Footer';
import Header from './components/Header';
import Tabela from './components/Tabela';
import Title from './components/Title';
import useDadosConsulta from './useDadosConsulta';

function App() {
  const {dados, erro } = useDadosConsulta();

  return (
    <>
      <Header />
        <Container>
          <Title>Área Administrativa</Title>
          <Tabela consultas={dados}></Tabela>
        </Container>
        
      <Footer />
    </>
  );
}

export default App;
