import React, { useState } from "react";
import CardItem from "./CardItem";

const Cards = () => {
  const handleBoxSelect = (boxId) => {
    // Handle box selection logic here
    console.log(`Selected Box ID: ${boxId}`);
  };
  const [sliderValue, setSliderValue] = useState(0);
  const [MonthlycardPrice, setMonthlycardPrice] = useState(0);
  const [YearlycardPrice, setYearlycardPrice] = useState(0);
  const [maxValue, setMaxValue] = useState(100000); // Initial maximum value of the slider
  const [minValue, setMinValue] = useState(5000);
  const handleSliderChange = (event) => {
    const value = event.target.value;
    setSliderValue(value);
    setMonthlycardPrice(value * 0.005)
    setYearlycardPrice(value * 0.008)
  };

  const updateThreshold = (minValue, newValue, stepValue) => {
    setMinValue(minValue);
    setMaxValue(newValue);
    setSliderValue(minValue); // Reset the slider value to the minimum value
    setMonthlycardPrice(minValue * 10);
    setYearlycardPrice(minValue * 5);
  };

  // values
  const formatSliderValue = (value) => {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + "M";
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1) + "k";
    } else {
      return value.toString();
    }
  };

  return (
    <>
      <div className="selectors flex justify-center flex-wrap mt-[32px] items-center ">
        <button
          className={`mx-1 my-1 text-center  p-3 rounded-full ${
            maxValue === 100000
              ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white "
              : "bg-transparent text-[#ABADC6] border  border-[#424867]"
          }`}
          onClick={() => updateThreshold(5000, 100000, 5000)}
        >
          upto 100k
        </button>
        <button
          className={`mx-1 my-1 text-center   p-3 rounded-full ${
            maxValue === 250000
              ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white "
              : "bg-transparent text-[#ABADC6] border  border-[#424867]"
          }`}
          onClick={() => updateThreshold(100000, 250000, 10000)}
        >
          upto 250K
        </button>
        <button
          className={`mx-1 my-1 text-center   p-3 rounded-full ${
            maxValue === 500000
              ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white "
              : "bg-transparent text-[#ABADC6] border  border-[#424867]"
          }`}
          onClick={() => updateThreshold(250000, 500000, 10000)}
        >
          upto 500K
        </button>
        <button
          className={`mx-1 my-1 text-center   p-3 rounded-full ${
            maxValue === 1000000
              ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white "
              : "bg-transparent text-[#ABADC6] border  border-[#424867]"
          }`}
          onClick={() => updateThreshold(500000, 1000000, 25000)}
        >
          upto 1 Million
        </button>
        <button
          className={`mx-1 my-1 text-center    p-3 rounded-full ${
            maxValue === 2500000
              ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white "
              : "bg-transparent text-[#ABADC6] border  border-[#424867]"
          }`}
          onClick={() => updateThreshold(1000000, 2500000, 50000)}
        >
          upto 2.5 Millions
        </button>
      </div>
      <div className=" flex justify-center my-5">
        <input
          id="default-range"
          type="range"
          value={sliderValue}
          min={minValue}
          max={maxValue}
          className="w-1/2 h-1 bg-indigo-500 rounded-lg appearance-none cursor-pointer"
          onChange={handleSliderChange}
        />
        <span
          className=" transform -translate-x-1 -translate-y-[200%] bg-gray-100 rounded-full flex text-xs text-gray-950 px-1.5 py-0.5"
          style={{
            left: `${
              ((sliderValue - minValue) / (maxValue - minValue)) * 100
            }%`,
          }}
        >
          {formatSliderValue(sliderValue)}
        </span>
      </div>
      <div className="flex flex-wrap justify-center mx-2">
        <CardItem
          title="Monthly"
          Cost={0.005}
          Pay={MonthlycardPrice.toFixed(1)}
          image="https://example.com/image1.png"
          percentage={10}
          package="Package A"
          selectedBox={1}
          Popular="Popular"
          isSelected={true}
          onSelect={handleBoxSelect}
          showChecks={true}
        />
        <CardItem
          title="Yearly"
          Cost={0.008}
          Pay={YearlycardPrice.toFixed(1)}
          image="https://example.com/image2.png"
          percentage={15}
          package="Package B"
          selectedBox={2}
          Popular=""
          isSelected={false}
          onSelect={handleBoxSelect}
          showChecks={true}
        />
      </div>
    </>
  );
};

export default Cards;
