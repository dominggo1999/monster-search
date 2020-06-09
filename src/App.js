import React from 'react'
import './App.scss'
// import HookCounter from './components/HookCounter.js'
// import HooksCounterTwo from './components/HooksCounterTwo.js'
// import HooksCounterThree from './components/HooksCounterThree.js'
// import HooksCounterFour from './components/HooksCounterFour.js'
// import EffectHook from './components/EffectHook.js'
// import MouseHook from './components/MouseHook.js'
// import TooglePosition from './components/TooglePosition.js'
import Timer from './components/Timer.js'

class App extends React.Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 keyPressed:""
		}
	}

	componentDidMount(){
		document.addEventListener('keyup',(e)=>{
	       this.setState({
	       		keyPressed : e.key
	       });
		})
	}

	render() {
		return (
			<div className="hook-counter">
				<Timer keyPressed={this.state.keyPressed}/>
			</div>
		)
	}
}

export default App