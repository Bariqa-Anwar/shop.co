"use client";

// components/DualRangeSlider.tsx
import React, { useState } from "react";

interface SliderProps {
  min: number;
  max: number;
  step?: number;
}

const Slider: React.FC<SliderProps> = ({
  min,
  max,
  step = 1,
}) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - step);
    setMinValue(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + step);
    setMaxValue(value);
  };

  return (
    <div className="relative w-full">
      {/* Hidden Range Inputs */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={minValue}
        onChange={handleMinChange}
        className="absolute w-full h-1 appearance-none bg-transparent pointer-events-auto"
        style={{ zIndex: 1 }}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={maxValue}
        onChange={handleMaxChange}
        className="absolute w-full h-1 appearance-none bg-transparent pointer-events-auto"
        style={{ zIndex: 2 }}
      />
      {/* Visible Range Track */}
      <div className="relative w-full h-1 bg-gray-300">
        <div
          className="absolute h-1 bg-black"
          style={{
            left: `${((minValue - min) / (max - min)) * 100}%`,
            right: `${100 - ((maxValue - min) / (max - min)) * 100}%`,
          }}
        ></div>
      </div>
      {/* Custom Thumbs */}
      <div
        className="absolute top-0 w-5 h-5 bg-black rounded-full transform -translate-y-1/2"
        style={{
          left: `${((minValue - min) / (max - min)) * 100}%`,
        }}
      ></div>
      <div
        className="absolute top-0 w-5 h-5 bg-black rounded-full transform -translate-y-1/2"
        style={{
          left: `${((maxValue - min) / (max - min)) * 100}%`,
        }}
      ></div>
      {/* Labels */}
      <div className="flex justify-between mt-2 text-sm">
        <span>${minValue}</span>
        <span>${maxValue}</span>
      </div>
    </div>
  );
};

export default Slider;
