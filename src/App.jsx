
import Slider from 'react-slick'
import './App.css'
import About from './components/About/About'
import Banner from './components/Bannar/Banner'
import Biggest from './components/Biggest/Biggest'
import Blog from './components/Blog/Blog'
import Button from './components/Button/Button'
import Contact from './components/Contact/Contact'
import Container from './components/container/Container'
import Flex from './components/flex/Flex'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Logos from './components/Logos/Logos'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'


function App() {

  return (
    <>
  <div>
    <Header/>
    <Navbar/>
    <Banner/>
    <Biggest/>
    <Services/>
    <About/>
    <Logos/>
    <Blog/>
    <Contact/>
    <Footer/>
    <Button/>
    <Container/>
    <Flex/>
  </div>

    </>
  )
}

export default App
