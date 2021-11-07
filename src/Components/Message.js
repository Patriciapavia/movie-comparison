import React from 'react';
import Alert from '@mui/material/Alert';

const Message = ({ children }) => {
	return <Alert severity='error'>{children} Please try again later!</Alert>;
};

export default Message;
