import '../styles/Shop.css';


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
               	<svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
               		<path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero"/>
               	</svg>
               </div>
		</div>
	)
}