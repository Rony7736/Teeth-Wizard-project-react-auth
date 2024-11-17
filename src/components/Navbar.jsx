import { NavLink } from "react-router-dom";

const Navbar = () => {

    const link =
        <div className="flex items-center gap-10 text-center">

            <NavLink to="/"><li className="">Home</li></NavLink>
            <NavLink to="/alltreatment"><li className="">All Treatment</li></NavLink>
            <NavLink to="/profile"><li className="">Profile</li></NavLink>
            <NavLink to="/mytreatment"><li className="">My Treatment</li></NavLink>

        </div>

    return (
        <div className="navbar bg-base-100 flex items-center">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <h1 className="text-2xl font-bold">Teeth Wizard</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;