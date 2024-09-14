const Headerbox = ({type = "title", title, subtext, user}: HeaderBoxProps) => {
	return (
		<div className="header-box">
			<h1 className="header-box-title">
				{title}
				{type === 'greeting' && (
					<span className=""></span>
				)}
			</h1>
		</div>
	)
}

export default Headerbox