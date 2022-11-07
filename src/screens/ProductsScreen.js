import React from 'react'
import { useState, useEffect } from 'react'
import Products from '../components/Products'
import { Row, Button } from 'react-bootstrap'
import AddProduct from '../components/AddProduct'

const ProductsScreen = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		const getProducts = async () => {
			const productsFromServer = await fetchProducts()
			setProducts(productsFromServer)
		}
		getProducts()
	}, [])

	const fetchProducts = async () => {
		const res = await fetch('http://localhost:5000/products')
		const data = await res.json()
		return data
	}

	const fetchProduct = async (id) => {
		const res = await fetch(`http://localhost:5000/products/${id}`)
		const data = await res.json()
		return data
	}

	const deleteProduct = async (id) => {
		await fetch(`http://localhost:5000/products/${id}`, {
			method: 'DELETE',
		})
		setProducts(products.filter((product) => product.id !== id))
	}

	const toggleStock = async (id) => {
		const productToToggle = await fetchProduct(id)
		const updateProduct = {
			...productToToggle,
			stock: !productToToggle.stock,
		}

		const res = await fetch(`http://localhost:5000/${id}`, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(updateProduct),
		})

		const data = await res.json()

		setProducts(
			products.map((product) =>
				product.id === id ? { ...product, stock: data.stock } : product
			)
		)
	}

	const addProduct = async (product) => {
		const res = await fetch('http://localhost:5000/products', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(product),
		})
		const newProduct = await res.json()
		setProducts([...products, newProduct])
	}

	const [showAdd, setShowAdd] = useState(false)

	return (
		<>
			<div className='d-flex justify-content-between mt-3'>
				<h1>Nos Produits</h1>
				<div
					className='d-flex justify-content-between'
					style={{ width: '50%' }}
				>
					{showAdd ? <AddProduct onAdd={addProduct} /> : ''}

					<Button
						variant='primary'
						onClick={() => setShowAdd(!showAdd)}
						style={{
							height: '40px',
							marginLeft: 'auto',
							width: '140px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<i
							className={`fa-solid ${
								showAdd ? 'fa-xmark' : 'fa-plus'
							}
						`}
						></i>{' '}
						{showAdd ? 'Annuler' : 'Ajouter'}
					</Button>
				</div>
			</div>
			<Row>
				<Products
					products={products}
					onDelete={deleteProduct}
					onToggle={toggleStock}
				/>
			</Row>
		</>
	)
}

export default ProductsScreen
