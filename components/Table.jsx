import React from "react";

const Table = ({ title }) => {
  return (
    <>
      <p className="py-3 border-b-[1px] mb-6 font-semibold text-lg">{title}</p>
      <div className="grid grid-cols-6 mb-2 gap-7">
        <p className="text-lg font-medium text-center ">Transaction ID</p>
        <p className="text-lg font-medium text-center "> Client Name</p>
        <p className="text-lg font-medium text-center ">Date</p>
        <p className="text-lg font-medium text-center ">Status</p>
        <p className="text-lg font-medium text-center ">Amount</p>
        <p className="text-lg font-medium text-center ">Service</p>
      </div>
      <div className="overflow-y-auto h-[34rem]">
        <div className="grid grid-cols-6 py-6 gap-7 bg-[#EDF3FF]">
          <p className="text-lg text-center">TID 245</p>
          <p className="text-lg text-center">Jay Inc</p>
          <p className="text-lg text-center">07/05/2023</p>
          <p className="text-lg text-center text-[#FF0000]">Failed</p>
          <p className="text-lg text-center">GHC 5000</p>
          <p className="text-lg text-center">Push</p>
        </div>
        <div className="grid grid-cols-6 py-6 gap-7 ">
          <p className="text-lg text-center">TID 245</p>
          <p className="text-lg text-center">Jay Inc</p>
          <p className="text-lg text-center">07/05/2023</p>
          <p className="text-lg text-center text-[#FF0000]">Failed</p>
          <p className="text-lg text-center">GHC 5000</p>
          <p className="text-lg text-center">Push</p>
        </div>
        <div className="grid grid-cols-6 py-6 gap-7 bg-[#EDF3FF]">
          <p className="text-lg text-center">TID 245</p>
          <p className="text-lg text-center">Jay Inc</p>
          <p className="text-lg text-center">07/05/2023</p>
          <p className="text-lg text-center text-[#0FA958]">Completed</p>
          <p className="text-lg text-center">GHC 5000</p>
          <p className="text-lg text-center">Push</p>
        </div>
        <div className="grid grid-cols-6 py-6 gap-7 ">
          <p className="text-lg text-center">TID 245</p>
          <p className="text-lg text-center">Jay Inc</p>
          <p className="text-lg text-center">07/05/2023</p>
          <p className="text-lg text-center text-[#FF0000]">Failed</p>
          <p className="text-lg text-center">GHC 5000</p>
          <p className="text-lg text-center">Push</p>
        </div>
        <div className="grid grid-cols-6 py-6 gap-7 bg-[#EDF3FF]">
          <p className="text-lg text-center">TID 245</p>
          <p className="text-lg text-center">Jay Inc</p>
          <p className="text-lg text-center">07/05/2023</p>
          <p className="text-lg text-center text-[#0FA958]">Completed</p>
          <p className="text-lg text-center">GHC 5000</p>
          <p className="text-lg text-center">Push</p>
        </div>
        <div className="grid grid-cols-6 py-6 gap-7 ">
          <p className="text-lg text-center">TID 245</p>
          <p className="text-lg text-center">Jay Inc</p>
          <p className="text-lg text-center">07/05/2023</p>
          <p className="text-lg text-center text-[#0FA958]">Completed</p>
          <p className="text-lg text-center">GHC 5000</p>
          <p className="text-lg text-center">Push</p>
        </div>
      </div>
    </>
  );
};

export default Table;
