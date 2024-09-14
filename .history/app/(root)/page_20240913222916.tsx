import Headerox from '@/components/Headerbox'

const Home = () => {
	const loggedIn = {firstName : 'Aryan'}
	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<HeaderBox 
					  type = "greeting"
						title = "Welcome"
						user = {loggedIn?.firstName || 'Guest'}
						subtext = "Access and manage your account and transaction efficiently."
					/>
				</header>
			</div>
		</section>
	)
}

export default Home