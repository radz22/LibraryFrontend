import SideBar from "../Components/SideBar";
import BackHome from "./BackHome";

const Home = () => {
  return (
    <div className="w-full  flex gap-5">
      <div className={`w-1/4	 bg-[#343a40] h-screen `}>
        <SideBar />
      </div>

      <div className="w-3/4		 ">
        <BackHome />
      </div>
    </div>
  );
};

export default Home;
