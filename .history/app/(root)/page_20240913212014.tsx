import Headerbox from '@/components/Headerbox'

const Home = () => {
	const loggedIn = {firstName : 'Aryan'}
	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<Headerbox 
					  type = "greeting"
						title = "Welcome"
						user = {loggedIn?.firstName || 'Guest'}
						subtext = 
					/>
				</header>
			</div>
		</section>
	)
}

export default Home