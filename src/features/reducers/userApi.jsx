import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
	reducerPath: 'apiUsers',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://store-api.softclub.tj/',
		prepareHeaders: headers => {
			const token = localStorage.getItem('access_token')
			if (token) {
				headers.set('Authorization', `Bearer ${token}`)
			}
			return headers
		},
	}),
	endpoints: builder => ({
		loginUser: builder.mutation({
			query: user => ({
				url: 'Account/login',
				method: 'POST',
				body: user,
			}),
		}),
		getProduct: builder.query({
			query: () => 'Product/get-products',
		}),
		getCategory: builder.query({
			query: () => 'Category/get-categories',
		}),
		getBrand: builder.query({
			query: () => 'Brand/get-brands',
		}),
		getColor: builder.query({
			query: () => 'Color/get-colors',
		}),
		getBrands: builder.query({
			query: () => 'Brand/get-brands',
		}),
		getSubCategory: builder.query({
			query: () => 'SubCategory/get-sub-category',
		}),
		getById: builder.query({
			query: (id) => `Product/get-product-by-id?id=${id}`,
		}),
		deleteProd: builder.mutation({
			query: id => ({
				url: `Product/delete-product?id=${id}`,
				method: 'DELETE',
			}),
		}),
		deleteCategory: builder.mutation({
			query: id => ({
				url: `Category/delete-category?id=${id}`,
				method: 'DELETE',
			}),
		}),
		deleteBrand: builder.mutation({
			query: id => ({
				url: `Brand/delete-brand?id=${id}`,
				method: 'DELETE',
			}),
		}),
		deleteSubCategory: builder.mutation({
			query: id => ({
				url: `SubCategory/delete-sub-category?id=${id}`,
				method: 'DELETE',
			}),
		}),
		addColor: builder.mutation({
			query: add => ({
				url: `Color/add-color?ColorName=${add}%23`,
				method: 'POST',
			}),
		}),
		addProduct: builder.mutation({
			query: add => ({
				url: `Product/add-product`,
				method: 'POST',
				body:add
			}),
		}),
		addCategory: builder.mutation({
			query: add => ({
				url: `Category/add-category`,
				method: 'POST',
				body:add
			}),
		}),
		addBrand: builder.mutation({
			query: add => ({
				url: `Brand/add-brand?BrandName=${add}`,
				method: 'POST',
			}),
		}),
		addSubCategory: builder.mutation({
			query:(name) => ({
				url: `SubCategory/add-sub-category?CategoryId=${name.id}&SubCategoryName=${name.name}`,
				method: 'POST',
				body:name.name
			}),
		}),
		editBrand: builder.mutation({
			query:(name) => ({
				url: `Brand/update-brand?Id=${name.id}&BrandName=${name.name}`,
				method: 'PUT'
			}),
		}),
		editSubCategory: builder.mutation({
			query:(name) => ({
				url: `SubCategory/update-sub-category?Id=${name.id}&CategoryId=${name.catId}&SubCategoryName=${name.name}`,
				method: 'PUT'
			}),
		}),
		editCategory: builder.mutation({
			query:(data) => ({
				url: `Category/update-category`,
				method: 'PUT',
				body:data
			}),
		}),
		editProduct: builder.mutation({
			query:(data) => ({
				url: `Product/Product/update-product?Id=${data.id}&BrandId=${data.brandId}&ColorId=${data.colorId}&ProductName=${data.productName}&Description=${data.description}&Quantity=${data.quantity}&Weight=${data.weight}&Size=${data.size}&Code=${data.code}&Price=${data.price}&HasDiscount=${data.hasDiscount}&DiscountPrice=${data.discountPrice}&SubCategoryId=${data.subCotegoriesId}`,
				method: 'PUT',
			}),
		}),
	}),
})

export const {
	useLoginUserMutation,
	useAddColorMutation,
	useGetProductQuery,
	useDeleteProdMutation,
	useGetCategoryQuery,
	useGetBrandQuery,
	useGetColorQuery,
	useAddCategoryMutation,
	useDeleteCategoryMutation,
	useGetBrandsQuery,
	useDeleteBrandMutation,
	useGetSubCategoryQuery,
	useAddBrandMutation,
	useDeleteSubCategoryMutation,
	useAddSubCategoryMutation,
	useAddProductMutation,
	useEditBrandMutation,
	useEditSubCategoryMutation,
	useEditCategoryMutation,
	useGetByIdQuery,
	useEditProductMutation
} = userApi
