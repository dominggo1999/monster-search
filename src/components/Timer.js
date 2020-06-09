import React,{useState, useEffect} from 'react'

function Timer() {
	const [date, setDate] = useState(JSON.stringify(new Date));
	const [list, setList] = useState([]);

	useEffect(() => {
		const interval = setInterval(tick, 1000);
		return () => {
			clearInterval(interval);
		};
	}, [])

	useEffect(() => {
		const itemInterval = setInterval(addItem, 1000);
		return () => {
			clearInterval(itemInterval);
		};
	}, [list])

	const tick = () =>{
		setDate(JSON.stringify(new Date));
	}

	const addItem = () =>{
		const updateItem = () =>{
			setList(oldArr => [...oldArr, {
				id : Math.floor(Math.random()*100000),
				content : Math.floor(Math.random()*100)
			}])
		}
		return list.length >= 20? setList(oldArr => [oldArr[oldArr.length - 1]]): updateItem();
	}

	const addWithEnter = (e) =>{
		return e.key === "Enter" ? addItem(): null
	}

	return (
		<div>
			<p>Time : {date}</p>
			<button onClick = {addItem}>Add List</button>
			<button onKeyUp={addWithEnter}>Add item using enter key</button>
			{
				list.map(e=>{
					return <p key = {e.id}>{e.content}</p>
				})
			}
		</div>
	)
}

export default Timer