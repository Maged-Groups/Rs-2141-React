import { useSelector } from "react-redux"

import styles from "../HeaderStyle"

export default function Header() {

    const {counter} = useSelector(store => store.counterSlice)
    
    console.log('Header Component Rendered')

    return (
        <header className={styles.header}>
            <h2>Page Title {counter} </h2>

        </header>
    )
}
