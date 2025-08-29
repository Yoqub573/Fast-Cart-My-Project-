import React, { useState } from 'react'
import addIco from '../../../../shared/Masc icon (1).svg'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import CustomCheckbox from '../../../../widgets/CustomCheckbox'
import Pagination from '@mui/material/Pagination'
import { styled } from '@mui/material/styles'
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
  }
}));

const Orders = () => {
	const currencies = [
		{
			value: 'Newest',
			label: 'Newest',
		},
	]
	const [checked, setChecked] = useState(false)
	return (
		<div className='flex flex-col gap-[40px] w-full'>
			<div className='flex items-center w-full justify-between'>
				<p className='text-[#111927] text-[24px] font-[700] '>Orders</p>
				<button className='bg-blue-600 h-[40px] hover:bg-blue-500 items-center text-center rounded-[4px] px-[16px] py-[19px] text-white flex gap-[4px]'>
					<img src={addIco} alt='' />
					Add order
				</button>
			</div>
			<div className='flex flex-col md:flex-row gap-[20px] justify-between'>
				<div className='flex gap-[12px]'>
					<TextField
						id='outlined-basic'
						label='Search...'
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
						defaultValue='Newest'
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
						<CustomCheckbox
						w={true}
							checked={checked}
							onChange={() => setChecked(!checked)}
							label='Order'
						/>
						<p className='text-[#5A607F] w-[20%] md:w-[20%] text-[10px] md:text-[14px] font-[400]'>
							Date
						</p>
						<p className='text-[#5A607F] md:inline hidden w-[20%] md:w-[20%] text-[10px] md:text-[14px] font-[400]'>
							Customer
						</p>
						<p className='text-[#5A607F] md:inline hidden w-[20%] md:w-[20%] text-[10px] md:text-[14px] font-[400]'>
							Payment status
						</p>
						<p className='text-[#5A607F] w-[20%] md:w-[20%] text-[10px] md:text-[14px] font-[400]'>
							Order Status
						</p>
						<p className='text-[#5A607F] w-[20%] md:w-[20%] text-[10px] md:text-[14px] font-[400]'>
							Total
						</p>
					</div>
				</div>
				<div className='bg-[#FAFAFA] px-[3px] md:px-[10px] flex justify-between items-center w-[100%] border-b py-[14px] border-b-[#E6E9F4]'>
					<CustomCheckbox
					w={true}
						checked={true}
						onChange={() => setChecked(!checked)}
						label='#12512B'
					/>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						May 5, 4:20 PM
					</p>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						Tom Anderson
					</p>
					<div className='md:inline hidden w-[16.2%]'>
						<p className='text-[#06A561] w-[45px] rounded-[4px] px-[6px] py-[4px] flex items-center justify-center bg-[#C4F8E2] text-[10px] md:text-[14px] font-[400]'>
							Paid
						</p>
					</div>
					<div className='md:inline hidden w-[16.2%]'>
						<p className='text-white w-[58px] rounded-[4px] px-[6px] py-[4px] flex items-center justify-center bg-[#F99600] text-[10px] md:text-[14px] font-[400]'>
							Ready
						</p>
					</div>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						$49.90
					</p>
				</div>
				<div className='bg-[#FAFAFA] px-[3px] md:px-[10px] flex justify-between items-center w-[100%] border-b py-[14px] border-b-[#E6E9F4]'>
					<CustomCheckbox
					w={true}
						checked={true}
						onChange={() => setChecked(!checked)}
						label='#12523C'
					/>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						May 5, 4:15 PM
					</p>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						Jayden Walker
					</p>
					<div className='md:inline hidden w-[16.2%]'>
						<p className='text-[#06A561] w-[45px] rounded-[4px] px-[6px] py-[4px] flex items-center justify-center bg-[#C4F8E2] text-[10px] md:text-[14px] font-[400]'>
							Paid
						</p>
					</div>
					<div className='md:inline hidden w-[16.2%]'>
						<p className='text-white w-[58px] rounded-[4px] px-[6px] py-[4px] flex items-center justify-center bg-[#F99600] text-[10px] md:text-[14px] font-[400]'>
							Ready
						</p>
					</div>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						$34.36
					</p>
				</div>
				<div className='bg-[#FAFAFA] px-[3px] md:px-[10px] flex justify-between items-center w-[100%] border-b py-[14px] border-b-[#E6E9F4]'>
					<CustomCheckbox
					w={true}
						checked={true}
						onChange={() => setChecked(!checked)}
						label='#51232A'
					/>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						May 5, 4:15 PM
					</p>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						Inez Kim
					</p>
					<div className='md:inline hidden w-[16.2%]'>
						<p className='text-[#06A561] w-[45px] rounded-[4px] px-[6px] py-[4px] flex items-center justify-center bg-[#C4F8E2] text-[10px] md:text-[14px] font-[400]'>
							Paid
						</p>
					</div>
					<div className='md:inline hidden w-[16.2%]'>
						<p className='text-white w-[58px] rounded-[4px] px-[6px] py-[4px] flex items-center justify-center bg-[#F99600] text-[10px] md:text-[14px] font-[400]'>
							Ready
						</p>
					</div>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						$5.51
					</p>
				</div>
				<div className='bg-[#FAFAFA] px-[3px] md:px-[10px] flex justify-between items-center w-[100%] border-b py-[14px] border-b-[#E6E9F4]'>
					<CustomCheckbox
					w={true}
						checked={true}
						onChange={() => setChecked(!checked)}
						label='#23534D'
					/>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						May 5, 4:12 PM
					</p>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						Francisco Henry
					</p>
					<div className='md:inline hidden w-[16.2%]'>
						<p className='text-[#06A561] w-[45px] rounded-[4px] px-[6px] py-[4px] flex items-center justify-center bg-[#C4F8E2] text-[10px] md:text-[14px] font-[400]'>
							Paid
						</p>
					</div>
					<div className='md:inline hidden w-[16.2%]'>
						<p className='text-white w-[71px] rounded-[4px] px-[6px] py-[4px] flex items-center justify-center bg-[#5A607F] text-[10px] md:text-[14px] font-[400]'>
							Shipped
						</p>
					</div>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						$29.74
					</p>
				</div>
				<div className='bg-[#FAFAFA] px-[3px] md:px-[10px] flex justify-between items-center w-[100%] border-b py-[14px] border-b-[#E6E9F4]'>
					<CustomCheckbox
					w={true}
						checked={false}
						onChange={() => setChecked(!checked)}
						label='#51323C'
					/>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						May 5, 4:12 PM
					</p>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						Violet Phillips
					</p>
					<div className='md:inline hidden w-[16.2%]'>
						<p className='text-[#06A561] w-[45px] rounded-[4px] px-[6px] py-[4px] flex items-center justify-center bg-[#C4F8E2] text-[10px] md:text-[14px] font-[400]'>
							Paid
						</p>
					</div>
					<div className='md:inline hidden w-[16.2%]'>
						<p className='text-white w-[71px] rounded-[4px] px-[6px] py-[4px] flex items-center justify-center bg-[#5A607F] text-[10px] md:text-[14px] font-[400]'>
							Shipped
						</p>
					</div>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						$23.06
					</p>
				</div>
				<div className='bg-[#FAFAFA] px-[3px] md:px-[10px] flex justify-between items-center w-[100%] border-b py-[14px] border-b-[#E6E9F4]'>
					<CustomCheckbox
					w={true}
						checked={false}
						onChange={() => setChecked(!checked)}
						label='#35622A'
					/>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						May 5, 4:12 PM
					</p>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						Rosetta Becker
					</p>
					<div className='md:inline hidden w-[16.2%]'>
						<p className='text-[#06A561] w-[45px] rounded-[4px] px-[6px] py-[4px] flex items-center justify-center bg-[#C4F8E2] text-[10px] md:text-[14px] font-[400]'>
							Paid
						</p>
					</div>
					<div className='md:inline hidden w-[16.2%]'>
						<p className='text-white w-[71px] rounded-[4px] px-[6px] py-[4px] flex items-center justify-center bg-[#5A607F] text-[10px] md:text-[14px] font-[400]'>
							Shipped
						</p>
					</div>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						$87.44
					</p>
				</div>
				<div className='bg-[#FAFAFA] px-[3px] md:px-[10px] flex justify-between items-center w-[100%] border-b py-[14px] border-b-[#E6E9F4]'>
					<CustomCheckbox
					w={true}
						checked={false}
						onChange={() => setChecked(!checked)}
						label='#34232D'
					/>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						May 5, 4:10 PM
					</p>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						Dean Love
					</p>
					<div className='md:inline hidden w-[16.2%]'>
						<p className='text-[#06A561] w-[45px] rounded-[4px] px-[6px] py-[4px] flex items-center justify-center bg-[#C4F8E2] text-[10px] md:text-[14px] font-[400]'>
							Paid
						</p>
					</div>
					<div className='md:inline hidden w-[16.2%]'>
						<p className='text-white w-[58px] rounded-[4px] px-[6px] py-[4px] flex items-center justify-center bg-[#F99600] text-[10px] md:text-[14px] font-[400]'>
							Ready
						</p>
					</div>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						$44.55
					</p>
				</div>
				<div className='bg-[#FAFAFA] px-[3px] md:px-[10px] flex justify-between items-center w-[100%] border-b py-[14px] border-b-[#E6E9F4]'>
					<CustomCheckbox
					w={true}
						checked={false}
						onChange={() => setChecked(!checked)}
						label='#56212D'
					/>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						May 5, 4:08 PM
					</p>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						Nettie Tyler
					</p>
					<div className='md:inline hidden w-[16.2%]'>
						<p className='text-[#06A561] w-[45px] rounded-[4px] px-[6px] py-[4px] flex items-center justify-center bg-[#C4F8E2] text-[10px] md:text-[14px] font-[400]'>
							Paid
						</p>
					</div>
					<div className='md:inline hidden w-[16.2%]'>
						<p className='text-white w-[58px] rounded-[4px] px-[6px] py-[4px] flex items-center justify-center bg-[#F99600] text-[10px] md:text-[14px] font-[400]'>
							Ready
						</p>
					</div>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						$36.79
					</p>
				</div>
				<div className='bg-[#FAFAFA] px-[3px] md:px-[10px] flex justify-between items-center w-[100%] border-b py-[14px] border-b-[#E6E9F4]'>
					<CustomCheckbox
					w={true}
						checked={false}
						onChange={() => setChecked(!checked)}
						label='#23534D'
					/>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						May 5, 4:04 PM
					</p>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						Miguel Harris
					</p>
					<div className='md:inline hidden w-[16.2%]'>
						<p className='text-[#5A607F] rounded-[4px] py-[2px] w-[50p6 md:w-[70px] flex items-center justify-center bg-[#E6E9F4] text-[10px] md:text-[14px] font-[400]'>
							Pending
						</p>
					</div>
					<div className='md:inline hidden w-[16.2%]'>
						<p className='text-white w-[58px] rounded-[4px] px-[6px] py-[4px] flex items-center justify-center bg-[#F99600] text-[10px] md:text-[14px] font-[400]'>
							Ready
						</p>
					</div>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						$50.54
					</p>
				</div>
				<div className='bg-[#FAFAFA] px-[3px] md:px-[10px] flex justify-between items-center w-[100%] border-b py-[14px] border-b-[#E6E9F4]'>
					<CustomCheckbox
					w={true}
						checked={false}
						onChange={() => setChecked(!checked)}
						label='#12523C'
					/>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						May 5, 4:04 PM
					</p>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						Angel Conner
					</p>
					<div className='md:inline hidden w-[16.2%]'>
						<p className='text-[#5A607F] rounded-[4px] py-[2px] w-[50p6 md:w-[70px] flex items-center justify-center bg-[#E6E9F4] text-[10px] md:text-[14px] font-[400]'>
							Pending
						</p>
					</div>
					<div className='md:inline hidden w-[16.2%]'>
						<p className='text-white w-[58px] rounded-[4px] px-[6px] py-[4px] flex items-center justify-center bg-[#F99600] text-[10px] md:text-[14px] font-[400]'>
							Ready
						</p>
					</div>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						$63.47
					</p>
				</div>
				<div className='bg-[#FAFAFA] px-[3px] md:px-[10px] flex justify-between items-center w-[100%] border-b py-[14px] border-b-[#E6E9F4]'>
					<CustomCheckbox
					w={true}
						checked={false}
						onChange={() => setChecked(!checked)}
						label='#51232A'
					/>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						May 5, 4:03 PM
					</p>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						Rosalie Singleton
					</p>
					<div className='md:inline hidden w-[16.2%]'>
						<p className='text-[#5A607F] rounded-[4px] py-[2px] w-[50p6 md:w-[70px] flex items-center justify-center bg-[#E6E9F4] text-[10px] md:text-[14px] font-[400]'>
							Pending
						</p>
					</div>
					<div className='md:inline hidden w-[16.2%]'>
						<p className='text-white w-[78px] rounded-[4px] px-[6px] py-[4px] flex items-center justify-center bg-[#1E5EFF] text-[10px] md:text-[14px] font-[400]'>
							Received
						</p>
					</div>
					<p className='text-[#131523] w-[19%] md:w-[16.2%] text-[10px] md:text-[14px] font-[400]'>
						$91.63
					</p>
				</div>
			</div>
			<div className='flex flex-col md:flex-row md:items-center justify-between'>
				<CustomPagination
					count={25}
					shape='rounded'
					siblingCount={1}
					boundaryCount={2}
				/>
				<p className='text-[#5A607F] text-[16px]'>
					274 Results
				</p>
			</div>
		</div>
	)
}

export default Orders
