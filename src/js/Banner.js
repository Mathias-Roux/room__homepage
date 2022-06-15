import '../styles/Banner.css';

import banner from '../assets/mobile-image-hero-1.jpg';

import { Controller } from './Controller.js'

export function Banner() {
	return (
		<div className="banner" style={{position: 'relative'}}>
			<Controller />
		</div>
	)
}