import '../styles/Shop.css';

import arrow from '../assets/icon-arrow.svg'

export function Shop() {
	return (
		<div className="shop">
			<h1>Discover innovation ways to decorate</h1>
			<p>We provide unmatched quality, comfort, and
 			   style for property owners across the country.
			   Our experts combine form and function in
			   bringing your vision to life. Create a room in
			   your own style with our collection and make your
               property a reflection of you and what you love.</p>
               <div className="button">
               	<span>shop now</span>
               	<img src={arrow} alt="arrow" />
               </div>
		</div>
	)
}