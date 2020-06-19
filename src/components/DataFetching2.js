import React,{useState, useEffect} from 'react'

function DataFetching2() {
	const url = 'https://jsonplaceholder.typicode.com/posts';
	const [post, setPost] = useState({});
	const [value, setValue] = useState(1);
	const [id, setId] = useState("");

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${value}`)
		.then(res=>res.json())
			.then(data=>{
				setPost(data)
			})
		.catch(err=>{
			console.log(err.message)
		})
	}, [id])


	const handleChange = (e) =>{
		setValue(e.target.value)
	}

	const handleClick = () => {
		setId(value)
	}

	return (
		<div>
			<input type="text" value= {value} onChange={handleChange}/>
			<button onClick = {handleClick}>Get</button>
			<p>{post.title}</p>
		</div>
	)
}

export default DataFetching2