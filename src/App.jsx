import Navbar from "./componentes/Navbar"
import './App.css'
import ItemListContainer  from "./componentes/ItemListContainer"

function App() {
  return (
    <>
     <Navbar/>
     <ItemListContainer saludo= 'Hola react'/>
    </>
  )
}

export default App
