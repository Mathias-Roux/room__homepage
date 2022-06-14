import { React, useState, useEffect} from 'react'

import { Mobile_Header } from './Mobile_Header.js'
import { Desktop_Header } from './Desktop_Header.js'

export function Header() {
	const [width, setWidth] = useState(window.innerWidth);
  	const breakpoint = 848;
	
	useEffect(() => {
    	window.addEventListener("resize", () => setWidth(window.innerWidth));
  	}, []);

	return width < breakpoint ? <Mobile_Header /> : <Desktop_Header />
}