
import './App.css'
import About from './components/About/About'
import Banner from './components/Bannar/Banner'
import Biggest from './components/Biggest/Biggest'
import Container from './components/container/Container'
import Flex from './components/flex/Flex'
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
    <Container/>
    <Flex/>
  </div>

    </>
  )
}

export default App
