import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import StyledInput from '../../../../widgets/StyledInput'
import {
	useAddColorMutation,
	useAddProductMutation,
	useEditProductMutation,
	useGetBrandQuery,
	useGetByIdQuery,
	useGetCategoryQuery,
	useGetColorQuery,
	useGetProductQuery,
	useGetSubCategoryQuery,
} from '../../../../features/reducers/userApi'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import MenuItem from '@mui/material/MenuItem'
import { Button, Select, Switch } from 'antd'
import { styled } from '@mui/material/styles'

const CustomSwitch = styled(Switch)(({ theme }) => ({
	'& .MuiSwitch-track': {
		backgroundColor: '#D9E4FF',
	},
	'& .MuiSwitch-thumb': {
		color: '#ffffff',
	},
}))

const AddProduct = () => {
	let { id } = useParams()
	let navigator = useNavigate()
	let { data: data4, refetch: refetch4 } = useGetColorQuery()
	let { data: user2, refetch: refetch7 } = useGetByIdQuery(id)
	let user = user2 ? user2?.data : {}
	console.log(user)
	let [addColor] = useAddColorMutation()
	let [addProduct] = useAddProductMutation()
	let { data: data2 } = useGetCategoryQuery()
	let { data: data5, refetch: refetch5 } = useGetProductQuery()
	const currencies = []
	data2?.data?.forEach(e => {
		currencies.push({
			value: e.id,
			label: e.categoryName,
		})
	})
	let { data: data6, refetch: refetch6 } = useGetSubCategoryQuery()
	const currencies3 = []
	data6?.data?.forEach(e => {
		currencies3.push({
			value: e.id,
			label: e.subCategoryName,
		})
	})
	let { data: data3 } = useGetBrandQuery()
	const currencies2 = []
	data3?.data.forEach(e => {
		currencies2.push({
			value: e.id,
			label: e.brandName,
		})
	})
	let [addCol, setAddCol] = useState(false)
	let [color2, setColor2] = useState(user?.colorName)
	let [prodName,setProductName] = useState(user?.productName)
	let [brand,setBrand] = useState(currencies2?.filter(e => e.label == user.brand)) 
	let [price,setPrice] = useState(user ? user?.price : "") 
	let [discount,setDiscount] = useState(user ? user?.hasDiscount ? user?.discountPrice : "0" : "") 
	let [quantity,setquantity] = useState(user ? user?.quantity : "") 
	let [editProduct] = useEditProductMutation()
	return (
		<div  className='flex flex-col gap-[24px]'>
			<div className='flex flex-col md:flex-row gap-[10px] md:items-center w-full justify-between'>
				<div className='flex items-center gap-[8px]'>
					<Link to={'/products'}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='28'
							height='28'
							viewBox='0 0 28 28'
							fill='none'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M10.9516 7.24466L10.8417 7.34171L5.0084 13.175C4.58783 13.5956 4.55548 14.2574 4.91134 14.715L5.0084 14.825L10.8417 20.6583C11.2973 21.1139 12.036 21.1139 12.4916 20.6583C12.9122 20.2377 12.9446 19.576 12.5887 19.1183L12.4916 19.0084L8.64969 15.1655L21 15.1667C21.6444 15.1667 22.1667 14.6443 22.1667 14C22.1667 13.3557 21.6444 12.8333 21 12.8333L8.65202 12.8322L12.4916 8.99162C12.9122 8.57106 12.9446 7.90929 12.5887 7.45162L12.4916 7.34171C12.0711 6.92114 11.4093 6.88879 10.9516 7.24466Z'
								fill='#7E84A3'
							/>
						</svg>
					</Link>
					<p className='text-[#111927] text-[24px] font-[700] '>
						Products / Edit Product
					</p>
				</div>
				<div className='flex gap-[12px]'>
					<button className='h-[40px] w-[120px] flex  hover:border-blue-500 items-center border justify-center text-center rounded-[4px] px-[16px] py-[19px] text-[#2563EB]  gap-[4px]'>
						Cancel
					</button>
					<button
						onClick={() => {
							editProduct({
								productName:prodName
							})
						}}
						className='bg-blue-600 h-[40px] w-[120px] flex justify-center hover:bg-blue-500 items-center text-center rounded-[4px] px-[16px] py-[19px] text-white  gap-[4px]'
					>
						Save
					</button>
				</div>
			</div>
			<div className='flex flex-col md:flex-row items-start gap-[40px]'>
				<div className='flex md:w-[60%] w-[100%] flex-col gap-[40px]'>
					<div className='flex flex-col gap-[16px]'>
						<p className='text-[16px] font-[700]'>Indivation</p>
						<div className='flex gap-[16px] w-[100%]'>
							<TextField
								value={prodName}
								onChange={(e) => setProductName(e.target.value)}
								required
								id='outlined-basic'
								style={{ width: '70%' }}
								variant='outlined'
							/>
							<TextField
								name='code'
								required
								defaultValue={user?.code}
								id='outlined-basic'
								style={{ width: '30%' }}
								variant='outlined'
							/>
						</div>
						<StyledInput
							name='description'
							defaultValue={user?.description}
							required
							placeholder='Search products...'
						/>
						<div className='flex gap-[16px]'>
							<TextField
								name='brand'
								required
								onChange={(e) => setBr}
								style={{ width: '47%' }}
								select
								value={typeof brand == 'object' ? brand[0]?.value : brand}
								label='Brands'
								SelectProps={{
									IconComponent: KeyboardArrowDownIcon,
								}}
							>
								{currencies2.map(option => (
									<MenuItem key={option.value} value={option.value}>
										{option.label}
									</MenuItem>
								))}
							</TextField>
							<TextField
								name='subcategoty'
								required
								style={{ width: '47%' }}
								select
								defaultValue={user?.subCategoryId}
								label='Sub Category'
								SelectProps={{
									IconComponent: KeyboardArrowDownIcon,
								}}
							>
								{currencies3.map(option => (
									<MenuItem key={option.value} value={option.value}>
										{option.label}
									</MenuItem>
								))}
							</TextField>
						</div>
						<div className='flex flex-col gap-[16px] pb-[20px]'>
							<p className='text-[#131523] text-[16px] font-[700]'>Price</p>
							<div className='flex items-center gap-[16px]'>
								<TextField
									required
									value={price}
									onChange={(e) => setPrice(e.target.value)}
									type='number'
									id='outlined-basic'
									label='Product price'
									style={{ width: '32%' }}
									variant='outlined'
								/>
								<TextField
									name='discount'
									type='number'
									value={discount}
									onChange={(e) => setDiscount(e.target.value)}
									id='outlined-basic'
									label='Discount'
									style={{ width: '32%' }}
									variant='outlined'
								/>
								<TextField
									required
									value={quantity}
									onChange={(e) => setquantity(e.target.value)}
									type='number'
									id='outlined-basic'
									label='Quantity'
									style={{ width: '32%' }}
									variant='outlined'
								/>
							</div>
							<div className='flex items-center gap-[12px] pt-[8px]'>
								<Switch
									size='default'
									autoFocus
									defaultChecked={true}
									className='custom-switch'
								/>
								<p className='text-[#131523] text-[16px] font-[400]'>
									Add tax for this product
								</p>
							</div>
						</div>
						<div className='flex justify-between items-center rounded-[4px] border p-[16px] border-[#E5E5E5]'>
							<div className='flex flex-col'>
								<p className='text-[#131523] text-[16px] font-[700]'>
									Different Options
								</p>
								<p className='text-[#737373] text-[16px] font-[400]'>
									This product has multiple options
								</p>
							</div>
							<Switch checked />
						</div>
						<div className='flex flex-col gap-[16px] pb-[20px]'>
							<p className='text-[#131523] text-[16px] font-[700]'>Options</p>
							<div className='flex items-center gap-[16px]'>
								<TextField
									name='width'
									type='number'
									id='outlined-basic'
									label='Width'
									style={{ width: '100%' }}
									variant='outlined'
								/>
								<TextField
									name='size'
									type='text'
									fullWidth
									label='Size'
									variant='outlined'
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col w-[100%] md:w-[37%] gap-[28px]'>
					<div className='border border-[#D9E1EC] p-[20px] rounded-[4px] flex flex-col gap-[22px]'>
						<div className='flex items-center justify-between w-full'>
							<p className='text-[#131523] text-[16px] font-[700] '>Colour:</p>
							<div
								onClick={() => setAddCol(!addCol)}
								className='flex items-center px-[8px] py-[4px] rounded-[4px] gap-[4px]'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='20'
									height='20'
									viewBox='0 0 20 20'
									fill='none'
								>
									<g clipPath='url(#clip0_17238_329)'>
										<path
											d='M7.50004 13.5001L4.00004 10.0001L2.83337 11.1667L7.50004 15.8334L17.5 5.83341L16.3334 4.66675L7.50004 13.5001Z'
											fill='#2563EB'
										/>
									</g>
									<defs>
										<clipPath id='clip0_17238_329'>
											<rect width='20' height='20' fill='white' />
										</clipPath>
									</defs>
								</svg>
								<p className='text-[#2563EB] text-[14px] font-[500]'>
									Create new
								</p>
							</div>
						</div>
						<div className='flex items-center gap-[13px] flex-wrap'>
							{data4?.data?.map(e => {
								return (
									<button
										onClick={() => setColor2(e.id)}
										style={{ backgroundColor: e.colorName }}
										className={`size-[40px] focus:border-2 border-white focus:outline-3 focus:outline-[#1E5EFF] focus:p-[10px] rounded-full`}
										key={e.id}
									></button>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddProduct
