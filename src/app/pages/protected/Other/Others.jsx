import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Others = () => {
	let pas = useLocation()
	return (
		<div className='flex flex-col gap-[40px] '>
			<div className='flex  gap-[8px] items-center'>
				{(pas.pathname == '/others/' && (
					<Link
						className='active px-[16px] py-[8px] rounded-[4px] text-[#262626] font-[500]'
						to={'/others/'}
					>
						Categories
					</Link>
				)) || (
					<Link
						className='px-[16px] py-[8px] rounded-[4px] text-[#262626] font-[500]'
						to={'/others/'}
					>
						Categories
					</Link>
				)}
				{(pas.pathname == '/others/brands' && (
					<Link
						className='active px-[16px] py-[8px] rounded-[4px] text-[#262626] font-[500]'
						to={'brands'}
					>
						Brands
					</Link>
				)) || (
					<Link
						className='px-[16px] py-[8px] rounded-[4px] text-[#262626] font-[500]'
						to={'brands'}
					>
						Brands
					</Link>
				)}
				{(pas.pathname == '/others/sub-categoty' && (
					<Link
						className='active px-[16px] py-[8px] rounded-[4px] text-[#262626] font-[500]'
						to={'sub-categoty'}
					>
						SubCategoty
					</Link>
				)) || (
					<Link
						className='px-[16px] py-[8px] rounded-[4px] text-[#262626] font-[500]'
						to={'sub-categoty'}
					>
						SubCategoty
					</Link>
				)}
			</div>
			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default Others
