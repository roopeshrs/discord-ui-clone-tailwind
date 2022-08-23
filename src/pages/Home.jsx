import React from "react";
import centerImage from '../../assets/center_bg_landing_header.svg';
import leftImage from '../../assets/left_bg_landing_header.svg';
import rightImage from '../../assets/right_bg_landing_header.svg';
import inviteOnly from '../../assets/invite_only_landing.svg';
import hangingOut from '../../assets/hanging_out_easy_landing.svg';
import fandom from '../../assets/fandom_landing.svg';
import chiling from '../../assets/just_chiling_landing.svg';
import stars from '../../assets/tiny_stars_landing.svg';
function Home() {
  return (
    <>
        <section className="h-[85vh] bg-[#404eed] relative">
            <img src={centerImage} className="h-full object-cover"/>
            <img src={leftImage} className="absolute bottom-0 left-0 w-6/12 ml-[-348px]"/>
            <img src={rightImage} className="absolute bottom-0 right-0 w-6/12 mr-[-348px]"/>
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] sm:w-[90%] md:w-[90%] lg:w-[80%] xl:w-[70%]">
                <h1 className="text-[56px] font-black text-white text-center mb-10 sm:text-[25px] sm:text-left md:text-[38px] md:text-left">IMAGINE A PLACE...</h1>
                <p className="text-center text-white text-[18px] mb-7 sm:text-[16px] sm:text-left md:text-[16px] md:text-left">...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
                <div className="flex justify-around sm:flex-col md:flex-col">
                    <div className="bg-white px-8 py-4 rounded-[28px] cursor-pointer text-[18px] hover:text-[#5865f2] font-semibold sm:w-fit sm:mb-[10px] md:w-fit md:mb-[10px]"><i className="fa-solid fa-download"></i> Download for Mac</div>
                    <div className="bg-black text-white px-8 py-4 rounded-[28px] cursor-pointer text-[18px] hover:bg-[#36393f] font-semibold sm:w-fit md:w-fit">Open Discord in your browser</div>
                </div>
            </div>
        </section>

        <section className="flex py-28 sm:flex-col md:flex-col lg:flex-col">
            <div className="flex-[0.6]">
                <img src={inviteOnly} className="w-[80%] my-0 mx-auto"/>
            </div>
            <div className="flex-[0.4]">
                <h2 className="text-[#23272a] text-[48px] font-bold p-[15px] pr-[152px] leading-[1.4] sm:text-[28px] sm:p-[15px] md:text-[32px] md:p-[15px] lg:p-[15px]">Create an invite-only place where you belong</h2>
                <p className="text-[#23272a] text-[18px] px-[15px] pr-[152px] sm:text-[16px] sm:p-[15px] md:text-[16px] md:p-[15px] lg:p-[15px]">Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
            </div>
        </section>

        <section className="flex py-28 bg-[#f6f6f6] sm:flex-col md:flex-col lg:flex-col">
            <div className="flex-[0.4]">
                <h2 className="text-[#23272a] text-[48px] font-bold p-[15px] pl-[152px] leading-[1.4] sm:text-[28px] sm:p-[15px] md:text-[32px] md:p-[15px] lg:p-[15px]">Where hanging out is easy</h2>
                <p className="text-[#23272a] text-[18px] px-[15px] pl-[152px] sm:text-[16px] sm:p-[15px] md:text-[16px] md:p-[15px] lg:p-[15px]">Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
            </div>
            <div className="flex-[0.6]">
                <img src={hangingOut} className="w-[80%] my-0 mx-auto"/>
            </div>
        </section>

        <section className="flex py-28 sm:flex-col md:flex-col lg:flex-col">
            <div className="flex-[0.6]">
                <img src={fandom} className="w-[80%] my-0 mx-auto"/>
            </div>
            <div className="flex-[0.4]">
                <h2 className="text-[#23272a] text-[48px] font-bold p-[15px] pr-[152px] leading-[1.4] sm:text-[28px] sm:p-[15px] md:text-[32px] md:p-[15px] lg:p-[15px]">From few to a fandom</h2>
                <p className="text-[#23272a] text-[18px] px-[15px] pr-[152px] sm:text-[16px] sm:p-[15px] md:text-[16px] md:p-[15px] lg:p-[15px]">Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
            </div>
        </section>

        <section className="py-28 pb-56 bg-[#f6f6f6]">
            <h2 className="text-[#23272a] text-[48px] font-extrabold text-center w-[60%] my-0 mx-auto mb-[15px] sm:text-[28px] sm:text-left sm:w-[90%] md:text-[32px] md:text-left md:w-[90%]">Reliable tech for staying close</h2>
            <p className="text-[#23272a] text-[18px] w-[60%] my-0 mx-auto text-center sm:text-[16px] sm:text-left sm:w-[90%] md:text-[16px] md:text-left md:w-[90%]">Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
            <div className="mb-[30px]">
                <img src={chiling} className="w-[90%] my-0 mx-auto"/>
            </div>
            <div className="w-[40%] my-0 mx-auto relative sm:w-[90%] md:w-[90%] lg:w-[80%]">
                <img src={stars} />
                <h2 className="absolute top-[20px] w-full text-center text-[32px] font-semibold text-[#23272a]">Ready to start your journey?</h2>
                <div className="bg-[#404eed] text-white px-8 py-4 rounded-[28px] cursor-pointer text-[20px] absolute top-[100px] left-[50%] translate-x-[-50%] w-max hover:bg-[#5865f2]"><i className="fa-solid fa-download"></i> Download for Windows</div>
            </div>
        </section>

    </>
  );
}

export default Home;