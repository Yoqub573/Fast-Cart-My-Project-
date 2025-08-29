import React, { useState } from 'react'
import {
	useAddBrandMutation,
	useDeleteBrandMutation,
	useEditBrandMutation,
	useGetBrandsQuery,
} from '../../../../features/reducers/userApi'
import TextField from '@mui/material/TextField'

const Brand = () => {
	let { data, refetch } = useGetBrandsQuery()
	let [deleteBrand] = useDeleteBrandMutation()
	let [addBrand] = useAddBrandMutation()
	let [editBrand] = useEditBrandMutation()
	let [name, setName] = useState('')
	let [editname, setEditName] = useState('')
	let [edit, setEdit] = useState(false)
	let [idx, setIdx] = useState('')
	return (
		<div className='flex flex-col md:flex-row items-start gap-[40px]'>
			<div className='flex flex-col w-[100%] md:w-[42.1%]'>
				<div className='border-b-2 border-b-[#E6E9F4] flex justify-between py-[16px]'>
					<p className='text-[#5A607F] text-[16px] font-[400]'>Brands</p>
					<p className='text-[#5A607F] text-[16px] font-[400] w-[100px]'>
						Action
					</p>
				</div>
				{data?.data?.map(e => {
					return (
						<div
							key={e.id}
							className='w-[100%] flex py-[16px] hover:bg-gray-50 border-b border-b-[#E6E9F4] justify-between items-center'
						>
							<p className='text-[#131523] text-[16px] font-[500]'>
								{e.brandName}
							</p>
							<div className='flex w-[20%] gap-[16px]'>
								<svg
									onClick={() => {
										setIdx(e)
										setEdit(!edit)
										setEditName(e.brandName)
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
										deleteBrand(e.id)
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
			<div className={`${edit ? "hidden" : "flex"} w-[100%] md:w-[53.79%] p-[28px] border border-[#E5E5E5] rounded-[4px] flex-col gap-[24px]`}>
				<p className='text-[#131523] text-[20px] font-[700]'>Add new brand</p>
				<TextField
					value={name}
					onChange={e => setName(e.target.value)}
					name='bramdName'
					id='outlined-basic'
					label='Brand name'
					style={{ width: '100%' }}
					variant='outlined'
				/>
				<button
					onClick={() => {
						addBrand(name)
						refetch()
					}}
					className='bg-blue-600 ml-auto px-[16px] py-[10px] rounded-[4px] w-[120px] text-white text-[14px] font-[500]'
				>
					Create
				</button>
			</div>
			<div className={`${!edit ? "hidden" : "flex"} w-[100%] md:w-[53.79%] p-[28px] border border-[#E5E5E5] rounded-[4px] flex-col gap-[24px]`}> 
				<p className='text-[#131523] text-[20px] font-[700]'>Edit brand</p>
				<TextField
					value={editname}
					onChange={e => setEditName(e.target.value)}
					id='outlined-basic'
					label='Edit Brand name'
					style={{ width: '100%' }}
					variant='outlined'
				/>
				<button
					onClick={() => {
						editBrand({name:editname,id:idx.id})
						refetch()
						setEdit(false)
					}}
					className='bg-blue-600 ml-auto px-[16px] py-[10px] rounded-[4px] w-[120px] text-white text-[14px] font-[500]'
				>
					Create
				</button>
			</div>
		</div>
	)
}

export default Brand
