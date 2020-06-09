import React,{ useState } from 'react'

const HooksCounterThree = () => {
	const [name, setName] = useState({
		firstName : '',
		lastName : ''
	})

	return (
		<div className="hook-counter">
			<input 
				type="text" 
				value = {name.firstName} 
				onChange={(e) => setName({...name, firstName : e.target.value})} 
			/>
			<input 
				type="text" 
				value = {name.lastName} 
				onChange={(e) => setName({...name, lastName : e.target.value})} 
			/>
			<h2>{name.firstName} {name.lastName}</h2>
		</div>
	)
}

export default HooksCounterThree