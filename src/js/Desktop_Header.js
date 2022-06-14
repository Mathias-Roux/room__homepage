import '../styles/Desktop_Header.css'
import logo from '../assets/logo.svg'

export function Desktop_Header() {
	return (
		<div className="desktop_header">
			<div className="title">
				<img src={logo} alt="room" />
			</div>
			<ul className="links">
				<li>home</li>
				<li>shop</li>
				<li>about</li>
				<li>contact</li>
			</ul>
		</div>
	)
}