import { useSelector , useDispatch } from 'react-redux'

import { decrease, increase } from '../redux/counterSlice'

// Data
import { styles, btns } from '../data/counter'

export default function Counter() {

  const dispatch = useDispatch();

  const { counter } = useSelector(store => store.counterSlice)


  return (
    <div>
      <h2 className="text-2xl text-center py-3 mb-4 font-extrabold uppercase text-sky-800">Counter</h2>

      <div className="p-4 flex justify-center gap-5 items-center">
        <button onClick={() => dispatch(increase()) } className={`${styles.btn} ${styles.plus}`}>+</button>
        <span className={styles.counter}> {counter} </span>
        <button onClick={()=> dispatch(decrease())} className={`${styles.btn} ${styles.minus}`}>-</button>
      </div>

    </div>
  )
}
