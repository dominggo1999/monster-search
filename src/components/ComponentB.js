import React,{useContext} from 'react'
import {UserContext, UserChannel} from '../App.js'

function ComponentB() {
	const user = useContext(UserContext);
	const channel = useContext(UserChannel);
	// Better way to consume context 
	// Import useContext from react
	// And then assign the valu of context to variable

	return (
		<div>
			<UserContext.Consumer>
				{
					user =>{
						return (
							<UserChannel.Consumer>
								{
									channel =>{
										return <div>My name is {user} , {channel}</div>
									}
								}
							</UserChannel.Consumer>
						)
					}
				}
			</UserContext.Consumer>

			<div>My name is {user} , {channel}</div>


		</div>
	)
}

export default ComponentB