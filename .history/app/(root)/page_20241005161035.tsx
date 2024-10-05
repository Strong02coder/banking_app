import HeaderBox from '@/components/Headerbox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
	const loggedIn = await get
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
					  accounts = {[]}
						totalBanks = {1}
						totalCurrentBalance = {1250.55}
					/>
				</header>
				RECENT TRANSACTION
			</div>
			<RightSidebar 
			  user = {loggedIn}
				transaction = {[]}
				banks = {[{ currentBalance: 452.30 }, { currentBalance: 500.21 }]}
			/>
		</section>
	)
}

export default Home