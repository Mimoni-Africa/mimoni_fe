import HeroSection from "./components/HeroSection";
import Offers from "./components/Offers";
import TopNav from "./components/TopNav";

const App = () => {
  return (
    <>
      <TopNav />
      <div className="bg-[#060809]">
        <HeroSection />
        <Offers />
      </div>
    </>
  );
};

export default App;
