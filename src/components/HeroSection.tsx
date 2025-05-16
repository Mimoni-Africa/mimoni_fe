import { HiArrowRight } from "react-icons/hi";
import { IoChatbubbleOutline } from "react-icons/io5";
import LaptopFrame from "../assets/landingPage_img/laptop_frame.avif";
import Desktop_img from "../assets/landingPage_img/desktop_img.avif";
import Phone_img from "../assets/landingPage_img/phone.avif";
// import card from "../assets/landingPage_img/atm_card.avif";

const HeroSection = () => {
  return (
    <div className="w-full h-[1000px] bg-[#060809] overflow-hidden flex justify-center flex-col items-center text-white">
      <div className=" mt-[11rem]">
        <button className=" bg-[#e7f1c8] cursor-pointer flex items-center justify-center gap-3 p-1.5 rounded-[30px]  text-[#060809]">
          <span className="bg-[#c3f53c]  cursor-pointer text-[#060809] text-[13px] px-4 py-1 rounded-[30px]">
            New
          </span>
          <span className="text-[14px]"> Paymints Card Upgraded</span>
          <span className="pr-2">
            <HiArrowRight className="text-[#060809] " />
          </span>
        </button>
      </div>
      <div className="mt-8 w-[50%] flex flex-col justify-center items-center gap-5">
        <h1 className="text-[70px] leading-[4.5rem] text-center font-bold">
          Cross-border payment made easy.
        </h1>
        <p className="text-center w-[80%] text-[20px]">
          We help individuals and businesses to securely send and receive money
          globally, without the bank fees
        </p>
      </div>

      <div className="text-white flex justify-center mb-[-1rem] mt-10 items-center gap-5">
        <button className="group bg-[#c3f53c] font-semibold flex items-center gap-3 pt-[11px] text-[18px] hover:bg-[#a2d53cd2] transition ease-in-out duration-300 cursor-pointer text-[#060809] px-6 py-3.5 rounded-[30px]">
          <span>Create account</span>
          <span className="pt-1">
            <HiArrowRight className="text-[#060809] transform transition duration-300 ease-in-out group-hover:-rotate-30" />
          </span>
        </button>

        <button className="group border border-[#c3f53c] font-semibold flex items-center gap-3 text-[18px] text-[#c3f53c] pt-[11px] hover:bg-[#a2d53cd2] hover:text-[#060809] transition ease-in-out duration-300 px-6 py-3.5 rounded-[30px] cursor-pointer">
          <span>Contact sales</span>
          <span className="pt-1">
            <IoChatbubbleOutline className="text-[#c3f53c] transform transition duration-300 ease-in-out group-hover:text-[#060809] text-[20px]" />
          </span>
        </button>
      </div>

      <div className="mt-18 z-10 relative H-[80%]">
        <img src={LaptopFrame} alt="" />

        <div className="absolute top-3 left-0 w-full h-full px-22 overflow-hidden rounded-sm">
          <img
            src={Desktop_img}
            alt=""
            className="w-full  object-contain rounded-[15px]"
          />
        </div>
        <div className="absolute top-11 right-[-36rem]">
          <img src={Phone_img} alt="" className="w-[25%]  object-contain " />
        </div>

        {/* <img src={card} alt="card" className="absolute top-0 w-[27rem] h-[15rem] rotate-[20deg]" /> */}
      </div>
    </div>
  );
};

export default HeroSection;
