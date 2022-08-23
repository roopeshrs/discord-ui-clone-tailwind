import React, {useState} from "react";
import discordLogo from "../../assets/discord_main_logo.svg";
import {Link} from 'react-router-dom';
import ReactFlagsSelect from "react-flags-select";
function Footer() {
  const [selected, setSelected] = useState("US");
  return (
    <footer className="bg-[#23272a] p-[80px] text-white pb-[40px]">
        <div className="flex border-b-[1px] border-[#5865f2] pb-[30px] flex-wrap">
            <div className="flex-[0.3] min-w-[200px] mb-[50px]">
                <h3 className="text-[#5865f2] text-[32px] font-extrabold w-6/12 leading-[1]">IMAGINE A PLACE</h3>
                <ReactFlagsSelect
                    selected={selected}
                    onSelect={(code) => setSelected(code)}
                    className="w-[50%] [&>*:nth-child(even)]:text-black"
                    selectButtonClassName="mt-[20px] border-0 text-white p-0 w-fit"
                />
                <nav className="mt-[20px]">
                    <ul className="flex">
                        <li className="mr-[20px] text-[20px]"><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                        <li className="mr-[20px] text-[20px]"><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        <li className="mr-[20px] text-[20px]"><a href="#"><i className="fa-brands fa-square-facebook"></i></a></li>
                        <li className="text-[20px]"><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                    </ul>
                </nav>
            </div>
            <div className="flex-[0.175] min-w-[120px] mb-[50px]">
                <h5 className="text-[#5865f2] mb-[8px]">Product</h5>
                <ul>
                    <li className="hover:underline mb-[8px]"><Link to="/">Download</Link></li>
                    <li className="hover:underline mb-[8px]"><Link to="/">Nitro</Link></li>
                    <li className="hover:underline mb-[8px]"><Link to="/">Status</Link></li>
                </ul>
            </div>
            <div className="flex-[0.175] min-w-[120px] mb-[50px]">
                <h5 className="text-[#5865f2] mb-[8px]">Company</h5>
                <ul>
                    <li className="hover:underline mb-[8px]"><Link to="/">About</Link></li>
                    <li className="hover:underline mb-[8px]"><Link to="/">Jobs</Link></li>
                    <li className="hover:underline mb-[8px]"><Link to="/">Branding</Link></li>
                    <li className="hover:underline mb-[8px]"><Link to="/">Newsroom</Link></li>
                </ul>
            </div>
            <div className="flex-[0.175] min-w-[120px] mb-[50px]">
                <h5 className="text-[#5865f2] mb-[8px]">Resources</h5>
                <ul>
                    <li className="hover:underline mb-[8px]"><Link to="/">College</Link></li>
                    <li className="hover:underline mb-[8px]"><Link to="/">Support</Link></li>
                    <li className="hover:underline mb-[8px]"><Link to="/">Safety</Link></li>
                    <li className="hover:underline mb-[8px]"><Link to="/">Blog</Link></li>
                    <li className="hover:underline mb-[8px]"><Link to="/">Feedback</Link></li>
                    <li className="hover:underline mb-[8px]"><Link to="/">Developers</Link></li>
                    <li className="hover:underline mb-[8px]"><Link to="/">StreamKit</Link></li>
                </ul>
            </div>
            <div className="flex-[0.175] min-w-[120px] mb-[50px]">
                <h5 className="text-[#5865f2] mb-[8px]">Policies</h5>
                <ul>
                    <li className="hover:underline mb-[8px]"><Link to="/">Terms</Link></li>
                    <li className="hover:underline mb-[8px]"><Link to="/">Privacy</Link></li>
                    <li className="hover:underline mb-[8px]"><Link to="/">Cookie Settings</Link></li>
                    <li className="hover:underline mb-[8px]"><Link to="/">Guidelines</Link></li>
                    <li className="hover:underline mb-[8px]"><Link to="/">Acknowledgements</Link></li>
                    <li className="hover:underline mb-[8px]"><Link to="/">Licenses</Link></li>
                    <li className="hover:underline mb-[8px]"><Link to="/">Moderation</Link></li>
                </ul>
            </div>
        </div>
        <div className="py-[30px] flex justify-between">
            <img src={discordLogo}/>
            <Link to="/register"><div className="bg-[#5865f2] px-4 py-2 rounded-[40px] cursor-pointer text-[14px] hover:opacity-95">Sign up</div></Link>
        </div>
    </footer>
  );
}

export default Footer;