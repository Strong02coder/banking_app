import Headerbox from '@/components/Headerbox'

const Home = () => {
	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<Headerbox 
					  type = "greeting"
						
					/>
				</header>
			</div>
		</section>
	)
}

export default Home