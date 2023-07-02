import './App.css';
import Avaliacao from './components/Avaliacao';
import { Container } from './components/Container';
import { Footer } from './components/Footer';
import Grafico from './components/Grafico';
import Header from './components/Header';
import Tabela from './components/Tabela';
import Title from './components/Title';
import useDadosConsulta from './useDadosConsulta';
import useDadosProfissional from './useDadosProfissional';

function App() {
  const {dados: consultas, erro: consultasErro } = useDadosConsulta();
  const {dados: profissionais, erro: profissionaisErro } = useDadosProfissional();

  if (consultasErro || profissionaisErro) 
    console.log("Ocorreu um erro na requisição")

  return (
    <>
      <Header />
        <Container>
          <Title>Área Administrativa</Title>
          <Tabela consultas={consultas}></Tabela>
          <Grafico consultas={consultas} profissionais={profissionais}></Grafico>
          <Avaliacao profissionais={profissionais} />
        </Container>
      <Footer />
    </>
  );
}

export default App;
