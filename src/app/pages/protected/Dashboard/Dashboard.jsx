import React from 'react'
import img1 from '../../../../shared/iconly-glass-chart.svg fill.svg'
import img2 from '../../../../shared/iconly-glass-discount.svg.svg'
import img3 from '../../../../shared/div.MuiBox-root.svg'
import image from '../../../../shared/div.MuiBox-root (1).svg'
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts'
import CustomTooltip from '../../../../widgets/CustomTooltip'

const Dashboard = () => {
	const data = [
		{ month: 'Jan', value: 10 },
		{ month: ' ', value: 5 },
		{ month: 'Feb', value: 15 },
		{ month: 'Mar', value: 10 },
		{ month: 'Apr', value: 25 },
		{ month: 'May', value: 35 },
		{ month: 'Jun', value: 30 },
		{ month: 'Jul', value: 35 },
		{ month: 'Aug', value: 50 },
		{ month: 'Oct', value: 45 },
		{ month: 'Sep', value: 25 },
		{ month: 'Nov', value: 25 },
		{ month: '  ', value: 35 },
		{ month: 'Dec', value: 30 },
	]
	return (
		<div className='flex flex-col gap-[24px]'>
			<p className='text-[#111927] font-[700] text-[24px]'>Dashboard</p>
			<div className='flex flex-col md:flex-row gap-[16px] w-[100%]'>
				<div className='flex flex-col w-[100%] md:w-[70%] gap-[16px]'>
					<div className='flex flex-col md:flex-row gap-[12px]'>
						<div className='flex md:w-[33%] items-center justify-center px-[24px] gap-[16px] py-[16px] bg-[#FEF3F2] rounded-[4px]'>
							<img src={img1} alt='' />
							<div className='flex w-[95.66667175292969px] flex-col'>
								<p className='text-[#6C737F] text-[14px] font-[400]'>Sales</p>
								<p className='text-[#111927] text-[24px] font-[700] '>$152k</p>
							</div>
						</div>
						<div className='flex md:w-[33%] items-center justify-center px-[24px] gap-[16px] py-[16px] bg-[#FFFAEB] rounded-[4px]'>
							<img src={img2} alt='' />
							<div className='flex w-[95.66667175292969px] flex-col'>
								<p className='text-[#6C737F] text-[14px] font-[400]'>Cost</p>
								<p className='text-[#111927] text-[24px] font-[700] '>$99.7k</p>
							</div>
						</div>
						<div className='flex md:w-[33%] items-center justify-center px-[24px] gap-[16px] py-[16px] bg-[#F0FDF9] rounded-[4px]'>
							<img src={img3} alt='' />
							<div className='flex w-[95.66667175292969px] flex-col'>
								<p className='text-[#6C737F] text-[14px] font-[400]'>Profit</p>
								<p className='text-[#111927] text-[24px] font-[700] '>$32.1k</p>
							</div>
						</div>
					</div>
					<div className='w-full border border-[#00000014] rounded-[4px] px-[20px] py-[16px] h-[400px]'>
						<h2 className='text-xl mb-4 text-gray-800'>Sales Revenue</h2>
						<ResponsiveContainer width='100%' height='90%'>
							<LineChart data={data}>
								<CartesianGrid strokeDasharray='3 3' />
								<XAxis dataKey='month' />
								<YAxis ticks={[0, 10, 20, 30, 40, 50]} domain={[0, 50]} />
								<Tooltip
									content={<CustomTooltip />}
									cursor={{ strokeWidth: 0 }}
								/>
								<Line
									dataKey='value'
									stroke='#1E5EFF'
									strokeWidth={4}
									dot={false}
									activeDot={{
										r: 6,
										stroke: '#3366FF',
										strokeWidth: 4,
										fill: '#fff',
									}}
								/>
							</LineChart>
						</ResponsiveContainer>
					</div>
				</div>
				<div className='md:w-[30%] px-[16px] py-[12px] flex flex-col gap-[16px] border border-[#00000014] rounded-[4px]'>
					<div className='flex items-center text-[#111927] w-[100%] justify-between'>
						<p className='text-[16px] font-[600]'>Top selling products</p>
						<div className='flex items-center gap-[8px]'>
							<p className='text-[13px] font-[600]'>See All</p>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='18'
								height='19'
								viewBox='0 0 18 19'
								fill='none'
							>
								<path
									d='M9.00952 4.12988L14.2595 9.37988L9.00952 14.6299'
									fill='white'
									fillOpacity='0.01'
								/>
								<path
									d='M3.75952 9.37988H14.2595M14.2595 9.37988L9.00952 4.12988M14.2595 9.37988L9.00952 14.6299'
									stroke='#111927'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
					</div>
					<div className='flex flex-col gap-[18px]'>
						<div className='flex justify-between w-[100%] items-center gap-[12px]'>
							<div className='flex items-center gap-[12px]'>
								<img src={image} alt='' />
								<div className='flex flex-col gap-0.5'>
									<p className='text-[#111927] text-[16px] font-[500]'>
										Healthcare Erbology
									</p>
									<p className='text-[#6C737F] text-[16px] font-[400]'>
										in Accessories
									</p>
								</div>
							</div>
							<div className='flex flex-col gap-[2px]'>
								<p className='text-[#10B981] text-[16px] font-[500]'>13,153</p>
								<p className='text-[#6C737F] text-[16px] font-[400]'>
									in sales
								</p>
							</div>
						</div>
						<div className='flex justify-between w-[100%] items-center gap-[12px]'>
							<div className='flex items-center gap-[12px]'>
								<img src={image} alt='' />
								<div className='flex flex-col gap-0.5'>
									<p className='text-[#111927] text-[16px] font-[500]'>
										Healthcare Erbology
									</p>
									<p className='text-[#6C737F] text-[16px] font-[400]'>
										in Accessories
									</p>
								</div>
							</div>
							<div className='flex flex-col gap-[2px]'>
								<p className='text-[#10B981] text-[16px] font-[500]'>13,153</p>
								<p className='text-[#6C737F] text-[16px] font-[400]'>
									in sales
								</p>
							</div>
						</div>
						<div className='flex justify-between w-[100%] items-center gap-[12px]'>
							<div className='flex items-center gap-[12px]'>
								<img src={image} alt='' />
								<div className='flex flex-col gap-0.5'>
									<p className='text-[#111927] text-[16px] font-[500]'>
										Healthcare Erbology
									</p>
									<p className='text-[#6C737F] text-[16px] font-[400]'>
										in Accessories
									</p>
								</div>
							</div>
							<div className='flex flex-col gap-[2px]'>
								<p className='text-[#10B981] text-[16px] font-[500]'>13,153</p>
								<p className='text-[#6C737F] text-[16px] font-[400]'>
									in sales
								</p>
							</div>
						</div>
						<div className='flex justify-between w-[100%] items-center gap-[12px]'>
							<div className='flex items-center gap-[12px]'>
								<img src={image} alt='' />
								<div className='flex flex-col gap-0.5'>
									<p className='text-[#111927] text-[16px] font-[500]'>
										Healthcare Erbology
									</p>
									<p className='text-[#6C737F] text-[16px] font-[400]'>
										in Accessories
									</p>
								</div>
							</div>
							<div className='flex flex-col gap-[2px]'>
								<p className='text-[#10B981] text-[16px] font-[500]'>13,153</p>
								<p className='text-[#6C737F] text-[16px] font-[400]'>
									in sales
								</p>
							</div>
						</div>
						<div className='flex justify-between w-[100%] items-center gap-[12px]'>
							<div className='flex items-center gap-[12px]'>
								<img src={image} alt='' />
								<div className='flex flex-col gap-0.5'>
									<p className='text-[#111927] text-[16px] font-[500]'>
										Healthcare Erbology
									</p>
									<p className='text-[#6C737F] text-[16px] font-[400]'>
										in Accessories
									</p>
								</div>
							</div>
							<div className='flex flex-col gap-[2px]'>
								<p className='text-[#10B981] text-[16px] font-[500]'>13,153</p>
								<p className='text-[#6C737F] text-[16px] font-[400]'>
									in sales
								</p>
							</div>
						</div>
						<div className='flex justify-between w-[100%] items-center gap-[12px]'>
							<div className='flex items-center gap-[12px]'>
								<img src={image} alt='' />
								<div className='flex flex-col gap-0.5'>
									<p className='text-[#111927] text-[16px] font-[500]'>
										Healthcare Erbology
									</p>
									<p className='text-[#6C737F] text-[16px] font-[400]'>
										in Accessories
									</p>
								</div>
							</div>
							<div className='flex flex-col gap-[2px]'>
								<p className='text-[#10B981] text-[16px] font-[500]'>13,153</p>
								<p className='text-[#6C737F] text-[16px] font-[400]'>
									in sales
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col md:flex-row  gap-[16px]'>
				<div className='md:w-[50%] flex flex-col gap-[8px] border p-[20px] border-[#00000014] rounded-[4px] h-[400px]'>
					<p className='text-[#131523] text-[16px] font-[600]'>
						Recent Transactions
					</p>
					<div className='flex flex-col w-[100%]'>
						<div className='flex pb-[12px] pt-[4px] pr-[16px] items-center border-b border-b-[#00000014] justify-between w-full'>
							<p className='text-[#5A607F] font-[400] text-[14px]  w-[100px]'>
								Name
							</p>
							<p className='text-[#5A607F] font-[400] text-[14px] '>Date</p>
							<p className='text-[#5A607F] font-[400] text-[14px] '>Amount</p>
							<p className='text-[#5A607F] font-[400] text-[14px] '>Status</p>
						</div>
						<div className='w-full pt-[8px] flex flex-col'>
							<div className='py-[6px] md:py-[10px] flex justify-between w-full'>
								<p className='w-[80px] md:w-[100px] text-[#131523] font-[500] text-[12px] md:text-[14px]'>
									Jagarnath S.
								</p>
								<p className='text-[#131523] text-[12px] md:text-[14px] font-[400] w-[60px] md:w-[80px]'>
									24.05.2023
								</p>
								<p className='text-[#131523] text-[12px] md:text-[14px] font-[400] w-[40px] md:w-[60px]'>
									$124.97
								</p>
								<p className='text-[#06A561] rounded-[4px] py-[2px] w-[50px] md:w-[70px] flex items-center justify-center bg-[#C4F8E2] text-[12px] md:text-[14px] font-[400]'>
									Paid
								</p>
							</div>
							<div className='py-[6px] md:py-[10px] flex justify-between w-full'>
								<p className='w-[80px] md:w-[100px] text-[#131523] font-[500] text-[12px] md:text-[14px]'>
									Anand G.
								</p>
								<p className='text-[#131523] text-[12px] md:text-[14px] font-[400] w-[60px] md:w-[80px]'>
									23.05.2023
								</p>
								<p className='text-[#131523] text-[12px] md:text-[14px] font-[400] w-[40px] md:w-[60px]'>
									$55.42
								</p>
								<p className='text-[#5A607F] rounded-[4px] py-[2px] w-[50px] md:w-[70px] flex items-center justify-center bg-[#E6E9F4] text-[12px] md:text-[14px] font-[400]'>
									Pending
								</p>
							</div>
							<div className='py-[6px] md:py-[10px] flex justify-between w-full'>
								<p className='w-[80px] md:w-[100px] text-[#131523] font-[500] text-[12px] md:text-[14px]'>
									Kartik S.
								</p>
								<p className='text-[#131523] text-[12px] md:text-[14px] font-[400] w-[60px] md:w-[80px]'>
									23.05.2023
								</p>
								<p className='text-[#131523] text-[12px] md:text-[14px] font-[400] w-[40px] md:w-[60px]'>
									$89.90
								</p>
								<p className='text-[#06A561] rounded-[4px] py-[2px] w-[50px] md:w-[70px] flex items-center justify-center bg-[#C4F8E2] text-[12px] md:text-[14px] font-[400]'>
									Paid
								</p>
							</div>
							<div className='py-[6px] md:py-[10px] flex justify-between w-full'>
								<p className='w-[80px] md:w-[100px] text-[#131523] font-[500] text-[12px] md:text-[14px]'>
									Rakesh S.
								</p>
								<p className='text-[#131523] text-[12px] md:text-[14px] font-[400] w-[60px] md:w-[80px]'>
									22.05.2023
								</p>
								<p className='text-[#131523] text-[12px] md:text-[14px] font-[400] w-[40px] md:w-[60px]'>
									$144.94
								</p>
								<p className='text-[#5A607F] rounded-[4px] py-[2px] w-[50px] md:w-[70px] flex items-center justify-center bg-[#E6E9F4] text-[12px] md:text-[14px] font-[400]'>
									Pending
								</p>
							</div>
							<div className='py-[6px] md:py-[10px] flex justify-between w-full'>
								<p className='w-[80px] md:w-[100px] text-[#131523] font-[500] text-[12px] md:text-[14px]'>
									Anup S.
								</p>
								<p className='text-[#131523] text-[12px] md:text-[14px] font-[400] w-[60px] md:w-[80px]'>
									22.05.2023
								</p>
								<p className='text-[#131523] text-[12px] md:text-[14px] font-[400] w-[40px] md:w-[60px]'>
									$70.52
								</p>
								<p className='text-[#06A561] rounded-[4px] py-[2px] w-[50px] md:w-[70px] flex items-center justify-center bg-[#C4F8E2] text-[12px] md:text-[14px] font-[400]'>
									Paid
								</p>
							</div>
							<div className='py-[6px] md:py-[10px] flex justify-between w-full'>
								<p className='w-[80px] md:w-[100px] text-[#131523] font-[500] text-[12px] md:text-[14px]'>
									Jimmy P.
								</p>
								<p className='text-[#131523] text-[12px] md:text-[14px] font-[400] w-[60px] md:w-[80px]'>
									22.05.2023
								</p>
								<p className='text-[#131523] text-[12px] md:text-[14px] font-[400] w-[40px] md:w-[60px]'>
									$70.52
								</p>
								<p className='text-[#06A561] rounded-[4px] py-[2px] w-[50px] md:w-[70px] flex items-center justify-center bg-[#C4F8E2] text-[12px] md:text-[14px] font-[400]'>
									Paid
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='md:w-[50%] flex flex-col gap-[8px] border  p-[20px] border-[#00000014] rounded-[4px] h-[400px]'>
					<p className='text-[#131523] text-[16px] font-[600]'>
						Top Products by Units Sold
					</p>
					<div className='flex flex-col w-[100%]'>
						<div className='flex w-[100%] pb-[12px] pt-[4px] pr-[16px] items-center border-b border-b-[#00000014] justify-between'>
							<p className='text-[#5A607F] font-[400] text-[14px] w-[170px] md:w-[210px]'>
								Name
							</p>
							<p className='text-[#5A607F] font-[400] text-[14px] '>Price</p>
							<p className='text-[#5A607F] font-[400] text-[14px] '>Units</p>
						</div>
						<div className='w-full flex flex-col'>
							<div className='py-[10px] flex justify-between w-full'>
								<div className='flex flex-col w-full '>
									<div className='py-[8px] flex justify-between bg-[#FFFFFF]'>
										<div className='md:w-[210px] w-[170px] flex items-center gap-[12px]'>
											<div className='bg-[#ECF2FF] rounded-[4px] w-[31px] md:w-[41px] h-[31px] md:h-[41px]'></div>
											<p className='text-[#131523] text-[12px] md:text-[14px] font-[500]'>
												Men Grey Hoodie
											</p>
										</div>
										<p className='w-[28px]  md:w-[48px] text-[#131523] text-[12px] md:text-[14px] font-[400]'>
											$49.90
										</p>
										<p className='w-[17px]  md:w-[27] text-[#131523] text-[12px] md:text-[14px] font-[400]'>
											204
										</p>
									</div>
									<div className='py-[8px] flex justify-between bg-[#FFFFFF]'>
										<div className='md:w-[210px] w-[170px] flex items-center gap-[12px]'>
											<div className='bg-[#ECF2FF] rounded-[4px] w-[31px] md:w-[41px] h-[31px] md:h-[41px]'></div>
											<p className='text-[#131523] text-[12px] md:text-[14px] font-[500]'>
												Women Striped T-Shirt
											</p>
										</div>
										<p className='w-[28px]  md:w-[48px] text-[#131523] text-[12px] md:text-[14px] font-[400]'>
											$34.90
										</p>
										<p className='w-[17px]  md:w-[27] text-[#131523] text-[12px] md:text-[14px] font-[400]'>
											155
										</p>
									</div>
									<div className='py-[8px] flex justify-between bg-[#FFFFFF]'>
										<div className='md:w-[210px] w-[170px] flex items-center gap-[12px]'>
											<div className='bg-[#ECF2FF] rounded-[4px] w-[31px] md:w-[41px] h-[31px] md:h-[41px]'></div>
											<p className='text-[#131523] text-[12px] md:text-[14px] font-[500]'>
												Wome White T-Shirt
											</p>
										</div>
										<p className='w-[28px]  md:w-[48px] text-[#131523] text-[12px] md:text-[14px] font-[400]'>
											$40.90
										</p>
										<p className='w-[17px]  md:w-[27] text-[#131523] text-[12px] md:text-[14px] font-[400]'>
											120
										</p>
									</div>
									<div className='py-[8px] flex justify-between bg-[#FFFFFF]'>
										<div className='md:w-[210px] w-[170px] flex items-center gap-[12px]'>
											<div className='bg-[#ECF2FF] rounded-[4px] w-[31px] md:w-[41px] h-[31px] md:h-[41px]'></div>
											<p className='text-[#131523] text-[12px] md:text-[14px] font-[500]'>
												Men White T-Shirt
											</p>
										</div>
										<p className='w-[28px]  md:w-[48px] text-[#131523] text-[12px] md:text-[14px] font-[400]'>
											$49.90
										</p>
										<p className='w-[17px]  md:w-[27] text-[#131523] text-[12px] md:text-[14px] font-[400]'>
											204
										</p>
									</div>
									<div className='py-[8px] flex justify-between bg-[#FFFFFF]'>
										<div className='md:w-[210px] w-[170px] flex items-center gap-[12px]'>
											<div className='bg-[#ECF2FF] rounded-[4px] w-[31px] md:w-[41px] h-[31px] md:h-[41px]'></div>
											<p className='text-[#131523] text-[12px] md:text-[14px] font-[500]'>
												Women Red T-Shirt
											</p>
										</div>
										<p className='w-[28px]  md:w-[48px] text-[#131523] text-[12px] md:text-[14px] font-[400]'>
											$34.90
										</p>
										<p className='w-[17px]  md:w-[27] text-[#131523] text-[12px] md:text-[14px] font-[400]'>
											155
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
