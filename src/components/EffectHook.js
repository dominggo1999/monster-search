import React, { useState, useEffect} from 'react'

const EffectHook = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('');	

	useEffect(() => {
		console.log('Page\'s been updated' );
		document.title = `You've clicked the button ${count} times`;
	},[count])

	return (
		<div>
			<input type="text" placeholder="Input your name" onChange={e=>setName(e.target.value)} />
			<button onClick = {()=>setCount(count + 1)}>
				You clicked {count} times
			</button>
		</div>
	)
}

export default EffectHook