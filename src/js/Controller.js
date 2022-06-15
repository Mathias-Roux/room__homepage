import '../styles/Controller.css'
import left_arrow from '../assets/icon-angle-left.svg'
import right_arrow from '../assets/icon-angle-right.svg'

export function Controller({step: number}) {
	return (
		<div className="controller">
			<div className="left" onClick={() => { step(3) }} >
				<img src={left_arrow} alt="left_arrow" />
			</div>
			<div className="right" onClick={() => { step(1) }}>
				<img src={right_arrow} alt="right_arrow" />
			</div>
		</div>
	)
}