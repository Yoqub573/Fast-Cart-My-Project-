import React from 'react'

const CustomTooltip = ({ active, payload, label,coordinate }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        position: 'absolute',
        left: coordinate.x - 60,
        top: coordinate.y - 75, 
        padding: '5px',
      }} className="relative  bg-[#333752] text-white w-[122px] rounded-xl shadow-md">
        <div className='w-[100%] flex flex-col py-[10px] items-center justify-center'>

        <p className="text-sm font-semibold">{`${payload[0].value} Orders`}</p>
        <p className="text-xs">{label == ' ' ? "Jan" : label}</p>
        </div>

        {/* Хвостик снизу */}
        <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-3 h-3 bg-[#333752] rotate-45 shadow-md" />
      </div>
    );
  }

  return null;
};

export default CustomTooltip