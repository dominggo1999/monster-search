import React,{ useState } from 'react'

const HooksCounterTwo = () => {
	const [count, setCount] = useState(0);
	const increment = (e) =>{
		setCount(prev => prev + 1)
	} 

	const incrementTwo = (e) =>{
		increment();
		increment();
	}

	return (
		<div>
			<p>Count: {count}</p>
			<button onClick = {increment}>Increment</button>
			<button onClick = {incrementTwo}>Increment Two</button>
		</div>
	)
}

export default HooksCounterTwo