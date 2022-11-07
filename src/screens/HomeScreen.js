import React from 'react'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const HomeScreen = () => {
	return (
		<div className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column pb-5'>
			<main className='px-3 main'>
				<h2 class='mb-5'>Chez Maisonneuve Tech,</h2>
				<h6>
					Meilleur, vous pouvez vous le procurer à un excellent prix
				</h6>
			</main>
			<LinkContainer to='/products'>
				<Button
					variant='primary'
					style={{ width: 'fit-content' }}
					className='mx-auto'
				>
					Voir Produits
				</Button>
			</LinkContainer>
		</div>
	)
}

export default HomeScreen
