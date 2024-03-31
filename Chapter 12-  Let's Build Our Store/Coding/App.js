import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/ Header';
import Footer from './Components/Footer';
import Body from './Components/Body';
import About from './Components/About';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
// import Grocery from './Components/Grocery';
import RestaurantMenu from './Components/RestaurantMenu';
import { Toaster } from "react-hot-toast";
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import UserContext from './utils/useContext'; // use context for gloable data!!

//lazy loading , demanding loading
const Grocery = lazy(() => import('./Components/Grocery'));

const Applisted = () => {
    const [username, setUsername] = useState();

    useEffect(()=>{
        const UserInfo = {
            name: "suraj kumar"
        };
    
        setUsername(UserInfo.name)
    },[])

  

    return (
        <Provider store={appStore}>
            <div className='app'>
                <UserContext.Provider value = {{logggedInUser:username, setUsername}}>
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
                <Outlet />
                <Footer />
            </UserContext.Provider>
        </div>
        </Provider >

    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Applisted />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/grocery",
                element:
                    (
                        <Suspense fallback={<h1>Loading...</h1>}>
                            <Grocery />
                        </Suspense>
                    ),
            },
        ],
        errorElement: <h1>404 Not Found</h1>
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
