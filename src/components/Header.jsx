import React from "react";
import discordLogo from "../../assets/discord_main_logo.svg";
import {Link, NavLink} from 'react-router-dom';
function Header() {
  return (
    <header className="bg-[#404eed] h-[15vh]">
        <div className="bg-[#404eed] h-[15vh] flex justify-between w-11/12 my-0 mx-auto px-8 items-center">
            <div>
                <Link to="/">
                    <img src={discordLogo} alt="discord" />
                </Link>
            </div>
            <nav className="flex-1 sm:hidden md:hidden lg:hidden">
                <ul className="flex justify-evenly px-28 text-white font-semibold">
                    <li className="hover:underline"><NavLink to="/download">Download</NavLink></li>
                    <li className="hover:underline"><NavLink to="/nitro">Nitro</NavLink></li>
                    <li className="hover:underline"><NavLink to="/discover">Discover</NavLink></li>
                    <li className="hover:underline"><NavLink to="/safety">Safety</NavLink></li>
                    <li className="hover:underline"><NavLink to="/support">Support</NavLink></li>
                    <li className="hover:underline"><NavLink to="/blog">Blog</NavLink></li>
                    <li className="hover:underline"><NavLink to="/careers">Careers</NavLink></li>
                </ul>
            </nav>
            <Link to="/login"><div className="bg-white px-4 py-2 rounded-[40px] cursor-pointer text-[14px] hover:text-[#5865f2]">Login</div></Link>
        </div>
    </header>
  );
}

export default Header;