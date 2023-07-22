import React, { useState } from "react";

const CardItem = (props) => {
  const [selectedBox, setSelectedBox] = useState("");

  const handleButtonClick = () => {
    props.onSelect(props.selectedBox);

    setTimeout(() => {
      window.scrollTo({ left: 0, top: 1200, behavior: "smooth" });
    }, 150);
  };

  return (
    <div className="w-[345px] md:w-[355px] lg:w-[363px] h-[350px] hover:border-[3px] hover:border-solid hover:border-indigo-500 lg:hover:border-[3px] lg:hover:border-solid lg:hover:border-indigo-500 rounded-3xl gap-x-2 m-2  bg-gray-100 top-[486px] left-[287px] hover:border-none md:focus:mt-100 md:hover:border-none md:hover:border-solid md:hover:border-indigo-500">
      <div className="flex justify-between">
        <img
          src={props.image}
          className="mt-6 ml-6 inline text-right"
          alt=""
        ></img>
        {props.Popular !== "" && (
          <span className="w-[68px] h-[28px] mt-[28px] px-[8px] py-[4px] text-[#EA580C] font-semibold text-[14px] flex justify-center text-center  mr-[32px] bg-[#FED7AA] rounded-[6px] gap-[8px]">
            {props.Popular}
          </span>
        )}
        {props.Popular === "" && (
          <span className="w-[68px] h-[28px] mt-[28px] px-[8px] py-[4px] text-[#EA580C] font-semibold text-[14px] flex justify-center text-center  mr-[32px]  rounded-[6px] gap-[8px]"></span>
        )}
      </div>
      <h1 className="font-semibold text-gray-950 k text-[26px] mt-4 ml-6 leading-[32px]">
        {props.title}
      </h1>
      <p className="font-medium text-gray-950 k text-[14px] mt-4 ml-6 leading-[20px]">
        Cost Per Credit=$ {props.Cost}
      </p>
      <p className="font-medium text-gray-950 k text-[14px] mt-14 ml-6 leading-[20px]">
        Pay
      </p>
      <div className="flex justify-between">
        <h1 className="mt-2 ml-6 font-semibold text-[21px] text-gray-950 k text-[23px]">
          $ {props.Pay}
        </h1>
        {props.percentage > 0 && (
          <span className="mt-4 mr-[20px] hover:mr-[20px] text-[#0ACF83] font-[500] text-[14px]">
            save {props.percentage} $
          </span>
        )}
      </div>
      <div className="p-5">
        <button
          className="text-white 
             bg-indigo-500 text-white
              
         w-full h-[44px] md:h-[48] lg:h-[52] rounded-lg"
          onClick={handleButtonClick}
        >
          {props.isSelected && props.showChecks ? "Checkout ->" : "Select ->"}
        </button>
      </div>
    </div>
  );
};

export default CardItem;
