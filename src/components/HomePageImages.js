import './HomePageImages.css'
import LargeImage from '../images/abstractPainting.png';
import SmallImage from '../images/homePainting1.jpg';

const HomePageImages = () => {
    return (
        <div className='HomePageImages'>
            <img src={LargeImage} alt="Cozy Home" className="LargeImage" />
            <img src={SmallImage} alt="Cozy Home" className="SmallImage" />
        </div>
    );
}

export default HomePageImages;