import React from 'react'
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

const AddProduct = ({ onAdd }) => {
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [category, setCategory] = useState('')
	const [price, setPrice] = useState('')
	const [stock, setStock] = useState(true)

	const onSubmit = (e) => {
		e.preventDefault()
		if (!name || !description || !category || !price) {
			alert('Veuillez remplir tous les champs')
			return
		}

		onAdd({ name, description, category, price, stock })
		setName('')
		setDescription('')
		setCategory('')
		setPrice('')
		setStock(true)
	}

	return (
		<>
			<form
				onSubmit={onSubmit}
				style={{ width: '100%', marginRight: '20px' }}
			>
				<Form.Group className='mb-3'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type='text'
						placeholder='Add Name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</Form.Group>

				<FloatingLabel>
					<Form.Label>Description</Form.Label>

					<Form.Control
						as='textarea'
						placeholder='Add Description'
						style={{ height: '100px' }}
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</FloatingLabel>

				<FloatingLabel>
					<Form.Label>Category</Form.Label>

					<Form.Select
						value={category}
						onChange={(e) => setCategory(e.target.value)}
						style={{ display: 'block', width: '100%' }}
					>
						<option>Open this select menu</option>
						<option value='Electronics'>Electronics</option>
						<option value='CarTechGPS'>Car Tech & GPS</option>
						<option value='Appliances'>Appliances</option>
					</Form.Select>
				</FloatingLabel>

				<Form.Group className='mb-3'>
					<Form.Label>Price</Form.Label>
					<Form.Control
						type='number'
						placeholder='Add Price'
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className='mb-3'>
					<Form.Label>Stock</Form.Label>
					<Form.Check
						type={'radio'}
						id={'default-radio'}
						label={'Disponible'}
						checked={stock === true}
					/>
				</Form.Group>
				<input
					type='submit'
					className='btn btn-block mb-5'
					value='Save Product'
					style={{ border: '1px solid' }}
				/>
			</form>
		</>
	)
}

export default AddProduct
