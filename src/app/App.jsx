import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/protected/layout/layout'
import LogIn from './pages/auth/log/logIn'
import Orders from './pages/protected/Orders/Orders'
import Others from './pages/protected/Other/Others'
import Dashboard from './pages/protected/Dashboard/Dashboard'
import Products from './pages/protected/Products/Products'
import Categories from './pages/protected/Other/Categories'
import SubCategory from './pages/protected/Other/SubCategory'
import Brand from './pages/protected/Other/Brand'
import AddProduct from './pages/protected/Products/addProduct'
import EditProduct from './pages/protected/Products/EditProduct'

const App = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					index: true,
					element: <Dashboard />,
				},
				{
					path: '/log-in',
					element: <LogIn />,
				},
				{
					path: '/orders',
					element: <Orders />,
				},
				{
					path: '/others',
					element: <Others />,
					children:[
						{
							index:true,
							element:<Categories/>
						},
						{
							path:'brands',
							element:<Brand/>
						},
						{
							path:'sub-categoty',
							element:<SubCategory/>
						}
					]
				},
				{
					path: '/products',
					element: <Products />,
				},
				{
					path:'/add-new-product',
					element: <AddProduct/>
				},
				{
					path:'/edit-product/:id',
					element: <EditProduct/>
				},
			]
		},
	])
	return <RouterProvider router={router} />
}

export default App
