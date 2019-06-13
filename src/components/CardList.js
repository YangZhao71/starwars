import React from 'react';

function CardList({sources}) {
	return(
		<div>{
			sources.map((source, i) => {
				return(
					<button className='black br3 pa3 ma2 grow shadow-5 dib bg-yellow classify starwars'
					>
						{sources[i]}
					</button>
				);
			})
		}
		</div>
	);
}
export default CardList;