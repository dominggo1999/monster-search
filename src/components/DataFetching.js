import React,{useState, useEffect} from 'react'

function DataFetching() {
	const url = 'https://jsonplaceholder.typicode.com/posts';
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch(url)
			.then(res=>res.json())
			.then(data=>{
				setPosts(data)
			})
	})


	return (
		<div>
			<ul>
				{
					posts.map(e=>{
						return (
							<li key={e.id}>{e.title}</li>
						)
					})
				}
			</ul>
		</div>
	)
}

export default DataFetching