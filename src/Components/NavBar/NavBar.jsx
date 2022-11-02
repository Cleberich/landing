import LogoSerafino from '../../assets/logoSerafino.uy.png'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className="container-fluid bg-black">
        <div className='row'>
            <div className="col-sm-2 col-md-2 col-lg-3">
                <img className="w-100 py-3 ps-5" src={LogoSerafino} alt="logo"/>
            </div>
            <div className="col pt-4 text-end">
                <a className='mx-2 text-white text-decoration-none' href="www.google.com">Nosotros</a>
                <a className='mx-2 me-5 text-white text-decoration-none' href="www.google.com">Contacto</a>
            </div>
        </div>
    </div>
  )
}

export default NavBar
