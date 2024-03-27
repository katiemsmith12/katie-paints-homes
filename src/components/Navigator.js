import './Navigator.css';
import NavigationItemContainer from './NavigationItemContainer';
import logo from '../images/BigLogo.png';
import TransparentOrderNowButton from './TransparentOrderNowButton';

const Navigator = () => {
    return (
        <div className='Navigator'>
            <div className='LogoContainer'>
                <img src={logo} alt="Logo" className="Logo" />
            </div>
            <NavigationItemContainer />
            <div className='TransparentOrderNowButtonContainer'>
                <TransparentOrderNowButton />
            </div>
            <div className="Hamburger">☰</div>
        </div>
    );
}

export default Navigator;