import React,{ useState} from 'react'

const HookCounter = () => {

	const [count, setCount] = useState(0);
	const handleCount = (e) =>{
		setCount(count+1)
	}

	return (
		<div>
			<button onClick = {handleCount}>Click count: {count} </button>
		</div>
	)
}

export default HookCounter