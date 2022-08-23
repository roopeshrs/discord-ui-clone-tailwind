import React, {useState} from "react";
import loginbg from '../../assets/login_bg.svg';
import {Link} from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [updates, setUpdates] = useState(true);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const days = [];
  for(let i=1; i<=31; i++){
      days.push(i.toString());
  }
  const years = [];
  for(let i=2019; i>=1870; i--){
      years.push(i.toString());
  }
  const [month, setMonth] = useState();
  const [day, setDay] = useState();
  const [year, setYear] = useState();
  function sendRegistrationDetails(e){
    e.preventDefault();
    let data = {
        email,
        username,
        password,
        date: {month, day, year},
        updates    
    }
    navigate("/dashboard");
    setEmail("");
    setUsername("");
    setPassword("");
    setUpdates(true);
    setMonth();
    setDay();
    setYear();
  }
  return (
    <div className="bg-[url('/assets/login_bg.svg')] bg-no-repeat bg-center bg-cover h-[100vh] flex justify-center items-center cursor-default">
        <div className="flex flex-col bg-[#36393f] w-5/12 p-[25px] sm:w-[70%] md:w-[70%] lg:w-[60%]">
            <h2 className="text-[25px] font-semibold text-white text-center w-full">Create an account</h2>
            <form onSubmit={(e)=>sendRegistrationDetails(e)}>
                    <label htmlFor="email" className="text-[#8e9297] uppercase text-[12px] font-bold">email</label><br/>
                    <input type="email" id="email" name="email" className="w-full outline-0 border-0 pl-[8px] bg-[#202225] text-[#8e9297] h-[38px] text-[16px] rounded-sm mb-[10px]" value={email} onChange={(e)=> setEmail(e.target.value)} required /><br />
                    <label htmlFor="username" className="text-[#8e9297] uppercase text-[12px] font-bold">username</label><br/>
                    <input type="text" id="username" name="username" className="w-full outline-0 border-0 pl-[8px] bg-[#202225] text-[#8e9297] h-[38px] text-[16px] rounded-sm mb-[10px]" value={username} onChange={(e)=> setUsername(e.target.value)} required /><br />
                    <label htmlFor="password" className="text-[#8e9297] uppercase text-[12px] font-bold">password</label><br/>
                    <input type="password" id="password" name="password" className="w-full outline-0 border-0 pl-[8px] bg-[#202225] text-[#8e9297] h-[38px] text-[16px] rounded-sm mb-[10px]" value={password} onChange={e => setPassword(e.target.value)} required />
                    <label className="text-[#8e9297] uppercase text-[12px] font-bold">date of birth</label><br/>
                    <div className="flex justify-between">
                        <Dropdown options={months} placeholder="Month" value={month} onChange={(e)=> setMonth(e.value)} className="flex-[1] mr-[10px]" controlClassName="bg-[#36393f] text-[#8e9297] border-[1px] border-[#23272a]" menuClassName="bg-[#36393f] border-[1px] border-[#23272a] [&>*]:text-[#8e9297] hover:[&>*]:bg-[#23272a] hover:[&>*]:text-[#8e9297] [&>*.is-selected]:bg-[#202225] [&>*.is-selected]:text-[#8e9297] [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-thumb]:bg-[#23272a] [&::-webkit-scrollbar-thumb]:rounded-[5px]" />
                        <Dropdown options={days} placeholder="Day" value={day} onChange={(e)=> setDay(e.value)} className="flex-[1] mr-[10px]" controlClassName="bg-[#36393f] text-[#8e9297] border-[1px] border-[#23272a]" menuClassName="bg-[#36393f] border-[1px] border-[#23272a] [&>*]:text-[#8e9297] hover:[&>*]:bg-[#23272a] hover:[&>*]:text-[#8e9297] [&>*.is-selected]:bg-[#202225] [&>*.is-selected]:text-[#8e9297] [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-thumb]:bg-[#23272a] [&::-webkit-scrollbar-thumb]:rounded-[5px]" />
                        <Dropdown options={years} placeholder="Year" value={year} onChange={(e)=> setYear(e.value)} className="flex-[1]" controlClassName="bg-[#36393f] text-[#8e9297] border-[1px] border-[#23272a]" menuClassName="bg-[#36393f] border-[1px] border-[#23272a] [&>*]:text-[#8e9297] hover:[&>*]:bg-[#23272a] hover:[&>*]:text-[#8e9297] [&>*.is-selected]:bg-[#202225] [&>*.is-selected]:text-[#8e9297] [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-thumb]:bg-[#23272a] [&::-webkit-scrollbar-thumb]:rounded-[5px]" />
                    </div>
                    <div className="flex mt-[10px]">
                        <div className="mr-[10px] flex justify-center items-center relative">
                        <input type="checkbox" id="updates" name="updates" checked={updates} onChange={()=> setUpdates(!updates)} className="h-[25px] w-[25px] cursor-pointer relative before:content-[''] before:absolute before:top-[-2px] before:right-[-2px] before:bottom-[-2px] before:left-[-2px] before:bg-[#5865f2] before:rounded-[5px]"/>
                        {updates && <i className="fa-solid fa-check text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer pointer-events-none"></i>}
                        </div> 
                        <div className="text-[#8e9297] text-[14px] font-normal flex-[1]">(Optional) It’s okay to send me emails with Discord updates, tips, and special offers. You can opt out at any time.</div>
                    </div>
                    <button type="submit" className="bg-[#5865f2] text-white w-full py-2 rounded-sm cursor-pointer text-[16px] mt-[20px] mb-[5px] hover:bg-[#404eed]">Continue</button>
                    <Link to='/login'><p className="text-[#00aff4] text-[14px] font-medium mt-[5px] mb-[20px]">Already have an account?</p></Link>
                    <p className="text-[#8e9297] text-[11px] font-normal">By registering, you agree to Discord's <span className="text-[#00aff4] font-medium">Terms of Service</span> and <span className="text-[#00aff4] font-medium">Privacy Policy</span></p>                                              
                </form>
        </div>
    </div>
  );
}

export default Register;