import { BiSolidUpArrow } from 'react-icons/bi'

export default function ScrollTop() {
    console.log('ScrollTop Component Rendered')


    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
        })
    }

    return (
        <div onClick={handleScrollToTop} className='rounded-full w-6 h-6 bg-indigo-800 text-white fixed right-5 bottom-5 flex justify-center items-center cursor-pointer'>
            <BiSolidUpArrow />
        </div>
    )
}
