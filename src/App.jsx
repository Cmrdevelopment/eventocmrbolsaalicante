import './App.css'
import ConoceCmrbolsa from './ConoceCmrbolsa'
import Enterate from './Enterate'
import Footer from './Footer'
import Header from './Header'
import PreciosTalleres from './PreciosTaller'
import QueEncontraras from './QueEncontraras'


const App = () => {


  return (
    <>
     <Header/>
     
     <QueEncontraras/>
     <Enterate/>     
     <ConoceCmrbolsa/>
     <PreciosTalleres/>
     <Footer/>
    </>
  )
}

export default App
