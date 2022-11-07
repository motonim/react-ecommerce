import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import HomeScreen from './screens/HomeScreen'
import ProductsScreen from './screens/ProductsScreen'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/about' element={<About />} />
				</Routes>
				<main className='py-3'>
					<Container>
						<Routes>
							<Route path='/' element={<HomeScreen />} />
							<Route
								path='/products'
								element={<ProductsScreen />}
							/>
						</Routes>
					</Container>
				</main>
				<Footer />
			</BrowserRouter>
		</>
	)
}

export default App
