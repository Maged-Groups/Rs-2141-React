import { useSelector } from "react-redux"

export default function Footer() {

  const { counter } = useSelector(store => store.counterSlice)

  console.log('Footer Component Rendered')

  return (
    <div className="bg-gray-900 text-gray-300 p-5">Footer {counter}</div>

  )
}
