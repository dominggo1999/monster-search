import React from 'react'
import './App.scss'
// import HookCounter from './components/HookCounter.js'
// import HooksCounterTwo from './components/HooksCounterTwo.js'
// import HooksCounterThree from './components/HooksCounterThree.js'
// import HooksCounterFour from './components/HooksCounterFour.js'
// import EffectHook from './components/EffectHook.js'
// import MouseHook from './components/MouseHook.js'
// import TooglePosition from './components/TooglePosition.js'
// import Timer from './components/Timer.js'
// import DataFetching from './components/DataFetching.js'
import DataFetching2 from './components/DataFetching2.js'
import ComponentA from './components/ComponentA.js'

export const UserContext = React.createContext();
export const UserChannel = React.createContext();

const App = () => {
	return (
		<div className = "hook-counter">
			<UserContext.Provider value = {"Arnold"}>
				<UserChannel.Provider value = {"jajaja"}>
					<ComponentA/>		
				</UserChannel.Provider>	
			</UserContext.Provider>
		</div>
	)
}

export default App