import '../styles/Banner.css';

import banner1 from '../assets/desktop-image-hero-1.jpg';
import banner2 from '../assets/desktop-image-hero-2.jpg';
import banner3 from '../assets/desktop-image-hero-3.jpg';

export function Banner( { step: number } ) {
	const images = {
		1: {
			image: banner1,
		},
		2: {
			image: banner2,
		},
		3: {
			image: banner3,
		}
	}


	return (
		<div className="banner" style={{backgroundImage: `url(${images[number].image})`}}></div>
	)
}