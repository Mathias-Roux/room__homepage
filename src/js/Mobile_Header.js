import { React, useState, useEffect} from 'react'

import '../styles/Mobile_Header.css'
import logo from '../assets/logo.svg'
import icon_burger from '../assets/icon-hamburger.svg'
import icon_close from '../assets/icon-close.svg'

import '../styles/Mobile_menu.css'
import icon_close from '../assets/icon-close.svg'

export function Mobile_Header() {
	const [ active, setActive ] = useState(false)

	return (
		<div className="mobile_header">
			{ active === false ?
				<div className="closed">
					<div className="icon" onClick={() => setActive(!active)}>
						<img src={icon_burger} alt="icon_burger" />
					</div>
					<div className="title">
						<img src={logo} alt="room" />
					</div>
				</div>
				:
				<div className="opened">
						<div className="icon" onClick={() => setActive(!active)}>
							<img src={icon_close} alt="icon_close" />
						</div>
						<ul className="list">
							<li>home</li>
							<li>shop</li>
							<li>about</li>
							<li>contact</li>
						</ul>
				</div>
			}
		</div>
	)
}