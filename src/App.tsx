import './App.css';
import { Container } from './components/Container';
import { Footer } from './components/Footer';
import Header from './components/Header';
import Title from './components/Title';

function App() {
  return (
    <>
      <Header />
      <Container><Title>Área Administrativa</Title></Container>

      <Footer />
    </>
  );
}

export default App;
