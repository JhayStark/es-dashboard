import { FaUsers, FaUserSlash } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { RiUserShared2Line } from "react-icons/ri";
import { useRouter } from "next/router";
import PieChartComponent from "@/components/PieChart";

const Clients = () => {
  const router = useRouter();
  return (
    <>
      <div className="grid grid-cols-3 gap-[1.4rem] mb-14 ">
        <div className="flex flex-col gap-16 p-4 bg-white rounded-lg shadow-3xl">
          <div className="flex items-center justify-between">
            <p className="xl:text-[1.030rem] 2xl:text-[1.174rem] 3xl:text-[1.493rem] font-medium">
              Total Users
            </p>
            <div className="border-4 border-[#D27C2C] p-1 rounded-lg">
              <FaUsers className="text-[#D27C2C] text-2xl" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-light">Updated 30mins ago</p>
            <p className="text-[#055189] text-2xl">5000</p>
          </div>
        </div>
        <div className="flex flex-col gap-16 p-4 bg-white rounded-lg shadow-3xl">
          <div className="flex items-center justify-between">
            <p className="xl:text-[1.030rem] 2xl:text-[1.174rem] 3xl:text-[1.493rem] font-medium">
              Active Users
            </p>
            <AiOutlineCheckCircle className="text-4xl text-[#0FA958]  " />
          </div>
          <div className="flex items-center justify-between">
            <p className="font-light">Updated 30mins ago</p>
            <p className="text-[#055189] text-2xl">5000</p>
          </div>
        </div>
        <div className="flex flex-col gap-16 p-4 bg-white rounded-lg shadow-3xl">
          <div className="flex items-center justify-between">
            <p className="xl:text-[1.030rem] 2xl:text-[1.174rem] 3xl:text-[1.493rem] font-medium">
              Disabled Users
            </p>
            <FaUserSlash className="text-4xl text-[#F24E1E] font-medium" />
          </div>
          <div className="flex items-center justify-between">
            <p className="font-light">Updated 30mins ago</p>
            <p className="text-[#055189] text-2xl">5000</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[1.4rem] mb-14 ">
        <div className="p-4 bg-white rounded-lg shadow-3xl max-h-[25rem] 3xl:px-7">
          <p className="xl:text-[1.030rem] 2xl:text-[1.174rem] 3xl:text-[1.493rem]  font-semibold">
            User Service Usage
          </p>

          <PieChartComponent />

          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col gap-1">
              <div className="w-5 h-2 rounded-xl bg-[#214BB8]"></div>
              <p className="text-lg font-semibold">2250</p>
              <p className="text-sm text-[#7E7E7E]">insyt</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="w-5 h-2 rounded-xl bg-[#FE634E]"></div>
              <p className="text-lg font-semibold">2250</p>
              <p className="text-sm text-[#7E7E7E]">Sms</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="w-5 h-2 rounded-xl bg-[#45ADDA]"></div>
              <p className="text-lg font-semibold">2250</p>
              <p className="text-sm text-[#7E7E7E]">Voice</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 min-h-[38rem] ">
          <div className="h-full p-4 bg-white rounded-lg shadow-3xl ">
            <p className="py-3 border-b-[1px] text-xl font-medium">User List</p>
            <div>
              <div className="grid grid-cols-3 gap-2 py-4 ">
                <p className="text-lg font-medium text-center ">Client ID</p>
                <p className="text-lg font-medium text-center ">
                  User/Organization Name
                </p>
                <p className="text-lg font-medium text-center ">Action</p>
              </div>
              <div className="grid grid-cols-3 gap-2 py-4 bg-[#EDF3FF] ">
                <p className="text-lg text-center">CID 245</p>
                <p className="text-lg text-center">Jay Inc</p>
                <div className="flex items-center justify-center text-[#699BF7] text-3xl hover:scale-125 cursor-pointer">
                  <RiUserShared2Line onClick={() => router.push("clients/1")} />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 py-4 ">
                <p className="text-lg text-center">CID 245</p>
                <p className="text-lg text-center">Jay Inc</p>
                <div className="flex items-center justify-center text-[#699BF7] text-3xl hover:scale-125 cursor-pointer">
                  <RiUserShared2Line />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 py-4 bg-[#EDF3FF] ">
                <p className="text-lg text-center">CID 245</p>
                <p className="text-lg text-center">Jay Inc</p>
                <div className="flex items-center justify-center text-[#699BF7] text-3xl hover:scale-125 cursor-pointer">
                  <RiUserShared2Line />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 py-4 ">
                <p className="text-lg text-center">CID 245</p>
                <p className="text-lg text-center">Jay Inc</p>
                <div className="flex items-center justify-center text-[#699BF7] text-3xl hover:scale-125 cursor-pointer">
                  <RiUserShared2Line />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 py-4 bg-[#EDF3FF] ">
                <p className="text-lg text-center">CID 245</p>
                <p className="text-lg text-center">Jay Inc</p>
                <div className="flex items-center justify-center text-[#699BF7] text-3xl hover:scale-125 cursor-pointer">
                  <RiUserShared2Line />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
