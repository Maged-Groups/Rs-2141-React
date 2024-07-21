import { Link, useNavigate } from 'react-router-dom'

import { styles } from "../data/topNav";

import { useDispatch, useSelector } from 'react-redux';
import { rdx_view_loggin, rdx_view_register } from '../redux/settingsSlice'
import { rdx_logout } from '../redux/userSlice';

export default function TopNav() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log('TopNav Component Rendered')

    const handle_logout = () => {
        dispatch(rdx_logout());

        sessionStorage.clear();
        localStorage.clear();

        navigate('/')


    }


    // Destruct
    const { loggedin, name, photo } = useSelector(strore => strore.userSlice);


    return (
        <nav className={styles.nav}>
            <div className={styles.links}>
                <Link className={styles.link} to="/">Home</Link>
                <Link className={styles.link} to="/about">About</Link>
                {
                    loggedin &&
                        <>
                            <Link className={styles.link} to="/products">Products</Link>
                            <Link className={styles.link} to="/users">Users</Link>
                        </> 
                }
                <Link className={styles.link} to="/contacts">Contacts</Link>
                <Link className={styles.link} to="/services">Services</Link>
            </div>

            <div className={styles.account}>
                <small>Welcome {name} </small>
                {

                    loggedin ?
                        <button onClick={handle_logout} className='bg-red-600 text-white px-2 py-1 rounded-sm'>Logout</button>
                        :
                        <>
                            <button onClick={() => dispatch(rdx_view_loggin(true))} className={styles.link} to="/login">Login</button>
                            <button onClick={() => dispatch(rdx_view_register(true))} className={styles.link} to="/register">Register</button>
                        </>
                }
            </div>


        </nav>
    )
}
