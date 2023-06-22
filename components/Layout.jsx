import { RxAvatar } from "react-icons/rx";
import BreadCrump from "./BreadCrump";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row w-full h-screen font-sans">
      <Sidebar />
      <div className="w-full bg-[#EDF3FF] overflow-y-auto px-14 ">
        <div className="fixed flex flex-row justify-between xl:w-[74%] 2xl:w-[73.3%] 3xl:w-[77%] py-4 bg-[#EDF3FF]">
          <BreadCrump />
          <div className="flex flex-row items-center gap-2">
            <p>Hi Joel</p>
            <RxAvatar className="text-2xl" />
          </div>
        </div>
        <div className="pt-20 pb-5">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
