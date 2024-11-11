import './App.css'; 
import image1 from './image/image1.png';
import image2 from './image/image2.png';
import image3 from './image/image3.png';
import image4 from './image/image4.jpeg';
import image5 from './image/image5.jpeg';
import image6 from './image/image6.jpeg';
import image7 from './image/image7.jpeg';
import image8 from './image/image8.jpeg';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './components/navbar';
function App() {
  return (
    <>
      <div className='fulldiv'>
        <div className='asidediv'>
          <div className='header'>
            <img src={image1} className='images'></img>
            <span>&nbsp;Power Analytics</span>
          </div>
          <div>
          <ul className='list1'>
            <li ><img src={image1} className='images'/>&nbsp;dashboar</li>
            <li><img src={image2} className='images'/>&nbsp;dashboar</li>
            <li><img src={image3} className='images'/>&nbsp;dashboar</li>
            <li><img src={image4} className='images'/>&nbsp;dashboar</li>
            <li><img src={image5} className='images'/>&nbsp;dashboar</li>
            <li><img src={image6} className='images'/>&nbsp;dashboar</li>
            <li><img src={image7} className='images'/>&nbsp;dashboar</li>
            <li><img src={image8} className='images'/>&nbsp;dashboar</li>
          

          </ul>
          </div>
        </div>
        <div className='main'>
          <div className='navbar'>
            <Navbar/>
          </div>
          <div className='body'></div>
        </div>
      </div>
    </>
  );
}

export default App;
