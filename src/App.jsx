import './App.css'
import ConoceCmrbolsa from './ConoceCmrbolsa'
import Enterate from './Enterate'
import Footer from './Footer'
import Header from './Header'
import PreciosTalleres from './PreciosTaller'
import QueEncontraras from './QueEncontraras'
import Separador from './Separador'


const App = () => {


  return (
    <>
     <Header/>
     
     <QueEncontraras/>
     <Enterate/>     
     <ConoceCmrbolsa/>
     <Separador/>
     <PreciosTalleres/>
     <Footer/>
    </>
  )
}

export default App
