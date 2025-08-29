import React from 'react'

const Button = ({px,py,value}) => {
	return (
		<button className={`bg-[#2563EB] hover:bg-blue-500 rounded-[4px] text-[16px] font-[500] leading-24px px-[20px] py-[14px] h-[52px] text-white`}>
			{value}
		</button>
	)
}

export default Button