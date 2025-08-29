import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import logog from '../../../../shared/Group 1116606595 (3).svg'
import { useGetProductQuery } from '../../../../features/reducers/userApi'

const layout = () => {
	let pos = useLocation()
	let navigate = useNavigate()
	let {data} = useGetProductQuery()
	useEffect(() => {
		if (!localStorage.getItem('access_token')) {
			navigate('/log-in')
		}
	}, [navigate])
	
	let [bars,setBars] = useState(false)
	return (
		<div>
			<header className='w-[100%] z-[4000] sticky top-0 bg-[#1C2536] items-center py-[8px] px-[28px] flex justify-between'>
        <svg onClick={()=>setBars(!bars)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 md:hidden text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
        </svg>
				<div className='flex items-center md:gap-[100px]'>
					<img src={logog} alt='' />
					<div className='hidden md:flex items-center gap-[8px]'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M10.5 3C14.6421 3 18 6.35786 18 10.5C18 12.2101 17.4276 13.7866 16.464 15.0483L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3466 20.0676 18.7794 20.0953 18.3871 19.7903L18.2929 19.7071L15.0483 16.464C13.7866 17.4276 12.2101 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3ZM10.5 5C7.46243 5 5 7.46243 5 10.5C5 13.5376 7.46243 16 10.5 16C11.8511 16 13.0885 15.5128 14.0459 14.7045C14.091 14.5536 14.1738 14.412 14.2929 14.2929C14.412 14.1738 14.5536 14.091 14.7041 14.0446C15.5128 13.0885 16 11.8511 16 10.5C16 7.46243 13.5376 5 10.5 5Z'
								fill='#F9F9F9'
							/>
						</svg>
						<input
							className='placeholder:text-white text-white text-[14px] font-[400] outline-none'
							type='text'
							placeholder='Search...'
						/>
					</div>
				</div>
				<div className='gap-[20px] flex items-center'>
					<div className='flex flex-col-reverse'>
						<svg	xmlns='http://www.w3.org/2000/svg'	width='24'	height='24'	viewBox='0 0 24 24'	fill='none'>
							<path	fillRule='evenodd'	clipRule='evenodd'	d='M13 3C15.2816 3.46373 17 5.58146 17 8V12C18.1046 12 19 12.8954 19 14V19H14C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19H5V14C5 12.8954 5.89543 12 7 12V8C7 5.58111 8.71785 3.46334 11 3H13ZM12 5C10.4023 5 9.09634 6.24892 9.00509 7.82373L9 8V12C9 13.1046 8.10457 14 7 14V17H17V14C15.8954 14 15 13.1046 15 12V8C15 6.34315 13.6569 5 12 5Z'	fill='#F9F9F9'/>
						</svg>
						<div className='flex size-4 justify-center items-center rounded-full bg-[#1E5EFF]  text-[12px] font-[700] text-white absolute mb-[10px] ml-[10px]'>
							{data ? data?.data?.products?.length : "0"}
						</div>
					</div>
					<div className='hidden md:flex items-center gap-[14px]'>
						<div className='flex items-center size-9 rounded-full justify-center bg-[#1fa2d2] font-[700] text-white text-[18px]'>
							Y
						</div>
						<svg onClick={() => {
							localStorage.removeItem('access_token')
							navigate('/log-in')
							}}	xmlns='http://www.w3.org/2000/svg'	width='24'	height='24'	viewBox='0 0 24 24'	fill='none'>
							<path	fillRule='evenodd'	clipRule='evenodd'	d='M6.29289 9.29289C5.93241 9.65338 5.90468 10.2206 6.2097 10.6129L6.29289 10.7071L11.2929 15.7071C11.6534 16.0676 12.2206 16.0953 12.6129 15.7903L12.7071 15.7071L17.7071 10.7071C18.0976 10.3166 18.0976 9.68342 17.7071 9.29289C17.3466 8.93241 16.7794 8.90468 16.3871 9.2097L16.2929 9.29289L12 13.585L7.70711 9.29289C7.34662 8.93241 6.77939 8.90468 6.3871 9.2097L6.29289 9.29289Z'	fill='#F9F9F9'/>
						</svg>
					</div>
				</div>
			</header>
			<div className='flex'>
				<div className={`flex w-[50%] ${bars ? "right-[50%]" : "right-[100%]"} md:right-auto duration-800 md:w-[15%] bg-[#1C2536] px-[16px] z-[20000] fixed md:sticky top-[56px] md:top-[64px] md:z-[3000] py-[36px] h-[93vh] md:h-[91.7vh]`}>
					<div className='flex flex-col w-[100%] gap-[8px]'>
						<Link onClick={() => setBars(false)} to={'/'}>
						{pos.pathname == '/' && (
							<div className='flex items-center gap-[16px] bg-white rounded-[4px] py-[10px] px-[16px]'>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.3287 3.51558C13.3873 3.56764 13.4428 3.6231 13.4948 3.68167L19.4948 10.4317C19.8202 10.7978 20 11.2706 20 11.7604V19C20 20.1046 19.1046 21 18 21H14.002C14.0013 21 14.0007 21 14 21H10C9.99934 21 9.99868 21 9.99803 21H6C4.89543 21 4 20.1046 4 19V11.7604C4 11.2706 4.17976 10.7978 4.50518 10.4317L10.5052 3.68167C11.239 2.8561 12.5032 2.78174 13.3287 3.51558ZM11 19H13V15H11V19ZM15 19V14C15 13.4477 14.5523 13 14 13H10C9.44772 13 9 13.4477 9 14V19H6V11.7604L12 5.0104L18 11.7604V19H15Z" fill="#5A607F"/>
              </svg>
							<p className='text-[#5A607F] leading-[20px] font-[400] text-[14px]'>
								Dashboard
							</p>
						   </div>
						) || (
							<div className='flex items-center gap-[16px] rounded-[4px] py-[10px] px-[16px]'>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.3287 3.51558C13.3873 3.56764 13.4428 3.6231 13.4948 3.68167L19.4948 10.4317C19.8202 10.7978 20 11.2706 20 11.7604V19C20 20.1046 19.1046 21 18 21H14.002C14.0013 21 14.0007 21 14 21H10C9.99934 21 9.99868 21 9.99803 21H6C4.89543 21 4 20.1046 4 19V11.7604C4 11.2706 4.17976 10.7978 4.50518 10.4317L10.5052 3.68167C11.239 2.8561 12.5032 2.78174 13.3287 3.51558ZM11 19H13V15H11V19ZM15 19V14C15 13.4477 14.5523 13 14 13H10C9.44772 13 9 13.4477 9 14V19H6V11.7604L12 5.0104L18 11.7604V19H15Z" fill="white"/>
              </svg>
							<p className='text-[#FFFFFF] leading-[20px] font-[400] text-[14px]'>
								Dashboard
							</p>
							</div>
						)}
						</Link>					
						<Link onClick={() => setBars(false)} to={'/orders'}>
						{pos.pathname == '/orders' && (
							<div className='flex items-center gap-[16px] bg-white rounded-[4px] py-[10px] px-[16px]'>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M6 15V17H4V15H6ZM19 15C19.5523 15 20 15.4477 20 16C20 16.5523 19.5523 17 19 17H9C8.44772 17 8 16.5523 8 16C8 15.4477 8.44772 15 9 15H19ZM6 11V13H4V11H6ZM19 11C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H9C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11H19ZM6 7V9H4V7H6ZM19 7C19.5523 7 20 7.44772 20 8C20 8.55228 19.5523 9 19 9H9C8.44772 9 8 8.55228 8 8C8 7.44772 8.44772 7 9 7H19Z" fill="#5A607F"/>
              </svg> 
							<div className='w-[78%] items-center flex justify-between'>
							  <p className='text-[#5A607F] leading-[20px] font-[400] text-[14px]'>
							  	Orders
							  </p>
								<p className='px-[6px] leading-[14px] h-[14px] text-white font-[700] text-[12px] bg-[#131523] rounded-full'>
									{data ? data?.data?.products?.length : "0"}
								</p>
							</div>
						  </div>
						) || (
							<div className='flex items-center gap-[16px] rounded-[4px] py-[10px] px-[16px]'>
							  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6 15V17H4V15H6ZM19 15C19.5523 15 20 15.4477 20 16C20 16.5523 19.5523 17 19 17H9C8.44772 17 8 16.5523 8 16C8 15.4477 8.44772 15 9 15H19ZM6 11V13H4V11H6ZM19 11C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H9C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11H19ZM6 7V9H4V7H6ZM19 7C19.5523 7 20 7.44772 20 8C20 8.55228 19.5523 9 19 9H9C8.44772 9 8 8.55228 8 8C8 7.44772 8.44772 7 9 7H19Z" fill="white"/>
                </svg>
								<div className='w-[78%] items-center flex justify-between'>
							    <p className='text-[#FFFFFF] leading-[20px] font-[400] text-[14px]'>
							    	Orders
							    </p>
									<p className='px-[6px] leading-[14px] h-[14px] text-white font-[700] text-[12px] bg-[#131523] rounded-full'>
										{data ? data?.data?.products?.length : "0"}
									</p>
								</div>
							</div>
						)}
						</Link>
						<Link onClick={() => setBars(false)} to={'/products'}>
						{(pos.pathname == '/products' || pos.pathname == '/add-new-product') && (
							<div className='flex items-center gap-[16px] bg-white rounded-[4px] py-[10px] px-[16px]'>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="none" className="text-[#5A607F]">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.5459 0.570287C9.96414 0.152049 10.5498 -0.0533963 11.1377 0.0119215L19 0L18.9881 7.86232C19.0534 8.45018 18.848 9.03586 18.4297 9.4541L9.45408 18.4297C8.69372 19.1901 7.46093 19.1901 6.70056 18.4297L0.570274 12.2994C-0.190091 11.5391 -0.190091 10.3063 0.570274 9.54592L9.5459 0.570287ZM11 2L1.94704 10.9227L8.07732 17.053L17 8V2H11ZM12 5L14 7L12 9L10 7L12 5Z" fill="currentColor"/>
              </svg>
							<p className='text-[#5A607F] leading-[20px] font-[400] text-[14px]'>
								Products
							</p>
						</div>
						) || (
							<div className='flex items-center gap-[16px] rounded-[4px] py-[10px] px-[16px]'>
							  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.5459 3.57029C11.9641 3.15205 12.5498 2.9466 13.1377 3.01192L21 3L20.9881 10.8623C21.0534 11.4502 20.848 12.0359 20.4297 12.4541L11.4541 21.4297C10.6937 22.1901 9.46093 22.1901 8.70056 21.4297L2.57027 15.2994C1.80991 14.5391 1.80991 13.3063 2.57027 12.5459L11.5459 3.57029ZM13 5L3.94704 13.9227L10.0773 20.053L19 11V5H13ZM14 8L16 10L14 12L12 10L14 8Z" fill="white"/>
                </svg>
							    <p className='text-[#FFFFFF] leading-[20px] font-[400] text-[14px]'>
							    	Products
							    </p>
							</div>
						)}
						</Link>
						<Link onClick={() => setBars(false)} to={'/others/'}>
						{pos.pathname == '/others' && (
							<div className='flex items-center gap-[16px] bg-white rounded-[4px] py-[10px] px-[16px]'>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.5 2L12 5H20C21.1046 5 22 5.89543 22 7V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V4C2 2.89543 2.89543 2 4 2H9.5ZM11.0632 7L8.563 4H4V19H20V7H11.0632Z" fill="#7E84A3"/>
              </svg>
							<p className='text-[#5A607F] leading-[20px] font-[400] text-[14px]'>
								Other
							</p>
						</div>
						) || (
							<div className='flex items-center gap-[16px] rounded-[4px] py-[10px] px-[16px]'>
							  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.5 2L12 5H20C21.1046 5 22 5.89543 22 7V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V4C2 2.89543 2.89543 2 4 2H9.5ZM11.0632 7L8.563 4H4V19H20V7H11.0632Z" fill="white"/>
                </svg>
							    <p className='text-[#FFFFFF] leading-[20px] font-[400] text-[14px]'>
							    	Other
							    </p>
							</div>
						)}
						</Link>
					</div>
				</div>
				<main className='w-full p-[28px]'>
					<Outlet />
				</main>
			</div>
		</div>
	)
}

export default layout
