import React from 'react';
function SearchBox({searchChange}) {
	return(
		<div className='pa2'>
			<input
				className='tc br3 pa3 ba b--yellow bg-light-yellow'
				type='search'
				placeholder='search categories'
				onChange={searchChange}
			/>
		</div>
		);
}
export default SearchBox;