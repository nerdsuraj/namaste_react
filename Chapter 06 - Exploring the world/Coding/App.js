import React from 'react';
import ReactDOM from 'react-dom';
import Header from './componant/ Header';
import Footer from './componant/Footer';
import Body from './componant/Body';
import { Toaster } from "react-hot-toast";

const Applisted = () => {
    return (
        <div className='app'>
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={30}
                containerClassName="notification-container"
                toastOptions={{
                    className: "notification-toast",
                    duration: 1500,
                }}
            />
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Applisted />);
