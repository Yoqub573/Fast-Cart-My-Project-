import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import React, { useState } from 'react'
import img from '../../../../shared/image.png'
import addIco from '../../../../shared/Masc icon (1).svg'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import CustomCheckbox from '../../../../widgets/CustomCheckbox'
import Pagination from '@mui/material/Pagination'
import {
	useAddCategoryMutation,
	useDeleteCategoryMutation,
	useEditCategoryMutation,
	useGetCategoryQuery,
} from '../../../../features/reducers/userApi'
import { styled } from '@mui/material/styles'
import { Button } from 'antd'
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
const Categories = () => {
	let [Search, setSearch] = useState('')
	let { data, refetch } = useGetCategoryQuery()
	const [deleteCategory] = useDeleteCategoryMutation()
	let [modal, setModal] = useState(false)
	let [modal2, setModal2] = useState(false)
	let [idx, setIdx] = useState('')
	let [addCategory] = useAddCategoryMutation()
	let [editCategory] = useEditCategoryMutation()
	function submit(e) {
		e.preventDefault()
		let target = e.target
		let formdata = new FormData()

		formdata.append('categoryImage', target['images'].files[0])
		formdata.append('categoryName', target['name'].value)
		formdata.append('Id', idx)

		addCategory(formdata)
		refetch()
		setModal(false)
	}
	const submit2 = async e => {
		e.preventDefault()
		const target = e.target
		const formData = new FormData()

		formData.append('categoryName', target['name'].value)

		formData.append('categoryImage', target['image'].files[0])
		if (idx?.id) {
			formData.append('Id', idx.id)
		}

		try {
			await editCategory(formData).unwrap()
			refetch()
			setModal2(false)
		} catch (err) {
			console.error(err)
		}
	}
	return (
		<div className='flex flex-col w-full gap-[24px]'>
			<form
				onSubmit={submit}
				className={`${
					modal ? 'flex' : 'hidden'
				} bg-white shadow-2xl p-[28px] z-[2784678907634809765467897547368790] w-[80%] md:w-[524px] rounded-[4px] flex-col gap-[24px] fixed top-[25%] left-[10%] md:left-[34%]`}
			>
				<button className='flex items-center justify-between'>
					<p className='text-[#131523] text-[20px] font-[700]'>Add category</p>
					<svg
						onClick={() => setModal(false)}
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
				</button>
				<div className='flex flex-col w-full items-center gap-[24px]'>
					<TextField
						name='name'
						required
						id='outlined-basic'
						label='Category name'
						style={{ width: '97%' }}
						variant='outlined'
					/>
					<label
						htmlFor='file-upload'
						className='flex flex-col items-center justify-center w-[100%] max-w-md h-38 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer transition'
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
							className='hidden'
						/>
					</label>
				</div>
				<div className='flex items-center ml-auto gap-[12px]'>
					<Button
						size='large'
						className='w-[120px]'
						onClick={() => setModal(false)}
						type='default'
					>
						Cancel
					</Button>
					<Button
						onClick={() => setModal(!false)}
						size='large'
						className='w-[120px]'
						type='primary'
						htmlType='submit'
					>
						Create
					</Button>
				</div>
			</form>
			<form
				onSubmit={submit2}
				className={`${
					modal2 ? 'flex' : 'hidden'
				} bg-white shadow-2xl p-[28px] z-[2784678907634809765467897547368790] w-[80%] md:w-[524px] rounded-[4px] flex-col gap-[24px] fixed top-[25%] left-[10%] md:left-[34%]`}
			>
				<button className='flex items-center justify-between'>
					<p className='text-[#131523] text-[20px] font-[700]'>Edit category</p>
					<svg
						onClick={() => setModal2(false)}
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
				</button>
				<div className='flex flex-col w-full items-center gap-[24px]'>
					<TextField
						name='name'
						required
						defaultValue={idx.categoryName}
						id='outlined-basic'
						label='Category name'
						style={{ width: '97%' }}
						variant='outlined'
					/>
					<TextField
						name='image'
						required
						type='file'
						id='outlined-basic'
						style={{ width: '97%' }}
						variant='outlined'
					/>
				</div>
				<div className='flex items-center ml-auto gap-[12px]'>
					<Button
						size='large'
						className='w-[120px]'
						onClick={() => setModal2(false)}
						type='default'
					>
						Cancel
					</Button>
					<Button
						onClick={() => setModal2(false)}
						size='large'
						className='w-[120px]'
						type='primary'
						htmlType='submit'
					>
						Save
					</Button>
				</div>
			</form>
			<button
				onClick={() => setModal(!modal)}
				className='bg-blue-600 ml-auto h-[40px] hover:bg-blue-500 items-center text-center rounded-[4px] px-[16px] py-[19px] text-white flex gap-[4px]'
			>
				<img src={addIco} alt='' />
				Add order
			</button>
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
				</div>
			</div>
			<div className='flex items-center gap-[16px] w-full flex-wrap'>
				{data?.data
					?.filter(e =>
						e.categoryName.toLowerCase().includes(Search.toLowerCase())
					)
					.map(e => {
						return (
							<div
								className='w-[47%] md:w-[18.9%] rounded-[4px] px-[20px] flex flex-col py-[24px] gap-[16px] border border-[#0000004D]'
								key={e.id}
							>
								<div className='flex items-start justify-between'>
									<div className='size-[56px] flex items-center justify-center'>
										<img
											className='w-[100%]'
											src={`https://store-api.softclub.tj/images/${e.categoryImage}`}
											alt=''
										/>
									</div>
									<div className='flex flex-col gap-[16px]'>
										<svg
											onClick={() => {
												setModal2(!modal2)
												setIdx(e)
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
												d='M19 19C19.5523 19 20 19.4477 20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20C4 19.4477 4.44772 19 5 19H19ZM18.003 3.58492L19.4151 4.99703C20.195 5.77692 20.195 7.04137 19.4151 7.82126L11.1778 16.0586C11.025 16.2114 10.8268 16.3105 10.6129 16.341L6 17L6.65899 12.3871C6.68954 12.1732 6.78864 11.975 6.94141 11.8222L15.1787 3.58492C15.9586 2.80503 17.2231 2.80503 18.003 3.58492ZM16.5909 4.99703L8.58911 12.9988L8.35399 14.646L10.0012 14.4109L18.003 6.40914L16.5909 4.99703Z'
												fill='#1E5EFF'
											/>
										</svg>
										<svg
											onClick={() => {
												deleteCategory(e.id)
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
								<p className='text-[16px] Poppins font-[400] '>
									{e.categoryName}
								</p>
							</div>
						)
					})}
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

export default Categories
