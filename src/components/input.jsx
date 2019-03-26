import React from 'react';
import Input from '@material-ui/core/Input';

const SourceField = (props) =>{
	return(
		<Input 
			id={ 'source' }
			onChange={ props.handleTextChange }
		/>
	);
}

export default SourceField;
