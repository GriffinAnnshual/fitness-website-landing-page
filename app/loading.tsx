import React from 'react'

function loading() {
  return (
		<div>
			<div
				id="js-preloader"
				className="js-preloader">
				<div className="preloader-inner">
					<span className="dot"></span>
					<div className="dots">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default loading