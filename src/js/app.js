import { useState } from 'react'
import '../styles/App.css'
import { Header } from './Header.js'
import { Banner } from './Banner.js'
import { Controller } from './Controller.js'
import { Shop } from './Shop.js'
import { Dark_chair } from './Dark_chair.js'
import { About } from './About.js'
import { Light_chair } from './Light_chair.js'

export function App() {
	const [step, setStep] = useState(1)

	return (
		<div className="app">
			<Header />
			<div className="grid">
				<Banner style={{position: 'relative'}}/>
				<Controller step={step}}/>
				<Shop step={1}/>
				<Dark_chair />
				<About />
				<Light_chair />
			</div>
		</div>
	)
}