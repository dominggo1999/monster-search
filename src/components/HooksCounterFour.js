import React,{ useState } from 'react'

const HooksCounterFour = () => {
	const [items, setItems] = useState([]);

	const addItem = () =>{
		setItems([...items, {
			id : items.length,
			value : Math.floor(Math.random() * 1000) 
		}])
	}

	return (
		<div className = "hook-counter">
			<button onClick ={addItem}>Add item</button>
			<ul>
				{
					items.map(item =>{
						return <li key = {item.id}>{item.value}</li>
					})
				}
			</ul>
		</div>
	)
}

export default HooksCounterFour