import React,{useState, useEffect} from 'react'

const MouseHook = () => {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	const logMousePosition = (e) =>{
		setX(e.clientX);
		setY(e.clientY);
	}

	useEffect(() => {
		window.addEventListener('mousemove',logMousePosition);

		return () =>{
			window.removeEventListener('mousemove',logMousePosition);
		}
	},[])

	return (
		<div>
			<p>Mouse position : X-->{x} Y-->{y}</p>
		</div>
	)
}

export default MouseHook