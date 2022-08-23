import React, {useState, useEffect} from "react";
import loginbg from '../../assets/login_bg.svg';
import qrCode from '../../assets/qr_code.png';
import loadingCircle from '../../assets/loading_circle_icon.svg';
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(()=>{
    let timer = setTimeout(()=>{
        setLoading(false);
    }, 3000);

    return () => {
        clearTimeout(timer);
    }
  }, [])
  function sendLoginDetails(e){
      e.preventDefault();
      let data = {
          email,
          password
      }
      navigate("/dashboard");
      setEmail("");
      setPassword("");
  }
  return (
    <div className="bg-[url('/assets/login_bg.svg')] bg-no-repeat bg-center bg-cover h-[100vh] flex justify-center items-center">
        <div className="flex bg-[#36393f] w-6/12 cursor-default sm:w-[70%]">
            <div className="flex-[0.6] p-[25px] sm:flex-1 md:flex-1 lg:flex-1">
                <h2 className="text-[25px] font-semibold text-white text-center">Welcome back!</h2>
                <p className="text-center text-[#8e9297] text-[16px] font-normal mb-7">We're so exited to see you again!</p>
                <form onSubmit={(e)=>sendLoginDetails(e)}>
                    <label htmlFor="emailorphone" className="text-[#8e9297] uppercase text-[12px] font-bold">email or phone number</label><br/>
                    <input type="text" id="emailorphone" name="emailorphone" className="w-full outline-0 border-0 pl-[8px] bg-[#202225] text-[#8e9297] h-[38px] text-[16px] rounded-sm mb-[10px]" value={email} onChange={(e)=> setEmail(e.target.value)} required /><br />
                    <label htmlFor="password" className="text-[#8e9297] uppercase text-[12px] font-bold">password</label><br/>
                    <input type="password" id="password" name="password" className="w-full outline-0 border-0 pl-[8px] bg-[#202225] text-[#8e9297] h-[38px] text-[16px] rounded-sm" value={password} onChange={e => setPassword(e.target.value)} required />
                    <p className="text-[#00aff4] text-[14px] font-medium mt-[5px]"><Link to="/login" className="hover:underline">Forgot your password?</Link></p>
                    <button type="submit" className="bg-[#5865f2] text-white w-full py-2 rounded-sm cursor-pointer text-[16px] mt-[20px] mb-[5px] hover:bg-[#404eed]">Login</button>
                    <p className="text-[#8e9297] text-[14px] font-normal">Need an account? <span className="text-[#00aff4] text-[14px] font-medium"><Link to="/register" className="hover:underline">Register</Link></span></p>                                              
                </form>
            </div>
            <div className="flex-[0.4] flex flex-col justify-center items-center p-[25px] sm:hidden md:hidden lg:hidden">
                {
                    loading ? (
                        <div className="w-[175px] h-[175px] bg-[#36393f] flex justify-center items-center rounded-sm">
                            <div className="w-[30px]">
                                <img src={loadingCircle} className="animate-spin" />
                            </div>
                        </div>
                    ) : (
                        <div className="w-[175px] h-[175px] bg-white flex justify-center items-center rounded-sm">
                            <img src={qrCode} />
                        </div>
                    )
                }
                <h1 className="text-[25px] text-white font-bold text-center mb-[8px] mt-[20px]">Log in with QR Code</h1>
                <p className="text-center text-[#8e9297] text-[16px] font-normal">Scan this with the <span className="font-bold">Discord mobile app</span> to log in instantly.</p>
            </div>
        </div>
    </div>
  );
}

export default Login;