import Product from './Product'
import { Col } from 'react-bootstrap'

const Products = ({ products, onDelete, onToggle }) => {
	return (
		<>
			{products.map((product) => (
				<Col key={product.id} sm={12} md={6} lg={4} xl={3}>
					<Product
						product={product}
						onDelete={onDelete}
						onToggle={onToggle}
					/>
				</Col>
			))}
		</>
	)
}

export default Products
