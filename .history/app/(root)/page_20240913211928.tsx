import Headerbox from '@/components/Headerbox'

const Home = () => {
	const loggedIn = {firstName : 'Ar'}
	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<Headerbox 
					  type = "greeting"
						title = "Welcome"
						user = {}
					/>
				</header>
			</div>
		</section>
	)
}

export default Home