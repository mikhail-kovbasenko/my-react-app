import preloader from './preloader.gif';

export const Preloader = props => {
	return (
		<div style={{
			width: '450px',
			margin: '150px auto',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		}}>
			<img src={preloader} alt="" style={{
				transform: 'scale(2)'
			}}/>
		</div>
	)
}

