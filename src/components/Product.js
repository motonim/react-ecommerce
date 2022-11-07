import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Product = ({ product, onDelete, onToggle }) => {
	return (
		<Card
			className={`my-3 p-3 rounded ${product.stock ? '' : 'unavailable'}`}
			onDoubleClick={() => onToggle(product.id)}
		>
			<Card.Img src={product.image} variant='top' />
			<Card.Body>
				<Card.Title as='div'>
					<h5>
						<strong>{product.name}</strong>
					</h5>
				</Card.Title>
				<Card.Text as='p' style={{ color: '#888888' }}>
					{product.category}
				</Card.Text>
				<Card.Text as='h3'>${product.price}</Card.Text>
				<Card.Title as='div'>{product.description} </Card.Title>

				<div className='d-flex justify-content-between mt-3'>
					<Button
						style={{
							backgroundColor: 'white',
							color: 'black',
							padding: '0',
							marginLeft: 'auto',
						}}
						onClick={() => onDelete(product.id)}
					>
						<i className='fa-solid fa-trash'></i>
					</Button>
				</div>
			</Card.Body>
		</Card>
	)
}

export default Product
