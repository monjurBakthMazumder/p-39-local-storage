import { NavLink } from "react-router-dom";
import Logo from './Logo'
const Navbar = () => {
    const link =
    <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/favorites'}>Favorites</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 border-b-4 px-5 sm:px-[10%]">
  <div className="mr-auto">
    
    <a className="text-xl sm:text-2xl font-bold"><Logo/></a>
  </div>
  <div className="hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {link}
    </ul>
  </div>
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {link}
      </ul>
    </div>
</div>
    );
};

export default Navbar;