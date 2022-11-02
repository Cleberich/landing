import Cumpleaños from '../../assets/cumpleaños.jpg'
import Eventos from '../../assets/eventoss.jpg'
import Bodas from '../../assets/bodas.jpg'

import './index.css'
const Servicios = () => {
  return (
    <div className='' id="servicios">
        <div className="card p-3 border-0 shadow-lg rounded-3" id="cardService">
            <img src={Eventos} alt="eventos" />
            <h2>Eventos Empresariales</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit amet officiis, odit voluptatem suscipit ipsa enim ipsum nemo reprehenderit eos iusto praesentium consectetur mollitia sit, nihil animi voluptate illum aut.</p>
            <button className='btn btn-dorado text-white'>Más información</button>
        </div>
        <div className="card p-3 border-0 shadow-lg rounded-3" id="cardService">
            <img src={Bodas} alt="eventos" />
            <h2>Bodas</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit amet officiis, odit voluptatem suscipit ipsa enim ipsum nemo reprehenderit eos iusto praesentium consectetur mollitia sit, nihil animi voluptate illum aut.</p>
            <button className='btn btn-dorado text-white'>Más información</button>
        </div>
        <div className="card p-3 border-0 shadow-lg rounded-3" id="cardService">
            <img src={Cumpleaños} alt="eventos" />
            <h2>Cumpleaños</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit amet officiis, odit voluptatem suscipit ipsa enim ipsum nemo reprehenderit eos iusto praesentium consectetur mollitia sit, nihil animi voluptate illum aut.</p>
            <button className='btn btn-dorado text-white'>Más información</button>
        </div>
    </div>
  )
}

export default Servicios