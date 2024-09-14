import Headerbox from '@/components/Headerbox'

const Home = () => {
	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<Headerbox 
					  type = "greeting"
						title = "Welcome"
						subtitle = "This is a subtitle"
					/>
				</header>
			</div>
		</section>
	)
}

export default Home