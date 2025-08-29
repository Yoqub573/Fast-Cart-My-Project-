import React, { useState } from 'react';

const CustomCheckbox = ({ checked, onChange, label,w }) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input type="checkbox" checked={checked} onChange={onChange} className="hidden"/>
      <span className={`size-[16px] flex items-center justify-center   border-[2px] border-[#D7DBEC] rounded-[4px]   ${checked ? 'bg-blue-600 border-blue-600' : 'bg-white'} `} style={{ strokeWidth: '4px' }}>
        {checked && (
          <svg xmlns="http://www.w3.org/2000/svg" className="md:size-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </span>
        {label &&
        <div className={`${w ? "w-[20%] md:w-[160px]" : ""}`}>
          {label.at(0) == '#' && 
            <span className="ml-2 text-[#131523] w-[160px] text-[10px] md:text-[14px] font-[500]">{label}</span>
            || 
            <span className="ml-2 text-[#5A607F] w-[160px] text-[10px] md:text-[14px] font-[400]">{label}</span>
          }
        </div>
        }
    </label>
  );
};

export default CustomCheckbox;