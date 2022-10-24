import React from "react";

const SenContainer = ({ text, bg }) => {
  return (
    <div
      className={` w-auto lg:w-screen h-[400px] bg-[url(${bg})] bg-center bg-cover bg-no-repeat flex items-center justify-center`}
    >
      <h1 className="text-center text-[40px] lg:text-[35px] md:text-[25px] sm:text-[20px] xs:text-[15px]  xl:w-[982px] lg:w-[782px]  md:w-[682px] sm:w-[482px] xs:w-[382px]  leading-[1.5] font-roboto text-[#fff]">
        {text}
      </h1>
    </div>
  );
};

export default SenContainer;
