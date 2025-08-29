import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import StyledInput from '../../../../widgets/StyledInput'
import {
	useAddColorMutation,
	useAddProductMutation,
	useGetBrandQuery,
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
	let navigator = useNavigate()
	let { data: data4, refetch: refetch4 } = useGetColorQuery()
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
	let [color, setColor] = useState('')
	let [color2, setColor2] = useState('')
	const Submit = async e => {
		e.preventDefault()
		const target = e.target
		const formData = new FormData()

		formData.append('ProductName', target.productName.value)
		formData.append('Code', target.code.value)
		formData.append('Description', target.description.value)
		formData.append('SubCategoryId', target.subcategoty.value)
		formData.append('BrandId', target.brand.value)
		formData.append('Price', target.price.value)
		formData.append('ColorId', color2)
		formData.append('Discount', target.discount.value)
		formData.append('Quantity', target.quantity.value)
		formData.append('Weight', target.width.value)
		formData.append('Size', target.size.value)
		formData.append('images', target.images.files[0])

		Number(target.discount.value) > 0
			? formData.append('hasDiscount', true)
			: formData.append('hasDiscount', false)

		addProduct(formData)
		navigator('/products')
		refetch5()
	}

	return (
		<form onSubmit={Submit} className='flex flex-col gap-[24px]'>
			<div
				className={`${
					addCol ? 'flex' : 'hidden'
				} bg-white shadow-2xl p-[28px] z-[2784678907634809765467897547368790] w-[80%] md:w-[524px] rounded-[4px] flex-col gap-[24px] fixed top-[30%] left-[10%] md:left-[33%]`}
			>
				<div className='flex items-center justify-between'>
					<p className='text-[#131523] text-[20px] font-[700]'>New color</p>
					<svg
						onClick={() => setAddCol(false)}
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
					>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M16.694 7.30602C17.102 7.71405 17.102 8.37559 16.694 8.78361L13.4783 11.9993L16.694 15.2164C17.102 15.6244 17.102 16.286 16.694 16.694C16.286 17.102 15.6244 17.102 15.2164 16.694L12.0007 13.4769L8.78361 16.694C8.37559 17.102 7.71405 17.102 7.30602 16.694C6.89799 16.286 6.89799 15.6244 7.30602 15.2164L10.5231 11.9993L7.30602 8.78361C6.89799 8.37559 6.89799 7.71405 7.30602 7.30602C7.71405 6.89799 8.37559 6.89799 8.78361 7.30602L12.0007 10.5217L15.2164 7.30602C15.6244 6.89799 16.286 6.89799 16.694 7.30602Z'
							fill='#7E84A3'
						/>
					</svg>
				</div>
				<div className='flex flex-col md:flex-row gap-[12px]'>
					{addCol && (
						<TextField
							name='colorea'
							onChange={e => setColor(e.target.value)}
							value={color}
							type='text'
							required
							style={{ width: '79%' }}
							label='Color name'
						></TextField>
					)}
					<TextField type='color' required style={{ width: '29%' }}></TextField>
				</div>
				<div className='flex items-center ml-auto gap-[12px]'>
					<Button
						size='large'
						className='w-[120px]'
						onClick={() => setAddCol(false)}
						type='default'
					>
						Cancel
					</Button>
					<Button
						onClick={() => (setAddCol(!false), addColor(color), refetch4())}
						size='large'
						className='w-[120px]'
						type='primary'
					>
						Create
					</Button>
				</div>
			</div>
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
						Products / Add new
					</p>
				</div>
				<div className='flex gap-[12px]'>
					<button className='h-[40px] w-[120px] flex  hover:border-blue-500 items-center border justify-center text-center rounded-[4px] px-[16px] py-[19px] text-[#2563EB]  gap-[4px]'>
						Cancel
					</button>
					<button
						type='submit'
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
								name='productName'
								required
								id='outlined-basic'
								label='Product name'
								style={{ width: '70%' }}
								variant='outlined'
							/>
							<TextField
								name='code'
								required
								id='outlined-basic'
								label='Code'
								style={{ width: '30%' }}
								variant='outlined'
							/>
						</div>
						<StyledInput
							name='description'
							required
							placeholder='Search products...'
						/>
						<div className='flex gap-[16px]'>
							<TextField
								name='category'
								style={{ width: '32%' }}
								select
								label='Categories'
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
							<TextField
								name='brand'
								required
								style={{ width: '32%' }}
								select
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
								style={{ width: '32%' }}
								select
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
									name='price'
									required
									type='number'
									id='outlined-basic'
									label='Product price'
									style={{ width: '32%' }}
									variant='outlined'
								/>
								<TextField
									name='discount'
									type='number'
									id='outlined-basic'
									label='Discount'
									style={{ width: '32%' }}
									variant='outlined'
								/>
								<TextField
									name='quantity'
									required
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
					<div className='flex flex-col gap-[10px] w-full'>
						<p className='text-[#131523] font-[700] tetx-[16px]'>Images</p>
						<label
							htmlFor='file-upload'
							className='flex flex-col items-center justify-center w-full max-w-md h-38 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer transition'
						>
							<div className='flex flex-col items-center justify-center pt-5 pb-6'>
								<svg
									className='my-[10px]'
									xmlns='http://www.w3.org/2000/svg'
									width='50'
									height='51'
									viewBox='0 0 40 41'
									fill='none'
								>
									<rect
										y='0.110107'
										width='40'
										height='40'
										rx='20'
										fill='#E5E7EB'
									/>
									<g clipPath='url(#clip0_612_9194)'>
										<path
											d='M23.4102 17.6087L19.9736 14.1721L16.537 17.6087'
											fill='white'
											fillOpacity='0.01'
										/>
										<path
											d='M26.1611 22.42V23.2448C26.1611 24.3996 26.1611 24.9769 25.9363 25.4181C25.7387 25.806 25.4232 26.1215 25.0353 26.3191C24.5941 26.5439 24.0168 26.5439 22.8619 26.5439H17.0884C15.9336 26.5439 15.3563 26.5439 14.9151 26.3191C14.5272 26.1215 14.2117 25.806 14.0141 25.4181C13.7893 24.9769 13.7893 24.3996 13.7893 23.2448V22.42M23.4118 17.6087L19.9752 14.1721M19.9752 14.1721L16.5386 17.6087M19.9752 14.1721V22.42'
											stroke='black'
											strokeWidth='1.99943'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</g>
									<defs>
										<clipPath id='clip0_612_9194'>
											<rect
												width='16.4957'
												height='16.4957'
												fill='white'
												transform='translate(11.7264 12.1101)'
											/>
										</clipPath>
									</defs>
								</svg>
								<p className='mb-1 text-sm font-bold text-[#111927]'>
									<span className='font-bold text-[#111927] underline'>
										Click to upload
									</span>{' '}
									or drag and drop
								</p>
								<p className='text-xs text-gray-400'>
									(SVG, JPG, PNG, or GIF max 900×400)
								</p>
							</div>
							<input
								name='images'
								id='file-upload'
								type='file'
								className='absolute w-0 h-0 opacity-0'
							/>
						</label>
					</div>
				</div>
			</div>
		</form>
	)
}

export default AddProduct
