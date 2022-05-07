import logo from './logo.svg';
import './App.css';
import InformationSection from './components/Info';
import AboutMe from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <InformationSection />
      <AboutMe />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
