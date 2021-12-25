import Navbar from './components/Navbar';
import styledComponents from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

const Container = styledComponents.div`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
`;

function App() {
  return (
    <Container className="App">
      <Navbar />
      <Header />
      <Main />
      <ContactMe />
      <Footer />
    </Container>
  );
}

export default App;
