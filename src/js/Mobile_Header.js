import { React, useState, useEffect} from 'react'

import '../styles/Mobile_Header.css'
import icon_hamburger from '../assets/icon-hamburger.svg'
import logo from '../assets/logo.svg'

export function Mobile_Header() {
	return (
		<div className="mobile_header">
			<div className="icon">
				<img src={icon_hamburger} alt="icon_hamburger" />
			</div>
			<div className="title">
				<img src={logo} alt="room" />
			</div>
		</div>
	)
}