import { React, useState, useEffect} from 'react'

import '../styles/Controller.css'
import left_arrow from '../assets/icon-angle-left.svg'
import right_arrow from '../assets/icon-angle-right.svg'

export function Controller() {
	return (
		<div className="controller">
			<div className="left">
				<img src={left_arrow} alt="left_arrow" />
			</div>
			<div className="right">
				<img src={right_arrow} alt="right_arrow" />
			</div>
		</div>
	)
}