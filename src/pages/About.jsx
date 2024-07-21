import { Link, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

export default function About() {


  return (
    <div className='m-2'>
      <h2 className="text-2xl mb-4">About Content</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

      <div className='flex gap-3 bg-teal-600 text-gray-200 rounded p-3 '>
        <Link to='future'>Future</Link>
        <Link to='mission'>Mission</Link>
        <Link to='vision'>Vision</Link>
      </div>

      <div className='flex bg-green-400 text-slate-700 rounded p-1  '>

        <button onClick={()=> toast( 'OK', { position: 'top-center', theme: 'colored'} )} >OK</button>
        <Outlet />
      </div>
    </div>
  )
}
