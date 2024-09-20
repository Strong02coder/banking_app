import HeaderBox from '@/components/Headerbox'
import TotalBalanceBox from '@/components/TotalBalanceBox'

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
					<TotalBalanceBox
					  
					/>
				</header>
			</div>
		</section>
	)
}

export default Home