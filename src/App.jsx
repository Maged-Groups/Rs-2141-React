import { useSelector } from "react-redux"

import Header from "./components/Header"
import Footer from "./components/Footer"
import TopNav from "./components/TopNav"
import ScrollTop from "./components/ScrollTop"

// React-router-dom
import { Route, Routes } from 'react-router-dom'

// Redux
import { useDispatch } from "react-redux";
import { rdx_loggin } from './redux/userSlice'

// pages
import Home from './pages/Home';

import About from './pages/About';
import Mission from './pages/about/Mission'
import Vision from './pages/about/Vision'
import Future from './pages/about/Future'

import Contact from './pages/Contact';
import Products from './pages/Products';
import Users from './pages/Users';
import User from "./pages/User"
import Services from './pages/Services';
import P404 from './pages/P404';

// Components
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

// react-toastify
import { ToastContainer } from 'react-toastify'


import counterSlice from './redux/counterSlice'

console.log('counterSlice', counterSlice)



export default function App() {


    const dispatch = useDispatch()

    // Check if the user is already loggedin


    const json_data = sessionStorage.company_user_data || localStorage.company_user_data;

    console.log('json_data', json_data)

    if (json_data) {
        const user_data = JSON.parse(json_data);

        console.log('user_data', user_data)

        // send data to Redux

        dispatch(rdx_loggin(user_data))
    }





    const { showLogin, showRegister } = useSelector(store => store.settingsSlice)
    const { loggedin } = useSelector(store => store.userSlice)

    console.log('App Component Rendered')

    return (
        <>
            <Header />

            <TopNav />

            <main className="border flex-grow">


                <Routes>

                    <Route path="about" element={<About />}>
                        <Route path="mission" element={<Mission />} />
                        <Route path="vision" element={<Vision />} />
                        <Route path="future" element={<Future />} />
                    </Route>
                    {
                        loggedin &&
                        <>
                            <Route path="products" element={<Products />} />

                            <Route path="users" element={<Users />} />
                            <Route path="users/:id" element={<User />} />
                        </>
                    }

                    <Route path="contacts" element={<Contact />} />
                    <Route path="services" element={<Services />} />


                    <Route path="/" element={<Home />} />

                    <Route path='*' element={<P404 />} />
                </Routes>

            </main>
            <Footer />
            <ScrollTop />

            <ToastContainer theme="dark" position="bottom-left" />


            {showLogin && <Login />}

            {showRegister && <Register />}

            {/* {showRegister && <Register />} */}
        </>
    )
}