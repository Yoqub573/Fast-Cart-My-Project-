import React, { useState } from 'react'
import addIco from '../../../../shared/Masc icon (1).svg'
import img from '../../../../shared/image.png'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import CustomCheckbox from '../../../../widgets/CustomCheckbox'
import Pagination from '@mui/material/Pagination'
import { styled } from '@mui/material/styles'
import {
	useDeleteProdMutation,
	useGetCategoryQuery,
	useGetProductQuery,
} from '../../../../features/reducers/userApi'
const CustomPagination = styled(Pagination)(({ theme }) => ({
	'& .MuiPaginationItem-root': {
		borderRadius: '4px',
		minWidth: '36px',
		height: '36px',
		fontSize: '16px',
		color: '#7E84A3',
	},
	'& .Mui-selected': {
		backgroundColor: '#ECF2FF',
		color: '#1E5EFF',
		fontWeight: 600,
		borderColor: '#D7DBEC',
	},
	'& .MuiPaginationItem-icon': {
		color: '#7E84A3',
	},
}))
import SignalWifiStatusbarConnectedNoInternet4Icon from '@mui/icons-material/SignalWifiStatusbarConnectedNoInternet4'
import { Button, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
	let { data: data2 } = useGetCategoryQuery()

	const currencies = [
		{
			value: 'All',
			label: 'All',
		},
	]
	data2?.data.forEach(e => {
		currencies.push({
			value: e.categoryName,
			label: e.categoryName,
		})
	})

	let { data, isLoading, isError, refetch } = useGetProductQuery()
	const [checked, setChecked] = useState(false)
	const [deleteProd] = useDeleteProdMutation()
	const [checked1, setChecked1] = useState(false)
	const [Search, setSearch] = useState('')
	const [selSearch, setselSearch] = useState('All')
	return (
		<div className='flex flex-col gap-[40px] w-full'>
			<div className='flex items-center w-full justify-between'>
				<p className='text-[#111927] text-[24px] font-[700] '>Products</p>
				<Link to={'/add-new-product'}>
					<button className='bg-blue-600 h-[40px] hover:bg-blue-500 items-center text-center rounded-[4px] px-[16px] py-[19px] text-white flex gap-[4px]'>
						<img src={addIco} alt='' />
						Add order
					</button>
				</Link>
			</div>
			<div className='flex flex-col md:flex-row gap-[20px] justify-between'>
				<div className='flex gap-[12px]'>
					<TextField
						id='outlined-basic'
						label='Search...'
						value={Search}
						onChange={e => setSearch(e.target.value)}
						variant='outlined'
						InputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									<SearchIcon />
								</InputAdornment>
							),
						}}
						style={{ width: '250px', whiteSpace: '10px' }}
					/>
					<TextField
						style={{ width: '150px' }}
						id='outlined-select-currency'
						select
						label='Filter'
						defaultValue='All'
						onChange={e => setselSearch(e.target.value)}
						SelectProps={{
							IconComponent: KeyboardArrowDownIcon,
						}}
					>
						{currencies.map(option => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>
				</div>
				<div className='flex gap-[12px]'>
					<div className='flex size-[40px] items-center justify-center  rounded-[4px] border border-[#E2E8F0]'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M15.8333 15.8333C16.2936 15.8333 16.6667 16.2064 16.6667 16.6667C16.6667 17.1269 16.2936 17.5 15.8333 17.5H4.16668C3.70644 17.5 3.33334 17.1269 3.33334 16.6667C3.33334 16.2064 3.70644 15.8333 4.16668 15.8333H15.8333ZM15.0025 2.98743L16.1792 4.16419C16.8292 4.8141 16.8292 5.86781 16.1792 6.51772L9.3148 13.3822C9.1875 13.5095 9.02233 13.5921 8.8441 13.6175L5.00001 14.1667L5.54917 10.3226C5.57463 10.1443 5.65721 9.97918 5.78452 9.85187L12.649 2.98743C13.2989 2.33752 14.3526 2.33752 15.0025 2.98743ZM13.8257 4.16419L7.1576 10.8323L6.96167 12.205L8.33436 12.0091L15.0025 5.34095L13.8257 4.16419Z'
								fill='#2563EB'
							/>
						</svg>
					</div>
					<div className='flex size-[40px] items-center justify-center  rounded-[4px] border border-[#E2E8F0]'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
						>
							<g clipPath='url(#clip0_16822_81)'>
								<path
									d='M13.3334 7.5V15.8333H6.66669V7.5H13.3334ZM12.0834 2.5H7.91669L7.08335 3.33333H4.16669V5H15.8334V3.33333H12.9167L12.0834 2.5ZM15 5.83333H5.00002V15.8333C5.00002 16.75 5.75002 17.5 6.66669 17.5H13.3334C14.25 17.5 15 16.75 15 15.8333V5.83333Z'
									fill='#2563EB'
								/>
							</g>
							<defs>
								<clipPath id='clip0_16822_81'>
									<rect width='20' height='20' fill='white' />
								</clipPath>
							</defs>
						</svg>
					</div>
				</div>
			</div>
			<div className='flex flex-col'>
				<div className='flex px-[10px] justify-between items-center'>
					<div className='flex py-[14px] border-b-2 border-b-[#E6E9F4] items-center w-[100%] gap-[12px]'>
						<div className='w-[20%]'>
							<CustomCheckbox
								w={true}
								checked={checked}
								onChange={() => {
									setChecked(!checked), setChecked1(!checked1)
								}}
								label='Product'
							/>
						</div>
						<p className='text-[#5A607F] w-[19%] text-[10px] md:text-[14px] font-[400]'>
							Inventory
						</p>
						<p className='text-[#5A607F] w-[20%] text-[10px] md:text-[14px] font-[400]'>
							Category
						</p>
						<p className='text-[#5A607F] w-[20%] text-[10px] md:text-[14px] font-[400]'>
							Price
						</p>
						<p className='text-[#5A607F] w-[20%] text-[10px] md:text-[14px] font-[400]'>
							Action
						</p>
					</div>
				</div>
				{(isLoading && (
					<div className='my-[70px] flex flex-col gap-[14px] justify-center items-center'>
						<Spin
							indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
						/>
					</div>
				)) || (
					<div className='flex w-[100%] flex-col'>
						{(data === null && (
							<div className='m-auto flex items-center flex-col my-[30px] gap-[10px]'>
								<img src={img} className='w-[200px]' alt='' />
								<div className='flex items-center flex-col gap-[4px]'>
									<p className='text-[#131523] text-[20px] font-[700]'>
										No Prodcucts
									</p>
									<p className='text-center text-[#5A607F] text-[16px] font-[400] w-[500px]'>
										All the upcoming orders from your store will be visible in
										this page. You can add orders by yourself if you sell
										offline.
									</p>
									<br />
									<Link to={'/add-new-product'}>
										<button className='bg-blue-600 h-[40px] hover:bg-blue-500 items-center text-center rounded-[4px] px-[16px] py-[19px] text-white flex gap-[4px]'>
											<img src={addIco} alt='' />
											Add product
										</button>
									</Link>
								</div>
							</div>
						)) || (
							<div className='w-[100%]'>
								{(selSearch != 'All' && (
									<div className='w-[100%]'>
										{data?.data?.products
											?.filter(e =>
												e.productName
													.toLowerCase()
													.includes(Search.toLowerCase())
											)
											.filter(e => e.categoryName == selSearch)
											.map(e => {
												return (
													<div
														key={e.id}
														className='bg-[#FAFAFA] px-[3px] md:px-[10px] flex justify-between items-center w-[100%] border-b py-[14px] border-b-[#E6E9F4]'
													>
														<div className='flex w-[11%] items-center gap-[14px]'>
															<CustomCheckbox
																checked={checked1}
																onChange={() => setChecked1(!checked1)}
																w={false}
															/>
															<img
																className='w-[48px] h-[48px] rounded-[4px] bg-[#AFC5CB] p-[10px]'
																src={`https://store-api.softclub.tj/images/${e.image}`}
																alt=''
															/>
															<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
																{e.productName.length > 20 ? e.productName.sli : ""}
															</p>
														</div>
														{(e.query && (
															<div className='md:inline hidden w-[10%]'>
																<p className='text-[#06A561] w-[70px] rounded-[4px] px-[6px] py-[4px] flex items-center justify-center bg-[#C4F8E2] text-[10px] md:text-[14px] font-[400]'>
																	In stock
																</p>
															</div>
														)) || (
															<div className='md:inline hidden w-[10%]'>
																<p className='text-[#a50606] w-[80px] rounded-[4px] px-[6px] py-[4px] flex items-center justify-center bg-[#f8c4c4] text-[10px] md:text-[14px] font-[400]'>
																	Not stock
																</p>
															</div>
														)}
														<p className='text-[#131523] w-[10%] text-[10px] md:text-[14px] font-[400]'>
															{e.categoryName}
														</p>
														<p className='text-[#131523] w-[11%] text-[10px] md:text-[14px] font-[400]'>
															{e.price}
														</p>
														<div className='flex w-[20%] gap-[16px]'>
															<Link to={`/edit-product/${e.id}`}>
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
																		d='M19 19C19.5523 19 20 19.4477 20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20C4 19.4477 4.44772 19 5 19H19ZM18.003 3.58492L19.4151 4.99703C20.195 5.77692 20.195 7.04137 19.4151 7.82126L11.1778 16.0586C11.025 16.2114 10.8268 16.3105 10.6129 16.341L6 17L6.65899 12.3871C6.68954 12.1732 6.78864 11.975 6.94141 11.8222L15.1787 3.58492C15.9586 2.80503 17.2231 2.80503 18.003 3.58492ZM16.5909 4.99703L8.58911 12.9988L8.35399 14.646L10.0012 14.4109L18.003 6.40914L16.5909 4.99703Z'
																		fill='#1E5EFF'
																	/>
																</svg>
															</Link>
															<svg
																onClick={() => {
																	deleteProd(e.id)
																	refetch()
																}}
																xmlns='http://www.w3.org/2000/svg'
																width='24'
																height='24'
																viewBox='0 0 24 24'
																fill='none'
															>
																<path
																	fillRule='evenodd'
																	clipRule='evenodd'
																	d='M18 8V19C18 20.1046 17.1046 21 16 21H8C6.89543 21 6 20.1046 6 19V8H18ZM16 10H8V19H16V10ZM12 3C12.5523 3 13 3.44772 13 4V5H18C18.5523 5 19 5.44772 19 6C19 6.55228 18.5523 7 18 7H6C5.44772 7 5 6.55228 5 6C5 5.44772 5.44772 5 6 5H11V4C11 3.44772 11.4477 3 12 3Z'
																	fill='#F04438'
																/>
															</svg>
														</div>
													</div>
												)
											})}
									</div>
								)) || (
									<div className='w-[100%]'>
										{data?.data?.products
											?.filter(e =>
												e.productName
													.toLowerCase()
													.includes(Search.toLowerCase())
											)
											.map(e => {
												return (
													<div
														key={e.id}
														className='bg-[#FAFAFA] px-[3px] md:px-[10px] flex justify-between items-center w-[100%] border-b py-[14px] border-b-[#E6E9F4]'
													>
														<div className='flex w-[11%] items-center gap-[14px]'>
															<CustomCheckbox
																checked={checked1}
																onChange={() => setChecked1(!checked1)}
																w={false}
															/>
															<img
																className='w-[48px] h-[48px] rounded-[4px] bg-[#AFC5CB] p-[10px]'
																src={`https://store-api.softclub.tj/images/${e.image}`}
																alt=''
															/>
															<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
																{e.productName.length > 10 ? `${e.productName.slice(0,7)}...` : e.productName}
															</p>
														</div>
														{(e.query && (
															<div className='md:inline hidden w-[10%]'>
																<p className='text-[#06A561] w-[70px] rounded-[4px] px-[6px] py-[4px] flex items-center justify-center bg-[#C4F8E2] text-[10px] md:text-[14px] font-[400]'>
																	In stock
																</p>
															</div>
														)) || (
															<div className='md:inline hidden w-[12%]'>
																<p className='text-[#a50606] w-[80px] rounded-[4px] px-[6px] py-[4px] flex items-center justify-center bg-[#f8c4c4] text-[10px] md:text-[14px] font-[400]'>
																	Not stock
																</p>
															</div>
														)}
														<p className='text-[#131523] w-[10%] text-[10px] md:text-[14px] font-[400]'>
															{e.categoryName}
														</p>
														<p className='text-[#131523] w-[11%] text-[10px] md:text-[14px] font-[400]'>
															{e.price}
														</p>
														<div className='flex w-[20%] gap-[16px]'>
															<Link to={`/edit-product/${e.id}`}>
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
																		d='M19 19C19.5523 19 20 19.4477 20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20C4 19.4477 4.44772 19 5 19H19ZM18.003 3.58492L19.4151 4.99703C20.195 5.77692 20.195 7.04137 19.4151 7.82126L11.1778 16.0586C11.025 16.2114 10.8268 16.3105 10.6129 16.341L6 17L6.65899 12.3871C6.68954 12.1732 6.78864 11.975 6.94141 11.8222L15.1787 3.58492C15.9586 2.80503 17.2231 2.80503 18.003 3.58492ZM16.5909 4.99703L8.58911 12.9988L8.35399 14.646L10.0012 14.4109L18.003 6.40914L16.5909 4.99703Z'
																		fill='#1E5EFF'
																	/>
																</svg>
															</Link>
															<svg
																onClick={() => {
																	deleteProd(e.id)
																	refetch()
																}}
																xmlns='http://www.w3.org/2000/svg'
																width='24'
																height='24'
																viewBox='0 0 24 24'
																fill='none'
															>
																<path
																	fillRule='evenodd'
																	clipRule='evenodd'
																	d='M18 8V19C18 20.1046 17.1046 21 16 21H8C6.89543 21 6 20.1046 6 19V8H18ZM16 10H8V19H16V10ZM12 3C12.5523 3 13 3.44772 13 4V5H18C18.5523 5 19 5.44772 19 6C19 6.55228 18.5523 7 18 7H6C5.44772 7 5 6.55228 5 6C5 5.44772 5.44772 5 6 5H11V4C11 3.44772 11.4477 3 12 3Z'
																	fill='#F04438'
																/>
															</svg>
														</div>
													</div>
												)
											})}
									</div>
								)}
							</div>
						)}
					</div>
				)}
				{isError && (
					<div className='w-[100%] justify-center text-center flex flex-col py-[70px] gap-[12px]'>
						<div className='w-[58px] flex items-center m-auto justify-center h-[58px] rounded-full bg-[#ffecec]'>
							<div className='flex items-baseline justify-center'>
								<SignalWifiStatusbarConnectedNoInternet4Icon
									style={{ color: '#ff1e1e', width: '34px', height: '34px' }}
								/>
							</div>
						</div>
						<p className='text-[25px] font-[700] text-[#ff1e1e]'>
							Failed to get products
						</p>
						<p className='flex items-center m-auto text-[#00000099] gap-[10px] text-center text-[16px] font-[400]'>
							Please check your network!
						</p>
						<Button	type='primary'	className='w-[100px] m-auto'	onClick={() => {refetch()}}	danger>
							Update
						</Button>
					</div>
				)}
			</div>
			<div className='flex flex-col md:flex-row md:items-center justify-between'>
				<CustomPagination
					count={25}
					shape='rounded'
					style={{ width: '500px' }}
					siblingCount={1}
					boundaryCount={2}
				/>
				<p className='text-[#5A607F] text-[16px]'>274 Results</p>
			</div>
		</div>
	)
}

export default Products
