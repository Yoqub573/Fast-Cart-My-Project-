import React, { useEffect, useState } from 'react'
import bg from '../../../../shared/gradient-bg.svg fill.svg'
import logo from '../../../../shared/Group 1116606595 (2).svg'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../../../widgets/Button'
import { useLoginUserMutation } from '../../../../features/reducers/userApi'

const LogIn = () => {
	let [loginUser] = useLoginUserMutation()
	let [name, setName] = useState('')
	let [Password, setPassword] = useState('')
	let navigate = useNavigate()
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	async function submit(e) {
		e.preventDefault()
		setError('')
		setLoading(true)
		try {
			const { data } = await loginUser({
				userName: name,
				password: Password,
			}).unwrap()
			if (data) {
				if(name == 'SuperAdmin' || name == 'admin'){
					localStorage.setItem('access_token', data)
					navigate('/')
				}else{
					setError("You aren't a Admin!")
				}
			}
		} catch (err) {
			setError('Log-in failed. Please check your network or Password and Name.')
		} finally {
			setLoading(false)
		}
	}
	let [eye, setEye] = useState(false)
	useEffect(() => {
			if (localStorage.getItem('access_token')) {
				navigate('/')
			}
		}, [navigate])
	return (
		<section className='flex h-[100vh] w-[100%] fixed z-[2000000000000] left-0 top-0'>
			<img
				src={bg}
				className='bg-[#1C2536] md:inline hidden w-[50%] absolute z-[-1]'
				alt=''
			/>
			<div className='w-[50%] hidden md:flex items-center  px-[64px]'>
				<div className='flex flex-col w-[50%] gap-[2px]'>
					<p className='text-white inline font-[500] text-[24px]'>
						Welcome to admin panel
					</p>
					<img src={logo} className='w-[100%]' alt='' />
				</div>
			</div>
			<div className='md:w-[50%] w-[100%] flex bg-white items-center justify-center'>
				<div className='flex flex-col gap-[20px] w-[80%] md:w-[60%]'>
					<p className='text-[#111927] text-[24px] font-[700]'>Log in</p>
					<form onSubmit={(e) => (submit(e),setError(''))} className='flex flex-col gap-[20px]'>
						<input	type='text'	className='border-2 border-[#E5E5E5] placeholder:text-[#737373] placeholder:text-[16px] outline-none placeholder:font-[400] rounded-[4px] p-[16px]'	name='email'	placeholder='Email'	autoComplete='username'	value={name}	onChange={e => (setName(e.target.value),setError(''))}	id='email'/>
						<div className='border-2 w-[100%] flex border-[#E5E5E5] rounded-[4px]'>
							<input	type={eye ? 'text' : 'password'}	className='placeholder:text-[#737373] peer w-full placeholder:text-[16px] placeholder:font-[400] outline-none rounded-[4px] p-[16px]'	name='password'	placeholder='Password'	autoComplete='current-password'	value={Password}	onChange={e => (setPassword(e.target.value),setError(''))}	id='password'/>
							<div className='flex w-[10%] p-[10px] items-center justify-center'>
								{(!eye && (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										onClick={() => setEye(!eye)}
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={2.5}
										stroke='currentColor'
										className='size-6 hover:animate-pulse animate-none hover:text-[#737373] text-[#909090]'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z'
										/>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
										/>
									</svg>
								)) || (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										onClick={() => setEye(!eye)}
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={2.5}
										stroke='currentColor'
										className='size-6 hover:animate-pulse animate-none hover:text-[#737373] text-[#909090]'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88'
										/>
									</svg>
								)}
							</div>
						</div>
							<p className='text-[#EF4444] animate-pulse text-center text-[16px] font-[500]'>{error}</p>
						<button
							className={`bg-[#2563EB] ${loading ? "" : ""} hover:bg-blue-500 rounded-[4px] text-[16px] font-[500] leading-24px px-[20px] flex items-center justify-center gap-[10px] py-[14px] h-[52px] text-white`}
						>
							{loading && (
								<svg	className='animate-spin h-5 w-5 text-white'	xmlns='http://www.w3.org/2000/svg'	fill='none'	viewBox='0 0 24 24'>
									<circle	className='opacity-25'	cx='12'	cy='12'	r='10'	stroke='currentColor'	strokeWidth='4'></circle>
									<path	className='opacity-75'	fill='currentColor'	d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z'></path>
								</svg>
							)}
							{loading ? 'Log in...' : 'Log in'}
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default LogIn
