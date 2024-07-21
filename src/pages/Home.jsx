import { useSelector } from 'react-redux'

import Counter from '../components/Counter'

export default function Home() {

    const { loggedin, name } = useSelector(store => store.userSlice)


    return (
        <div>
            Home Page 1
            <Counter />
        </div>
    )
}
