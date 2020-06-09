import React,{useState} from 'react'
import MouseHook from './MouseHook.js'

const TooglePosition = () =>{
	const [display, setDisplay] = useState(true);

	return(
		<div>
			<button onClick = {() => setDisplay(!display)}>Toggle position display</button>
			{display && <MouseHook/>}
		</div>
	)
}

export default TooglePosition