import Carousel from 'react-bootstrap/Carousel';
import Portada1 from '../../assets/portada1.jpg'
import './index.css'

function CarrouselPortada() {
  return (
    <Carousel className="d-block">
      <Carousel.Item style={{  
                    backgroundImage: `url(${Portada1})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '76vh'
                    }}>
        <div className='row mx-auto pt-5'>
            <div className='col-none col-sm-3 col-md-5 col-lg-7 col-xl-8'>
            </div>
            <div className='col py-5 mx-auto'>
                <form>
                   <div  className='d-block bg-white mx-auto px-4 py-5 w-75 rounded-3 bg-opacity-75'>
                       <label className='text-black' forHTML="nombre">Nombre</label>
                            <input type="text" className='form-control  my-1' placeholder="Ingresa tu nombre" id="nombre"/>
                       <label className='text-black' forHTML="telefono">Teléfono</label>
                            <input type="tel" className='form-control  my-1' placeholder="nombre" name="telefono"/>
                        <label className='text-black' forHTML="servicio">Fecha del evento</label>
                            <input type="date" className='form-control  my-1' placeholder="Mensaje"/>
                        <label className='text-black' forHTML="servicio">Cantidad de invitados</label>
                             <input type="tel" className='form-control  my-1' placeholder="Ingresa la cantiad de invitados"/>
                        <button className='btn btn-dorado mt-1 text-white'>Solcitiar presupuesto</button>
                   </div>
            </form>
            </div>
           
        </div>
      </Carousel.Item>
    
    </Carousel>
  );
}

export default CarrouselPortada;