import { useSelector } from "react-redux"


// Redux
import { useDispatch } from 'react-redux'
import { rdx_view_loggin } from '../../redux/settingsSlice'

export default function MobileApps() {

  const { loggedin } = useSelector(store => store.userSlice)

  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="text-xl font-bold bg-sky-100 p-3">Mobile Apps</h2>
      <p>Mobile Apps Architecto nobis atque magnam eos rerum eligendi earum non commodi quidem itaque fugit illo cupiditate id odio magni ex molestiae, quas, vel perspiciatis consequuntur illum nisi, laudantium quam quis. Impedit cumque porro, aperiam optio, deleniti fuga fugiat possimus minima ipsum aspernatur iusto.</p>

    
      {
        loggedin ?
          <div>
            Some content for logged in users only
          </div>
          :
          <div onClick={() => dispatch(rdx_view_loggin(true))} className="cursor-pointer hover:text-sky-700">
            Please login to see content
          </div>
      }
    </div>
  )
}
