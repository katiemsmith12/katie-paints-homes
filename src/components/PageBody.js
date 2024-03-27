import './PageBody.css';
import OrderNowButton from './OrderNowButton';

const PageBody = () => {
    return (
        <div className='PageBody'>
            <p className='Title'>Capture your cozy home in custom handcrafted art.</p>
            <p className='Body'>Welcome to my shop! I create original watercolor artworks to bring warmth to your home. Feel free to take a look around. You can check out previous paintings I've created, read my brief bio, or shoot me a message. Thanks for stopping by!</p>
            <div className='OrderNowButtonContainer'>
                <OrderNowButton />
            </div>
        </div>
    );
}

export default PageBody;