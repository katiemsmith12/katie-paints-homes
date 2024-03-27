import './NavigationItemContainer.css';
import NavigationItem from './NavigationItem';

const NavigationItemContainer = () => {
    return (
        <div className='NavigationItemContainer'>
            <NavigationItem pageName="Home" selectedItem />
            <NavigationItem pageName="About Me" />
            <NavigationItem pageName="Paintings" />
            <NavigationItem pageName="Let's Chat" />
        </div>
    );
}

export default NavigationItemContainer;