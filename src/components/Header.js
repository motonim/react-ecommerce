import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>Maisonneuve Tech</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<LinkContainer to='/'>
								<Nav.Link href='/'>
									<i className='fa-solid fa-house'></i>{' '}
									Accueil
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/products'>
								<Nav.Link href='/products'>
									<i className='fa-solid fa-store'></i>{' '}
									Produits
								</Nav.Link>
							</LinkContainer>

							<LinkContainer to='/about'>
								<Nav.Link href='/about'>
									<i className='fa-solid fa-circle-info'></i>{' '}
									À Propos
								</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
