import React from 'react';

const childToItem = (child, index) => (<li key={ index }>{ child }</li>);

export default ({ children, menuProps }) => (
	<ul {...menuProps}>
		{children.map(childToItem)}
	</ul>)