
import Navbar from './components/Navbar';
import styledComponents from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';


const Container = styledComponents.div`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
`;  


const MainLeftContaine = styledComponents.div``;
const MainRightContainer = styledComponents.div``;
const Projects = styledComponents.div``;
const Services = styledComponents.div``;
const ContactMe = styledComponents.section``;
const Footer = styledComponents.footer``;

function App() {
  return (
    <Container className="App">
      <Navbar />
      <Header />
      <Main />
      <ContactMe/>
      <Footer/>
    </Container>
  );
}

export default App;
