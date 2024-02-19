import React from 'react';
import ReactDOM from 'react-dom';
import Header from './componant/ Header';
import Footer from './componant/Footer';
import Body from './componant/Body';

const Applisted = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Applisted />);
