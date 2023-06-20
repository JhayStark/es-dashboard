import { useState } from "react";
import { LuMoreVertical } from "react-icons/lu";

const UserDetails = () => {
  const [tab, setTab] = useState("insyt");
  return (
    <>
      <div className="grid grid-cols-9  3xl:grid-cols-11 gap-[1.4rem] font-sans">
        <div className="col-span-5 3xl:col-span-7">
          <div className="flex flex-col justify-between h-full ">
            <div className="p-5 bg-white rounded-lg shadow-3xl max-h-40 3xl:max-h-44">
              <p className="text-lg font-semibold 3xl:text-2xl mb-7">
                ESOKO IT
              </p>
              <p className="text-sm font-medium mb-9 text-[#2A3547]">
                Pawpaw Street, East Legon Ghana
              </p>
            </div>
            <div className="bg-white grid grid-cols-2 rounded-lg shadow-3xl w-[50%]">
              <p
                className={`text-center text-2xl font-medium rounded-lg py-2 cursor-pointer ${
                  tab === "insyt" && "bg-[#3D7DAD] text-white"
                }`}
                onClick={() => setTab("insyt")}
              >
                Insyt
              </p>

              <p
                className={`text-center text-2xl font-medium rounded-lg py-2 cursor-pointer ${
                  tab === "push" && "bg-[#F24E1E] text-white"
                }`}
                onClick={() => setTab("push")}
              >
                Push
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2 3xl:mx-3 px-4 py-5 bg-white rounded-lg shadow-3xl max-h-[18rem] 2xl:max-h-[20rem]">
          <p className="text-3xl font-semibold text-[#1252A6] mb-6">insyt</p>
          <p className="text-center 2xl:py-10 py-8 text-[2.5rem] font-semibold">
            985
          </p>
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-col gap-1">
              <div className="w-5 h-2 rounded-xl bg-[#BC7674]"></div>
              <p className="text-lg font-semibold">920</p>
              <p className="text-sm text-[#1E1E1E]">InActive</p>
            </div>
            <div className="flex flex-col gap-1 ">
              <div className="w-5 h-2 rounded-xl bg-[#00DBDB]"></div>
              <p className="text-lg font-semibold">920</p>
              <p className="text-sm text-[#1E1E1E]">Active</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 px-4 py-5 3xl:mx-3 bg-white rounded-lg shadow-3xl max-h-[20rem]">
          <div className="flex flex-row items-center justify-between w-full">
            <p className="text-3xl font-semibold text-[#F24E1E]">Push</p>
            <button className="bg-[#F24E1E] text-sm font-medium shadow-md hover:scale-110 text-white rounded-lg p-1">
              Top-up
            </button>
          </div>
          <p>Balance: GHC 500</p>
          <p className="text-center 2xl:py-10 py-8 text-[2.5rem] font-semibold">
            985
          </p>
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-col gap-1">
              <div className="w-5 h-2 rounded-xl bg-[#BC7674]"></div>
              <p className="text-lg font-semibold">920</p>
              <p className="text-sm text-[#1E1E1E]">Scheduled</p>
            </div>
            <div className="flex flex-col gap-1 ">
              <div className="w-5 h-2 rounded-xl bg-[#00DBDB]"></div>
              <p className="text-lg font-semibold">920</p>
              <p className="text-sm text-[#1E1E1E]">Delivered</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white rounded-lg shadow-3xl mt-14 h-[30rem]">
        <p
          className={` font-medium text-3xl p-4 pb-4 border-b-[1px] pl-8 ${
            tab === "insyt" ? "text-[#2E64C9]" : "text-[#F24E1E]"
          }`}
        >
          {tab === "insyt" ? "Insyt Forms" : "Push Messages"}
        </p>
        <div className="px-4">
          <div className="grid grid-cols-5 gap-10 py-4">
            <p className="pl-5 text-lg font-medium text-left">Date Created</p>
            <p className="text-lg font-medium text-center">Campaign Name</p>
            <p className="text-lg font-medium text-center">Status</p>
            <p className="text-lg font-medium text-center">Responses</p>
            <p className="text-lg font-medium text-center">Action</p>
          </div>
          <div className="grid grid-cols-5 gap-10 py-4 bg-[#EDF3FF]">
            <p className="pl-5 text-lg text-left ">07/05/2023</p>
            <p className="text-lg text-center">Esoko Outreach</p>
            <p className="text-lg font-medium text-[#0D7940] text-center">
              Active
            </p>
            <p className="text-lg text-center">50</p>
            <div className="flex flex-row items-center justify-center ">
              <LuMoreVertical className="text-2xl" />
            </div>
          </div>
          <div className="grid grid-cols-5 gap-10 py-4 ">
            <p className="pl-5 text-lg text-left ">07/05/2023</p>
            <p className="text-lg text-center">Esoko Outreach</p>
            <p className="text-lg font-medium text-[#0D7940] text-center">
              Active
            </p>
            <p className="text-lg text-center">50</p>
            <div className="flex flex-row items-center justify-center ">
              <LuMoreVertical className="text-2xl" />
            </div>
          </div>
          <div className="grid grid-cols-5 gap-10 py-4 bg-[#EDF3FF]">
            <p className="pl-5 text-lg text-left ">07/05/2023</p>
            <p className="text-lg text-center">Esoko Outreach</p>
            <p className="text-lg font-medium text-[#FF0000] text-center">
              InActive
            </p>
            <p className="text-lg text-center">50</p>
            <div className="flex flex-row items-center justify-center ">
              <LuMoreVertical className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
