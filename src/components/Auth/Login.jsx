import { useRef, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { rdx_view_loggin, rdx_view_register } from '../../redux/settingsSlice'
import { rdx_loggin } from '../../redux/userSlice'

import { styles } from '../../data/forms'


// react-toastify
import { toast } from 'react-toastify'

export default function Login() {

  const [error, setError] = useState('')
  const [remember, setRemember] = useState(false)

  const dispatch = useDispatch();



  const username_ref = useRef();
  const pass_ref = useRef();


  // Navigator
  const navigate = useNavigate();

  console.log(username_ref)


  const handle_login = async () => {

    const username = username_ref.current.value;
    const password = pass_ref.current.value

    // JS Data
    const data = {
      username,
      password
    }

    console.log('data', data)


    // JSON data
    const json_data = JSON.stringify(data);
    console.log('json_data', json_data)



    const obj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: json_data
    }

    console.log('obj', obj)

    const api = 'https://dummyjson.com/auth/login'

    const res = await fetch(api, obj)

    const res_data = await res.json()

    if (res_data.id) {
      // Case correct cedentials


      // convert userdata to JSON string
      const userdata = JSON.stringify(res_data)

      if (remember) {
        // Save the user data to localStorage
        localStorage.setItem('company_user_data', userdata)
      } else {
        // Save the user data to sessionStorage
        sessionStorage.setItem('company_user_data', userdata)
      }


      dispatch(rdx_loggin(res_data));

      dispatch(rdx_view_loggin(false))

      navigate('/');


    } else {
      // Case invalid credentials
      setError(res_data.message);
      // toast(res_data.message)
      toast.error(res_data.message, {
        closeButton: true,
        autoClose: false
      })
    }

    console.log(res_data)

    return;
  }


  return (
    <div className={styles.login}>

      <div className={styles.form}>
        <h2 className={styles.title}>Login to your account</h2>

        <div className={styles.outer}>
          <div className={styles.inner}>

            <label className={styles.label}>
              <span>Username</span>
              <input type="text" ref={username_ref} />
            </label>



            <label className={styles.label}>
              <span>Password</span>
              <input type="password" ref={pass_ref} />
            </label>

            <div>
              Forget Password? reset here
            </div>
          </div>

          <div>
            <label className='flex gap-2 my-2'>
              <input type="checkbox" onClick={() => setRemember(!remember)} />
              Remember me
            </label>
          </div>
          <div className='text-red-600'>{error}</div>

          <div className={styles.btnBox}>
            <button className={`${styles.btn} ${styles.btn_login}`} onClick={handle_login}>Login</button>
            <button onClick={() => dispatch(rdx_view_loggin(false))} className={`${styles.btn} ${styles.btn_cancel}`} >Cancel</button>
          </div>

          <div>
            Do not have account? <span onClick={() => dispatch(rdx_view_register(true))}>register here</span>
          </div>
        </div>
      </div>
    </div>
  )
}
