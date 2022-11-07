import React from 'react'
import { Container } from 'react-bootstrap'

const About = () => {
	return (
		<>
			<Container>
				<div className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column pb-5'>
					<main className='px-3 about'>
						<h3 class='my-5'>Hi, we are Maisonneuve Tech</h3>
						<p>
							Fondée en 1991, Maisonneuve Tech est une entreprise
							spécialisée dans la vente d'informatique, de
							composants et de produits électroniques. Depuis
							maintent 25ans, nous cherchon toujours à offrir à
							nos clients les meilleurs produits aux meilleurs
							prix offerts sur le marché de l'informatique de
							détail.
						</p>
						<p>
							Grâce à une demande grandissante et à une clientèle
							toujours plus fidèle composée d'étudiants, de
							professionnels et de familles, Maisonneuve Tech est
							maintenant une force pionnière de l'industrie
							comptant plus de 1000 employés répartis dans un
							trentaine de magasins à travers le Canada.
						</p>
						<img src='/images/aboutPage.jpg' className='mt-5'></img>
					</main>
				</div>
			</Container>
		</>
	)
}

export default About
