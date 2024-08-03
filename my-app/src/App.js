import About from './Components/About/About';
import './App.css'; 
import Header from './Components/Header/Header';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Skills from './Components/Skills/Skills';
// import NavBar from './Components/Navbar/NavBar';
function App() {
  return (
   <>
   {/* <NavBar/> */}
 <Header/>
 <About/>
 <Skills/>
 <Experience/>
 <Projects/>
 <Contact/>
 <Footer/>
 </>
  );
}
export default App;