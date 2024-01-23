import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    const navItems = <>
    <li><NavLink className={({isActive})=> isActive ? 'border-b-2 border-blue-400 p-2 capitalize text-xl inline-block rounded-none text-blue-600' : "text-blue-400 capitalize"} to="/">Home</NavLink></li>
    <li><NavLink className={({isActive})=> isActive ? 'border-b-2 border-blue-400 p-2 capitalize text-xl inline-block rounded-none text-blue-600' : "text-blue-400 capitalize"} to="/event-details">event details</NavLink></li>
    <li><NavLink className={({isActive})=> isActive ? 'border-b-2 border-blue-400 p-2 capitalize text-xl inline-block rounded-none text-blue-600' : "text-blue-400 capitalize"} to="/guest">guest list</NavLink></li>
    <li><NavLink className={({isActive})=> isActive ? 'border-b-2 border-blue-400  p-2 capitalize text-xl inline-block rounded-none text-blue-600' : "text-blue-400 capitalize"} to="/contactUs">contact us</NavLink></li>
    </>
  return (
    <>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <Link to="/" className="text-2xl text-sky-500 font-semibold">Cruiser 71</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    <Link  to="/login" className="btn btn-sm btn-outline border-2 border-blue-400 text-blue-400 hover:border-none hover:text-white hover:bg-blue-400">Login</Link>
  </div>
</div>
    </>
  )
}
