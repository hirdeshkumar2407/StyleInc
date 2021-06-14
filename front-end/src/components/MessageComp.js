import React from 'react';

const MessageComp = (props) => {
	return <div className={`alert alert-${props.variant || 'info'}`}>{props.children}</div>;
};

export default MessageComp;
