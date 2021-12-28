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

  @media (min-width: 740px) {
    h2 {
      font-size: 2em;
    }

    h3 {
      font-size: 1.5em;
    }

    label, input, textarea, button, li>a {
      font-size: 1.3em;
    }
    button>span>svg {
      font-size: 1.2em !important;
    }
  }
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
