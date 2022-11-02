import Cumpleaños from '../../assets/cumpleaños.jpg'
import Eventos from '../../assets/eventoss.jpg'
import Bodas from '../../assets/bodas.jpg'

const Lunch = () => {
  return (
        <div className='lunch' id="lunch">
        
            <img src={Eventos} alt="eventos" />
            <img src={Bodas} alt="eventos" />      
            <img src={Cumpleaños} alt="eventos" />       
            <img src={Eventos} alt="eventos" />
            <img src={Bodas} alt="eventos" />                      
            <img src={Cumpleaños} alt="eventos" />
            
        
        </div>
  )
}

export default Lunch