import './NavigationItem.css';

const NavigationItem = ({pageName, selectedItem}) => {
    return (
        <div className='NavigationItemButton'>
            <p className={selectedItem ? 'NavigationItemSelected' : 'NavigationItem'}>{pageName}</p>
        </div>
    );
}

export default NavigationItem;