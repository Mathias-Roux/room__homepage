import { useState } from 'react'

import '../styles/App.css'
import { Header } from './Header.js'
import { Banner } from './Banner.js'
import { Shop } from './Shop.js'
import { Dark_chair } from './Dark_chair.js'
import { About } from './About.js'
import { Light_chair } from './Light_chair.js'

import '../styles/Controller.css'
import left_arrow from '../assets/icon-angle-left.svg'
import right_arrow from '../assets/icon-angle-right.svg'


export function App() {
	let [ number, setNumber ] = useState(1)

	return (
		<div className="app">
			<Header />
			<div className="grid">
				<Banner step={number}/>
				<div className="controller">
					<div className="left" onClick={() => {
						if (number === 1){
							setNumber(number = 3)
						} else setNumber(number - 1)
					}} >
						<img src={left_arrow} alt="left_arrow" />
					</div>
					<div className="right" onClick={() => {
						if (number === 3){
							setNumber(number = 1)
						} else setNumber(number + 1)
					}}>
						<img src={right_arrow} alt="right_arrow" />
					</div>
				</div>
				<Shop step={number}/>
				<Dark_chair />
				<About />
				<Light_chair />
			</div>
		</div>
	)
}