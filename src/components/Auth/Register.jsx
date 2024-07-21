import { useState, useMemo } from 'react'

import { styles } from '../../data/forms'


// Components
import ValidatePassword from './ValidatePassword'

// Redux
import { useDispatch } from 'react-redux'
import { rdx_view_loggin, rdx_view_register } from '../../redux/settingsSlice'

export default function Register() {

    console.log('Register Component Rendered')

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');


    const dispatch = useDispatch()


    // Changes
    // First Name
    const handle_firstName_change = e => {
        setFirstName(e.target.value)
    }

    // Last Name
    const handle_lastName_change = e => {
        setLastName(e.target.value)
    }

    // password
    const handle_password_change = e => {
        let pass = e.target.value;

        setPassword(pass);
    }

    const handle_password_confirmation_change = e => {
        const pass = e.target.value;

        setPasswordConfirmation(pass);
    }



    // Validate the firstName


    // const validateFirstName = useMemo( () => {} , [])

    const validateFirstName = useMemo(() => {
        console.log('ValidateFirstName component rendered')

        if (firstName.length < 3 || firstName.length > 15) {
            return <p className='text-red-700'>First Name should be between 3 and 15 letters</p>
        }

        return <p className='text-green-700'>First Name accepted</p>

    }, [firstName])



    // Validate the lastName

    const validateLastName = useMemo(() => {
        console.log('ValidateLastName component rendered')

        if (lastName.length < 3 || lastName.length > 15) {
            return <p className='text-red-700'>Last Name should be between 3 and 15 letters</p>
        }
        return <p className='text-green-700'>Last Name accepted</p>

    }, [lastName])




    return (
        <div className={styles.login}>
            <div className={styles.form}>
                <h2 className={styles.title}>Register a new account</h2>

                <div className={styles.outer}>
                    <div className={styles.inner}>

                        <label className={styles.label}>
                            <span>First Name</span>
                            <input type="text" onChange={handle_firstName_change} />
                            <span>{firstName.length}/15</span>
                        </label>
                        {validateFirstName}

                        <label className={styles.label}>
                            <span>Last Name</span>
                            <input onChange={handle_lastName_change} type="text" />
                            <span>{lastName.length}/15</span>
                        </label>
                        {validateLastName}

                        <label className={styles.label}>
                            <span>Email</span>
                            <input type="text" />
                        </label>

                        <label className={styles.label}>
                            <span>Mobile</span>
                            <input type="text" />
                        </label>

                        <label className={styles.label}>
                            <span>Username</span>
                            <input type="text" />
                        </label>

                        <label className={styles.label}>
                            <span>Password</span>
                            <input type="password" onChange={handle_password_change} />
                        </label>

                        <label className={styles.label}>
                            <span>Password Confirmation</span>
                            <input type="password" onChange={handle_password_confirmation_change} />
                        </label>

                        <ValidatePassword password={password} passwordConfirmation={passwordConfirmation} />

                        <div className={styles.btnBox}>
                            <button className={`${styles.btn} ${styles.btn_login}`}  >Register</button>
                            <button onClick={() => dispatch(rdx_view_register(false))} className={`${styles.btn} ${styles.btn_cancel}`} >Cancel</button>
                        </div>

                        <div>
                            I have account? <span onClick={() => dispatch(rdx_view_loggin(true))}>login here</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
