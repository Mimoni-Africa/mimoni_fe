import { GiLindenLeaf } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";

const TopNav = () => {
  return (
    <div className="w-full h-20 bg-[#060809] flex justify-center items-center">
      <div className="bg-[#060809] m-auto w-[1300px] flex justify-between items-center ">
        <div className="flex justify-betwee items-center gap-20 p-">
          <div className="flex items-center cursor-pointer gap-1">
            <GiLindenLeaf className="text-3xl text-[#c3f53c]" />
            <p className="text-[#c3f53c] italic text-2xl font-semibold">
              Paymint
            </p>
          </div>
          <div className="text-white flex justify-center items-center gap-10">
            <div className="flex items-center  cursor-pointer">
              <p>Products</p>
              <MdKeyboardArrowDown className="text-2xl" />
            </div>
            <div className="flex items-center  cursor-pointer">
              <p>Pages</p>
              <MdKeyboardArrowDown className="text-2xl" />
            </div>
            <div className="flex items-center  cursor-pointer">
              <p>Pricing</p>
              {/* <MdKeyboardArrowDown className="text-2xl" /> */}
            </div>
            <div className="flex items-center  cursor-pointer">
              <p>Company</p>
              {/* <MdKeyboardArrowDown className="text-2xl" /> */}
            </div>
            <div className="flex items-center  cursor-pointer">
              <p>Resources</p>
              {/* <MdKeyboardArrowDown className="text-2xl" /> */}
            </div>
          </div>
        </div>
        <div className="text-white flex justify-center items-center gap-5">
          <button className="border border-[#c3f53c] text-[#c3f53c] hover:bg-[#c3f53c] hover:text-[#060809] transition ease-in-out duration-300 px-6 py-2 rounded-[30px] cursor-pointer ">
            Sign in
          </button>
          <button className="bg-[#c3f53c] hover:bg-[#a2d53cd2]  transition ease-in-out duration-300 cursor-pointer text-[#060809] px-6 py-2 rounded-[30px]">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
