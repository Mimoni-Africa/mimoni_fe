import { HiArrowRight } from "react-icons/hi";
import Phone from "../assets/landingPage_img/Phone2.avif";
import Phone_left from "../assets/landingPage_img/phone2_left.avif";
import Phone_frame from "../assets/landingPage_img/Phone_frame.avif";
import globe from "../assets/landingPage_img/img_globe.png";
// import globe_cardd from "../assets/landingPage_img/globe_card.png";
import { useEffect, useRef, useState } from "react";

const Offers = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // triggers when ~50% of the image is in view
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
    };
  }, []);
  return (
    <div className="  w-full rounded-tr-[40px] rounded-tl-[40px] bg-white">
      <div className="w-[1000px] m-auto flex justify-between items-center h-20">
        <p className="text-[18px] text-gray-700  ">As featured on:</p>
      </div>
      <div className="w-[800px] m-auto flex      justify-between items-center ">
        <p className=" text-[#000]  text-center leading-[4.5rem] mt-[3rem] text-[65px] ">
          We offer fast and secure money transfers
        </p>
      </div>

      <div className=" my-[4rem]  flex justify-center items-center w-full">
        <div className=" overflow-hidden relative m-auto    grid grid-cols-2  gap-[5rem]  ">
          <div className="w-[400px] h-[580px] rounded-3xl px-5 bg-[#060809] text-white  flex flex-col items-center">
            <h3 className="text-[#c3f53c] my-[1rem] mt-[2rem] text-[36px]">
              For Personal
            </h3>
            <p className="text-[20px] text-center leading-[1.6rem] mb-[2rem] ">
              Moving overseas? Paying tax, a mortgage or bills in another
              country? You can send money to 150+ countries worldwide.
            </p>
            <button className="group bg-[#c3f53c] font-semibold flex items-center gap-3 pt-[11px] text-[18px] hover:bg-[#a2d53cd2] transition ease-in-out duration-300 cursor-pointer text-[#060809] px-6 py-3.5 rounded-[30px]">
              <span>Personal</span>
              <span className="pt-1">
                <HiArrowRight className="text-[#060809] transform transition duration-300 ease-in-out group-hover:-rotate-30" />
              </span>
            </button>

            <div className="absolute z-20 w-[310px] top-[19.5rem] ">
              <img src={Phone_frame} alt="" />
            </div>

            <div className="absolute z-20 top-[20.24rem] ">
              <img src={Phone} alt="" className="w-[280px]  object-contain " />
            </div>

            <div className="absolute top-[21.5rem] left-[-0.5rem] z-0">
              <img
                src={Phone_left}
                alt=""
                // className="w-[4rem] object-contain animate-[float_4s_ease-in-out_infinite]"
                ref={imgRef}
                className={`w-[4rem] object-contain transition-opacity duration-1000 ease-in-out animate-[float_4s_ease-in-out_infinite] ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
            <div className="absolute top-[19.5rem] left-[21rem] z-0">
              <img
                src={Phone_left}
                alt=""
                // className="w-[4rem] object-contain animate-[float_4s_ease-in-out_infinite]"
                ref={imgRef}
                className={`w-[4rem] object-contain transition-opacity duration-1000 ease-in-out animate-[float_5s_ease-in-out_infinite] ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
            <div className="absolute top-[29rem] left-[21rem] z-30">
              <img
                src={Phone_left}
                alt=""
                // className="w-[4rem] object-contain animate-[float_3s_ease-in-out_infinite]"
                ref={imgRef}
                className={`w-[4rem] object-contain transition-opacity duration-1000 ease-in-out animate-[float_3s_ease-in-out_infinite] ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>
          <div className="w-[400px] h-[580px] relative rounded-3xl  bg-[#060809] text-white  flex flex-col items-center overflow-hidden">
            <h3 className="text-[#c3f53c] my-[1rem] mt-[2rem] text-[36px]">
              For Business
            </h3>
            <p className="text-[20px] px-5 text-center leading-[1.6rem] mb-[2rem] ">
              Moving overseas? Paying tax, a mortgage or bills in another
              country? You can send money to 150+ countries worldwide.
            </p>
            <button className="group bg-[#c3f53c] font-semibold flex items-center gap-3 pt-[11px] text-[18px] hover:bg-[#a2d53cd2] transition ease-in-out duration-300 cursor-pointer text-[#060809] px-6 py-3.5 rounded-[30px]">
              <span>Business</span>
              <span className="pt-1">
                <HiArrowRight className="text-[#060809] transform transition duration-300 ease-in-out group-hover:-rotate-30" />
              </span>
            </button>

 

            <div className="absolute right-[-10rem] bottom-[-4rem] translate-y-[30%] z-0">
              <img src={globe} alt="" className="w-[30rem] object-cover" />
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
