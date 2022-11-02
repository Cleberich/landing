import NavBar from './Components/NavBar/NavBar'
import CarrouselPortada from './Components/CarrouselPortada/CarrouselPortada'
import Servicios from './Components/Servicios/Servicios'
import Lunch from './Components/Lunch/Lunch'

function App() {

  return (
   <div className=''>
    <NavBar/>
    <CarrouselPortada/>
    <h2 className='text-center mt-3 fw-bold'>Servicios</h2>
    <Servicios/>
    <Lunch/>
   </div>
  )
}

export default App
